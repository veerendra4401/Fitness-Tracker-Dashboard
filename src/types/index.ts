export interface Workout {
  id: string;
  type: string;
  duration: number;
  caloriesBurned: number;
  date: string;
}

export interface DailyStats {
  totalCalories: number;
  totalDuration: number;
  workoutCount: number;
  date: string;
}

export interface WorkoutFormData {
  type: string;
  duration: number;
  caloriesBurned: number;
} 