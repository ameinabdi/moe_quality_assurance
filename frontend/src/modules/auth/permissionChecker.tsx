import Plans from 'src/security/plans';

const plans = Plans.values;

export default class PermissionChecker {
  currentTenant;
  currentUser;

  constructor(currentTenant, currentUser) {
    this.currentTenant = currentTenant;
    this.currentUser = currentUser;
  }


  match(permission) {
    if (!permission) {
      return true;
    }

    return this.rolesMatchOneOf(permission.allowedRoles);
  }

  lockedForCurrentPlan(permission) {
    if (!permission) {
      return false;
    }

    if (!this.rolesMatchOneOf(permission.allowedRoles)) {
      return false;
    }

    return !this.planMatchOneOf(permission.allowedPlans);
  }

  rolesMatchOneOf(arg) {
    if (!this.currentUser?.groupid) {
      return false;
    }
    if (!arg) {
      return false;
    }
    console.log('111', this.currentUser?.email,arg, this.currentUser?.groupid )
    return arg.includes(this.currentUser?.groupid);
  }

  planMatchOneOf(arg) {
    if (!this.currentTenantPlan) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some(
        (plan) => plan === this.currentTenantPlan,
      );
    }

    return arg === this.currentTenantPlan;
  }

  get currentTenantPlan() {
    if (!this.currentTenant) {
      return plans.free;
    }

    if (!this.currentTenant.plan) {
      return plans.free;
    }

    return this.currentTenant.plan;
  }

  get isEmptyTenant() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.tenants) {
      return true;
    }

    return !this.currentUser.tenants.some(
      (tenant) => tenant.status === 'active',
    );
  }


  get isActiveTenant() {
    return false
  }

  get isEmptyPermissions() {
    return false;
  }

  get isAuthenticated() {
    return (
      Boolean(this.currentUser) &&
      Boolean(this.currentUser.id)
    );
  }

  get isEmailVerified() {
    if (!this.isAuthenticated) {
      return false;
    }

    return this.currentUser;
  }

  get isAnabled2FA() {
    if (!this.isAuthenticated) {
      return false;
    }

    return (this.currentUser.twoFA && this.currentUser.twoFAVerified) || (!this.currentUser.twoFAVerificationToken && !this.currentUser.twoFA)  ;
  }

  get isState() {
    if (!this.isAuthenticated) {
      return false;
    }

    return (this.currentUser.type	=== "District" || this.currentUser.type === "State")  ;
  }
  
}
