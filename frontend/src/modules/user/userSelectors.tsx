import { createSelector } from 'reselect';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import Permissions from 'src/security/permissions';

const selectUserToRead = createSelector(
  
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
       
      Permissions.values.userRead,
    ),
);

const selectUserToEdit = createSelector(
  
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
       
      Permissions.values.userEdit,
    ),
);

const selectUserToDestroy = createSelector(
  
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
       
      Permissions.values.userDestroy,
    ),
);

const selectUserToCreate = createSelector(
  
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
       
      Permissions.values.userCreate,
    ),
);

const selectUserToImport = createSelector(
  
  [
    authSelectors.selectCurrentTenant,
    authSelectors.selectCurrentUser,
  ],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
       
      Permissions.values.userImport,
    ),
);

const userSelectors = {
  selectUserToRead,
  selectUserToEdit,
  selectUserToCreate,
  selectUserToImport,
  selectUserToDestroy,
};

export default userSelectors;
