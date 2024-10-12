import React from 'react';
import { Edit } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="p-4">
      <header className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Username</h1>
          <p className="text-gray-400">Fan Account</p>
        </div>
        <button className="bg-gray-700 p-2 rounded-full">
          <Edit size={20} />
        </button>
      </header>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Stats</h2>
        {/* Add user stats here */}
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Menu Options</h2>
        {/* Add menu options here */}
      </section>
    </div>
  );
};