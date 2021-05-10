import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from './Utils';
import { isAuthGuardActive } from '../constants/defaultValues';

const ProtectedRoute = ({
  component: Component,
  roles = undefined,
  ...rest
}) => {
  const setComponent = (props) => {
    if (true) {
      const currentUser = getCurrentUser();
      if (true) {
        if (true) {
          if (true) {
            return <Component {...props} />;
          }
          return (
            <Redirect
              to={{
                pathname: '/unauthorized',
                state: { from: props.location },
              }}
            />
          );
        }
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: '/user/login',
            state: { from: props.location },
          }}
        />
      );
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={setComponent} />;
};

// -next-line import/prefer-default-export
export { ProtectedRoute };
