import React from 'react';
import { Settings } from 'lucide-react';

export const Feed: React.FC = () => {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Feed</h1>
        <button className="bg-gray-700 p-2 rounded-full">
          <Settings size={20} />
        </button>
      </header>
      {/* Add feed content here */}
    </div>
  );
};