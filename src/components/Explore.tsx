import React from 'react';
import { Search } from 'lucide-react';

export const Explore: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Wrestlers, Promotions, Events..."
            className="w-full bg-gray-800 text-white p-2 pl-10 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Browse by Wrestler/Promotion</h2>
        {/* Add list of wrestlers/promotions here */}
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Event Categories</h2>
        {/* Add event category icons here */}
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">All Shows in Your Area</h2>
        {/* Add list of upcoming events here */}
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Streaming Live This Weekend</h2>
        {/* Add list of live streams here */}
      </section>
    </div>
  );
};