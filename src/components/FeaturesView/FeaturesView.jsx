// Import 3rd Party Libraries
import React from 'react';

// Import Components
import HorizontalNav from '../HorizontalNav/HorizontalNav';

// Import Custom CSS
import './FeaturesView.css';

// Import Custom Images
import calorieImage from './images/calorie_tracker.avif';
import exerciseImage from './images/male-exercise.avif';
import weightImage from './images/weight_management.avif';
import symptomImage from './images/symptom log.avif';

function FeaturesView() {
  return (
    <>
      <div className="container">
        <div className="horizontal-nav-container">
          <HorizontalNav />
        </div>
        <h1 className="features-page-header">
          Unleash The Power Of Our Revolutionary <br />
          Fitness App
        </h1>
        <div className="features-page-container">
          {/* Calories */}
          <div className="feature">
            <h3 className="feature-header">Calorie Tracker</h3>
            <img src={calorieImage} alt="picture of a pizza" />
          </div>

          {/* Weight Management */}
          <div className="feature">
            <h3 className="feature-header">Weight Management</h3>
            <img src={weightImage} alt="picture of a weight scale" />
          </div>

          {/* Exercise Tracker */}
          <div className="feature">
            <h3 className="feature-header">Exercise Tracker</h3>
            <img src={exerciseImage} alt="picture of a man working out" />
          </div>

          {/* Symptoms Log */}
          <div className="feature">
            <h3 className="feature-header">Symptoms Log</h3>
            <img src={symptomImage} alt="Picture of a symptoms log" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesView;
