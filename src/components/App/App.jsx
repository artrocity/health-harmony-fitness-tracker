// Import Modules/Libraries
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import  Unprotected Components
import LandingPage from '../LandingPage/LandingPage';
import FeaturesView from '../FeaturesView/FeaturesView';
import AboutView from '../AboutView/AboutView';
import ContactView from '../ContactView/ContactView';
import LoginView from '../LoginView/LoginView';
import RegisterView from '../RegisterView/RegisterView';
import View404 from '../View404/View404';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// Import Protected Components
import UserDashboard from '../ProtectedComponents/UserDashboard/UserDashboard';
import FoodView from '../ProtectedComponents/FoodView/FoodView';
import ExerciseView from '../ProtectedComponents/ExerciseView/ExerciseView';
import WeightView from '../ProtectedComponents/WeightView/WeightView';
import SymptomView from '../ProtectedComponents/SymptomView/SymptomView';
import UserProfileView from '../ProtectedComponents/UserProfileView/UserProfileView';

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

          <Route exact path="/register">
            <RegisterView />
          </Route>

          {/* If user is logged in */}
          <Route exact path="/login">
            {user.id ? <Redirect to="/user/dashboard" /> : <LoginView />}
          </Route>

          <Route exact path="/dashboard">
            {user.id ? <Redirect to="/user/dashboard" /> : <LoginView />}
          </Route>

          {/* Protected Routes */}
          <ProtectedRoute exact path="/user/dashboard">
            <UserDashboard />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/food">
            <FoodView />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/exercise">
            <ExerciseView />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/weight">
            <WeightView />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/symptoms">
            <SymptomView />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/weight">
            <WeightView />
          </ProtectedRoute>

          <ProtectedRoute exact path="/user/profile">
            <UserProfileView />
          </ProtectedRoute>

          <Route>
            <View404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
