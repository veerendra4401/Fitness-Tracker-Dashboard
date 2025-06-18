import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Stats from './pages/Stats';
import Profile from './pages/Profile';
import { ThemeProvider } from './context/ThemeContext';
import { Workout, WorkoutFormData, DailyStats } from './types';

const App: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = (formData: WorkoutFormData) => {
    const newWorkout: Workout = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString(),
    };
    setWorkouts([newWorkout, ...workouts]);
  };

  const deleteWorkout = (id: string) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const calculateDailyStats = (): DailyStats => {
    const today = new Date().toISOString().split('T')[0];
    const todayWorkouts = workouts.filter(w => w.date.startsWith(today));

    return {
      totalCalories: todayWorkouts.reduce((sum, w) => sum + w.caloriesBurned, 0),
      totalDuration: todayWorkouts.reduce((sum, w) => sum + w.duration, 0),
      workoutCount: todayWorkouts.length,
      date: today,
    };
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
          <Navbar />
          <main className="container mx-auto px-4 py-8 animate-fadeIn">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Dashboard 
                    workouts={workouts} 
                    stats={calculateDailyStats()} 
                  />
                } 
              />
              <Route 
                path="/workouts" 
                element={
                  <Workouts 
                    workouts={workouts}
                    onAddWorkout={addWorkout}
                    onDeleteWorkout={deleteWorkout}
                  />
                } 
              />
              <Route 
                path="/stats" 
                element={
                  <Stats workouts={workouts} />
                } 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
            </Routes>
          </main>
    </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
