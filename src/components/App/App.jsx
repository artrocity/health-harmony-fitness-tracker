// Import Modules/Libraries
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// Import Components
import LandingPage from '../LandingPage/LandingPage';
import FeaturesView from '../FeaturesView/FeaturesView';
import AboutView from '../AboutView/AboutView';
import ContactView from '../ContactView/ContactView';
import LoginView from '../LoginView/LoginView';
import View404 from '../404/404';

// Import Custom CSS
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Unprotected Routes */}
          <Redirect exact from="/" to="/home" />

          <Route exact path="/home">
            <LandingPage />
          </Route>

          <Route exact path="/features">
            <FeaturesView />
          </Route>

          <Route exact path="/about">
            <AboutView />
          </Route>

          <Route exact path="/contact">
            <ContactView />
          </Route>

          <Route>
            <View404 />
          </Route>

          {/* Protected Routes */}
          {/* <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute> */}

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginView />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
