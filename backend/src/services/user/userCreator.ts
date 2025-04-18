import assert from 'assert';
import EmailSender from '../../services/emailSender';
import UserRepository from '../../database/repositories/userRepository';
import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import TenantUserRepository from '../../database/repositories/tenantUserRepository';
import { tenantSubdomain } from '../tenantSubdomain';
import { IServiceOptions } from '../IServiceOptions';
import bcrypt from 'bcrypt';

const BCRYPT_SALT_ROUNDS = 12;

export default class UserCreator {
  options: IServiceOptions;
  transaction;
  data;
  emailsToInvite: Array<any> = [];
  emails: any = [];
  sendInvitationEmails = true;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates new user(s) via the User page.
   * Sends Invitation Emails if flagged.
   */
  async execute(data, sendInvitationEmails = true) {
    this.data = data;
    this.sendInvitationEmails = sendInvitationEmails;

    await this._validate();

    try {
      this.transaction = await SequelizeRepository.createTransaction(
        this.options.database,
      );

      await this._addOrUpdateAll();

      await SequelizeRepository.commitTransaction(
        this.transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        this.transaction,
      );
      throw error;
    }

    if (this._hasEmailsToInvite) {
      await this._sendAllInvitationEmails();
    }
  }

  get _roles() {
    if (
      this.data.roles &&
      !Array.isArray(this.data.roles)
    ) {
      return [this.data.roles];
    } else {
      const uniqueRoles = [...new Set(this.data.roles)];
      return uniqueRoles;
    }
  }

  get _emails() {
    if (
      this.data.emails &&
      !Array.isArray(this.data.emails)
    ) {
      this.emails = [this.data.emails];
    } else {
      const uniqueEmails = [...new Set(this.data.emails)];
      this.emails = uniqueEmails;
    }

    return this.emails.map((email) => email.trim());
  }

  /**
   * Creates or updates many users at once.
   */
  async _addOrUpdateAll() {
    return Promise.all(
      this.emails.map((email) => this._addOrUpdate(email)),
    );
  }

  /**
   * Creates or updates the user passed.
   * If the user already exists, it only adds the role to the user.
   */
  async _addOrUpdate(email) {
    let user = await UserRepository.findByEmailWithoutAvatar(
      email,
      {
        ...this.options,
        transaction: this.transaction,
      },
    );

    if (!user) {
      const hashedPassword = await bcrypt.hash(
       this.data.fullName,
       BCRYPT_SALT_ROUNDS,
      );
      user = await UserRepository.create(
        { 
          ...this.data,
          password:hashedPassword,
          email 
        },
        {
          ...this.options,
          transaction: this.transaction,
        },
      );
    }

  }

  /**
   * Verify if there are emails to invite.
   */
  get _hasEmailsToInvite() {
    return (
      this.emailsToInvite && this.emailsToInvite.length
    );
  }

  /**
   * Sends all invitation emails.
   */
  async _sendAllInvitationEmails() {
    if (!this.sendInvitationEmails) {
      return;
    }

    return Promise.all(
      this.emailsToInvite.map((emailToInvite) => {
        const link = `${tenantSubdomain.frontendUrl(
          this.options.currentTenant,
        )}/auth/invitation?token=${emailToInvite.token}`;

        return new EmailSender(
          EmailSender.TEMPLATES.INVITATION,
          {
            tenant: this.options.currentTenant,
            link,
          },
        ).sendTo(emailToInvite.email);
      }),
    );
  }

  /**
   * Validates the user(s) data.
   */
  async _validate() {
    assert(
      this.options.currentUser,
      'currentUser is required',
    );

    assert(
      this.options.currentUser.id,
      'currentUser.id is required',
    );

    assert(
      this.options.currentUser.email,
      'currentUser.email is required',
    );

    assert(
      this._emails && this._emails.length,
      'emails is required',
    );

  }
}
