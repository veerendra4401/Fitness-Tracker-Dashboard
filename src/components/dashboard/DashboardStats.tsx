import React from 'react';
import { DailyStats } from '../../types';
import { FireIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface Props {
  stats: DailyStats;
}

const DashboardStats: React.FC<Props> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <FireIcon className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Total Calories</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.totalCalories}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <ClockIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Workout Duration</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.totalDuration} min</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 transform hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <ChartBarIcon className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Workouts Today</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.workoutCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats; 