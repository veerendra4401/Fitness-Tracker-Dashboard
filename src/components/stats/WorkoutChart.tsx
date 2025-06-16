import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Workout } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  workouts: Workout[];
}

const WorkoutChart: React.FC<Props> = ({ workouts }) => {
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  const caloriesByDay = last7Days.map(date => {
    return workouts
      .filter(w => w.date.startsWith(date))
      .reduce((sum, w) => sum + w.caloriesBurned, 0);
  });

  const data = {
    labels: last7Days.map(date => new Date(date).toLocaleDateString()),
    datasets: [
      {
        label: 'Calories Burned',
        data: caloriesByDay,
        backgroundColor: '#4F46E5',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Calories Burned Last 7 Days',
      },
    },
  };

  return (
    <div className="card">
      <Bar options={options} data={data} />
    </div>
  );
};

export default WorkoutChart; 