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
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <DashboardStats stats={stats} />
      <div className="mt-8">
        <WorkoutChart workouts={workouts} />
      </div>
    </div>
  );
};

export default Dashboard; 