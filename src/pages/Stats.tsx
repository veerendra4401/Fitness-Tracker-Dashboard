import React from 'react';
import WorkoutChart from '../components/stats/WorkoutChart';
import Progress from '../components/stats/Progress';
import { Workout } from '../types';

interface Props {
  workouts: Workout[];
}

const Stats: React.FC<Props> = ({ workouts }) => {
  const calculateTotalStats = () => {
    return {
      totalCalories: workouts.reduce((sum, w) => sum + w.caloriesBurned, 0),
      totalDuration: workouts.reduce((sum, w) => sum + w.duration, 0),
      totalWorkouts: workouts.length,
      averageCaloriesPerWorkout: Math.round(
        workouts.reduce((sum, w) => sum + w.caloriesBurned, 0) / (workouts.length || 1)
      ),
    };
  };

  const stats = calculateTotalStats();

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Statistics</h1>
        <div className="text-sm text-gray-600">
          Total Workouts: {stats.totalWorkouts}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-700">Total Calories</h3>
          <p className="text-3xl font-bold text-primary mt-2">{stats.totalCalories}</p>
          <div className="mt-2 text-sm text-gray-600">All time</div>
        </div>
        
        <div className="card transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-700">Total Duration</h3>
          <p className="text-3xl font-bold text-secondary mt-2">{stats.totalDuration} min</p>
          <div className="mt-2 text-sm text-gray-600">All time</div>
        </div>
        
        <div className="card transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-700">Total Workouts</h3>
          <p className="text-3xl font-bold text-accent mt-2">{stats.totalWorkouts}</p>
          <div className="mt-2 text-sm text-gray-600">Completed</div>
        </div>
        
        <div className="card transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-700">Avg. Calories/Workout</h3>
          <p className="text-3xl font-bold text-primary mt-2">{stats.averageCaloriesPerWorkout}</p>
          <div className="mt-2 text-sm text-gray-600">Per session</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Weekly Progress</h2>
          <WorkoutChart workouts={workouts} />
        </div>
        
        <Progress workouts={workouts} />
      </div>
    </div>
  );
};

export default Stats; 