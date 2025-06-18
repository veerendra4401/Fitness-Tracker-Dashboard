import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import WorkoutChart from '../components/stats/WorkoutChart';
import { DailyStats, Workout } from '../types';

interface Props {
  workouts: Workout[];
  stats: DailyStats;
}

const Dashboard: React.FC<Props> = ({ workouts, stats }) => {
  return (
    <div className="space-y-6 p-4 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="hidden md:inline">Today's Progress</span>
          <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">
            {stats.workoutCount} Workouts
          </span>
        </div>
      </div>

      <div className="grid gap-6">
        <DashboardStats stats={stats} />
        
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
          <div className="h-[300px] md:h-[400px]">
            <WorkoutChart workouts={workouts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 