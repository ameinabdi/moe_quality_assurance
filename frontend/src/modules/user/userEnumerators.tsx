import Roles from 'src/security/roles';

const userEnumerators = {
  status: ['active', 'invited', 'empty-permissions'],
  roles: Object.keys(Roles.values),
  notification: [
    'Email',
    'SMS',
  ],
  type: [
   'admin',
   'Federal',
   'State',
   'District',
   'School'
  ],
};

export default userEnumerators;
