import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface UserPreferences {
  dailyCalorieGoal: number;
  weeklyWorkoutGoal: number;
  notificationsEnabled: boolean;
  name: string;
  email: string;
}

const ProfileSettings: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [preferences, setPreferences] = useState<UserPreferences>({
    dailyCalorieGoal: 500,
    weeklyWorkoutGoal: 5,
    notificationsEnabled: true,
    name: '',
    email: ''
  });

  const [showSaveMessage, setShowSaveMessage] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save preferences to local storage
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    // Show save message
    setShowSaveMessage(true);
    // Hide message after 3 seconds
    setTimeout(() => setShowSaveMessage(false), 3000);
  };

  const inputClass = `
    mt-1 block w-full rounded-md border-gray-300 shadow-sm
    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
    transition-all duration-300
    dark:bg-gray-700 dark:border-gray-600 dark:text-white
  `;

  return (
    <div className="card bg-card-bg-light dark:bg-card-bg-dark transform hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="transform transition-all duration-300 hover:translate-x-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                value={preferences.name}
                onChange={(e) => setPreferences({
                  ...preferences,
                  name: e.target.value
                })}
                className={inputClass}
                placeholder="Your name"
              />
            </div>

            <div className="transform transition-all duration-300 hover:translate-x-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                value={preferences.email}
                onChange={(e) => setPreferences({
                  ...preferences,
                  email: e.target.value
                })}
                className={inputClass}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Daily Calorie Goal
            </label>
            <input
              type="number"
              value={preferences.dailyCalorieGoal}
              onChange={(e) => setPreferences({
                ...preferences,
                dailyCalorieGoal: Number(e.target.value)
              })}
              className={inputClass}
              min="0"
            />
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Weekly Workout Goal
            </label>
            <input
              type="number"
              value={preferences.weeklyWorkoutGoal}
              onChange={(e) => setPreferences({
                ...preferences,
                weeklyWorkoutGoal: Number(e.target.value)
              })}
              className={inputClass}
              min="1"
              max="7"
            />
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.notificationsEnabled}
                onChange={(e) => setPreferences({
                  ...preferences,
                  notificationsEnabled: e.target.checked
                })}
                className="rounded border-gray-300 text-primary 
                  focus:ring-primary focus:ring-opacity-50
                  transition-all duration-300
                  dark:border-gray-600 dark:bg-gray-700"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Enable Notifications
              </span>
            </label>
          </div>

          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Theme
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
              className={inputClass}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-lg
              transform transition-all duration-300 ease-in-out
              hover:bg-primary/90 hover:scale-105 hover:shadow-lg
              active:scale-95
              dark:bg-primary/80 dark:hover:bg-primary"
          >
            Save Preferences
          </button>
        </div>

        {showSaveMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slideIn">
            Settings saved successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileSettings; 