import React, { useState } from 'react';
import { WorkoutFormData } from '../../types';

interface Props {
  onSubmit: (data: WorkoutFormData) => void;
}

const WorkoutForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<WorkoutFormData>({
    type: '',
    duration: 0,
    caloriesBurned: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ type: '', duration: 0, caloriesBurned: 0 });
  };

  const inputClass = `
    w-full px-4 py-2 rounded-lg border border-gray-300
    focus:ring-2 focus:ring-primary focus:border-transparent
    transition-all duration-300 ease-in-out
    dark:bg-gray-800 dark:border-gray-700 dark:text-white
  `;

  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 md:p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Add New Workout</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Track your fitness progress</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className={labelClass}>
              Workout Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className={inputClass}
              required
            >
              <option value="">Select type</option>
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
              <option value="swimming">Swimming</option>
              <option value="weightlifting">Weightlifting</option>
              <option value="yoga">Yoga</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>
                Duration (minutes)
              </label>
              <input
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
                className={inputClass}
                required
                min="0"
              />
            </div>

            <div>
              <label className={labelClass}>
                Calories Burned
              </label>
              <input
                type="number"
                value={formData.caloriesBurned}
                onChange={(e) => setFormData({ ...formData, caloriesBurned: Number(e.target.value) })}
                className={inputClass}
                required
                min="0"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="
            w-full px-6 py-3 bg-primary text-white rounded-lg font-medium
            transform transition-all duration-300 ease-in-out
            hover:bg-primary/90 hover:scale-105 hover:shadow-lg
            active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          disabled={!formData.type || formData.duration <= 0 || formData.caloriesBurned <= 0}
        >
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm; 