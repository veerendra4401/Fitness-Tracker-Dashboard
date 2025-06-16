import React from 'react';
import ProfileSettings from '../components/profile/ProfileSettings';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Profile: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center mb-12">
        <div className="inline-block p-2 rounded-full bg-primary/10 mb-4">
          <UserCircleIcon className="h-24 w-24 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Profile Settings</h1>
        <p className="text-gray-600 mt-2">Customize your fitness tracking experience</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ProfileSettings />
      </div>
    </div>
  );
};

export default Profile; 