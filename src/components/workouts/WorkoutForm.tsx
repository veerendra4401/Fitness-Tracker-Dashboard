import React, { useState } from 'react';
import { WorkoutFormData } from '../../types';

interface Props {
  onSubmit: (workout: WorkoutFormData) => void;
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
    mt-1 block w-full rounded-md border-gray-300 shadow-sm
    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
    transition-all duration-300 ease-in-out
  `;

  return (
    <form onSubmit={handleSubmit} className="card transform hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-4">Add Workout</h2>
      <div className="space-y-4">
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <label className="block text-sm font-medium text-gray-700">
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
        
        <div className="transform transition-all duration-300 hover:translate-x-1">
          <label className="block text-sm font-medium text-gray-700">
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

        <div className="transform transition-all duration-300 hover:translate-x-1">
          <label className="block text-sm font-medium text-gray-700">
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

        <button
          type="submit"
          className="
            w-full px-4 py-2 bg-primary text-white rounded-lg
            transform transition-all duration-300 ease-in-out
            hover:bg-primary/90 hover:scale-105 hover:shadow-lg
            active:scale-95
          "
        >
          Add Workout
        </button>
      </div>
    </form>
  );
};

export default WorkoutForm; 