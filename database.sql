-- Create Users Table
CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create Weight Table
CREATE TABLE Weight (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "users"(id),
    current_weight DECIMAL NOT NULL,
    goal_weight DECIMAL NOT NULL
);

-- Create Food Table
CREATE TABLE Food (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "users"(id),
    food VARCHAR(255) NOT NULL,
    calories INTEGER NOT NULL
);

-- Create Exercise Table
CREATE TABLE Exercise (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "users"(id),
    exercise VARCHAR(255) NOT NULL,
    calories_burned INTEGER NOT NULL
);

-- Create Symptoms Table
CREATE TABLE Symptoms (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "users"(id),
    symptom VARCHAR(255) NOT NULL,
    severity INTEGER NOT NULL,
    overall_feeling INTEGER NOT NULL
);