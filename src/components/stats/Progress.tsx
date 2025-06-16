import React from 'react';
import { Workout } from '../../types';

interface Props {
  workouts: Workout[];
}

const Progress: React.FC<Props> = ({ workouts }) => {
  const calculateAchievements = () => {
    const totalWorkouts = workouts.length;
    const totalCalories = workouts.reduce((sum, w) => sum + w.caloriesBurned, 0);
    const totalMinutes = workouts.reduce((sum, w) => sum + w.duration, 0);
    
    return {
      workoutMilestones: [
        { name: 'Beginner', target: 5, achieved: totalWorkouts >= 5 },
        { name: 'Intermediate', target: 10, achieved: totalWorkouts >= 10 },
        { name: 'Advanced', target: 20, achieved: totalWorkouts >= 20 },
        { name: 'Expert', target: 50, achieved: totalWorkouts >= 50 }
      ],
      calorieMilestones: [
        { name: 'First Burn', target: 1000, achieved: totalCalories >= 1000 },
        { name: 'Calorie Crusher', target: 5000, achieved: totalCalories >= 5000 },
        { name: 'Fat Burner', target: 10000, achieved: totalCalories >= 10000 },
        { name: 'Fitness Master', target: 20000, achieved: totalCalories >= 20000 }
      ],
      timeMilestones: [
        { name: 'Quick Start', target: 60, achieved: totalMinutes >= 60 },
        { name: 'Dedicated', target: 300, achieved: totalMinutes >= 300 },
        { name: 'Committed', target: 600, achieved: totalMinutes >= 600 },
        { name: 'Elite', target: 1200, achieved: totalMinutes >= 1200 }
      ]
    };
  };

  const achievements = calculateAchievements();

  const renderMilestones = (milestones: any[], title: string, unit: string) => (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`
              p-3 rounded-lg border transition-all duration-300 transform
              ${milestone.achieved 
                ? 'border-primary bg-primary/10 hover:scale-105' 
                : 'border-gray-200 opacity-50'}
            `}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{milestone.name}</span>
              <span className="text-sm">
                {milestone.target} {unit}
              </span>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  milestone.achieved ? 'bg-primary' : 'bg-gray-300'
                }`}
                style={{
                  width: milestone.achieved ? '100%' : '0%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="card space-y-6">
      <h2 className="text-xl font-bold">Your Achievements</h2>
      <div className="space-y-6">
        {renderMilestones(achievements.workoutMilestones, 'Workout Milestones', 'workouts')}
        {renderMilestones(achievements.calorieMilestones, 'Calorie Milestones', 'calories')}
        {renderMilestones(achievements.timeMilestones, 'Time Milestones', 'minutes')}
      </div>
    </div>
  );
};

export default Progress; 