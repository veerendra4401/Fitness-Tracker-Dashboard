import React from 'react';
import { DailyStats } from '../../types';

interface Props {
  stats: DailyStats;
}

const DashboardStats: React.FC<Props> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-700">Total Calories</h3>
        <p className="text-3xl font-bold text-primary">{stats.totalCalories}</p>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-700">Workout Duration</h3>
        <p className="text-3xl font-bold text-secondary">{stats.totalDuration} min</p>
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-700">Workouts Today</h3>
        <p className="text-3xl font-bold text-accent">{stats.workoutCount}</p>
      </div>
    </div>
  );
};

export default DashboardStats; 