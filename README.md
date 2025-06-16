# Fitness Tracker Dashboard

A modern, responsive fitness tracking application built with React, TypeScript, and Tailwind CSS. This application helps users track their workouts, monitor calories burned, and visualize their fitness progress.

## Features

- 📊 Real-time dashboard with daily statistics
- 💪 Track multiple types of workouts
- 📈 Visual representation of calories burned over time
- 🎯 Daily workout goals and progress tracking
- 📱 Responsive design for all devices

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Chart.js
- Heroicons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   └── DashboardStats.tsx
│   ├── layout/
│   │   └── Navbar.tsx
│   ├── stats/
│   │   └── WorkoutChart.tsx
│   └── workouts/
│       ├── WorkoutForm.tsx
│       └── WorkoutList.tsx
├── types/
│   └── index.ts
└── App.tsx
```

## Component Overview

- `DashboardStats`: Displays daily workout statistics
- `Navbar`: Main navigation component
- `WorkoutChart`: Visualizes workout data using Chart.js
- `WorkoutForm`: Form for adding new workouts
- `WorkoutList`: Displays list of recorded workouts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
