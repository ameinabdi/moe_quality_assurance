import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import { Navigate } from 'react-router-dom';

function EmptyTenantRoute({
  component: Component,
  currentUser,
  currentTenant,
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

    if (!permissionChecker.isEmptyTenant) {
      return <Navigate to="/" />;
    }

    return <Component {...rest} />;
}

export default EmptyTenantRoute;
