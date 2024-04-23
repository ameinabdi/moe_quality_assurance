import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import { Navigate } from 'react-router-dom';

function EmptyPermissionsRoute({
  component: Component,
  currentTenant,
  currentUser,
  ...rest
}) {
    const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
    );

    if (!permissionChecker.isAuthenticated) {
      return (
        <Navigate
          to={{
            pathname: '/auth/signin',
          }}
        />
      );
    }

    if (!permissionChecker.isEmptyPermissions) {
      return <Navigate to="/" />;
    }

    return <Component {...rest} />;
}

export default EmptyPermissionsRoute;
