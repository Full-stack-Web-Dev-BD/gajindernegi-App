import jwtDecode from 'jwt-decode';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  roles :roles,
  ...rest
}) => {
  const setComponent = (props) => {
    if (true) {
      const currentUser ={
        role:'Admin',
      }
      if (true) {        
        // const token=jwtDecode(true)
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


export { ProtectedRoute };
