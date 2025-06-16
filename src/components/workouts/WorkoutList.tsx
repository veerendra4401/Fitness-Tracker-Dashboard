import React from 'react';
import { Workout } from '../../types';

interface Props {
  workouts: Workout[];
  onDelete: (id: string) => void;
}

const WorkoutList: React.FC<Props> = ({ workouts, onDelete }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Recent Workouts</h2>
      <div className="grid gap-4">
        {workouts.map((workout) => (
          <div 
            key={workout.id} 
            className="
              card flex justify-between items-center
              transform transition-all duration-300 ease-in-out
              hover:shadow-lg hover:scale-102 hover:-translate-y-1
            "
          >
            <div>
              <h3 className="text-lg font-semibold capitalize">{workout.type}</h3>
              <div className="text-sm text-gray-600">
                <span>{workout.duration} minutes</span>
                <span className="mx-2">•</span>
                <span>{workout.caloriesBurned} calories</span>
                <span className="mx-2">•</span>
                <span>{new Date(workout.date).toLocaleDateString()}</span>
              </div>
            </div>
            <button
              onClick={() => onDelete(workout.id)}
              className="
                text-red-500 px-3 py-1 rounded-lg
                transition-all duration-300 ease-in-out
                hover:bg-red-50 hover:text-red-700
                transform hover:scale-110
                active:scale-95
              "
            >
              Delete
            </button>
          </div>
        ))}
        {workouts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No workouts yet. Add your first workout!
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutList; 