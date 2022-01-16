import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { globalContext } from '../../App.js';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(globalContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/account",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;