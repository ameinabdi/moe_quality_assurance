import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import {
  Navigate,
} from 'react-router-dom';
import Layout from 'src/view/layout/Layout';

function PrivateRoute({
  component: Component,
  currentTenant,
  currentUser,
  permissionRequired,
  ...props
}) {
    const permissionChecker = new PermissionChecker(
      currentTenant,
      currentUser,
    );

    if (!permissionChecker.isAuthenticated) {
      return (
        <Navigate
          to={'/auth/signin'}
        />
      );
    }
    
    if (!permissionChecker.isAnabled2FA) {
      return <Navigate to="/auth/two-factor-authentication" />;
    }

    if (!permissionChecker.match(permissionRequired)) {
      if(currentUser?.groupid === "districtRCF"){
        return <Navigate to="/school-supervision" />;
      }
      if(currentUser?.type === "schoolSSA"){
        return <Navigate to="/s-s-a-survey" />;
      }
      return <Navigate to="/school-supervision-g-p-e" />;
    }
     

    return (
      <Layout {...props}>
           <Component {...props} />
     </Layout>
    );
  
}

export default PrivateRoute;
