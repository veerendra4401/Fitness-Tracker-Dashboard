import React from 'react';
import WorkoutForm from '../components/workouts/WorkoutForm';
import WorkoutList from '../components/workouts/WorkoutList';
import { Workout, WorkoutFormData } from '../types';

interface Props {
  workouts: Workout[];
  onAddWorkout: (workout: WorkoutFormData) => void;
  onDeleteWorkout: (id: string) => void;
}

const Workouts: React.FC<Props> = ({ workouts, onAddWorkout, onDeleteWorkout }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Workouts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:sticky lg:top-4">
          <WorkoutForm onSubmit={onAddWorkout} />
        </div>
        <div>
          <WorkoutList workouts={workouts} onDelete={onDeleteWorkout} />
        </div>
      </div>
    </div>
  );
};

export default Workouts; 