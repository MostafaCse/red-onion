import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const { logIn } = useContext(userContext);
  const [log] = logIn;
  console.log(log.email);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        log.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute;