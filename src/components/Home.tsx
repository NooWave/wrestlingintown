import React from 'react';
import { MapPin, Search, ChevronRight } from 'lucide-react';

interface EventCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, title, subtitle }) => (
  <div className="flex-shrink-0 w-36 mr-4">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg mb-2" />
    <h3 className="text-sm font-semibold text-white">{title}</h3>
    <p className="text-xs text-gray-400">{subtitle}</p>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="p-4 bg-black min-h-screen text-white">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MapPin size={16} className="mr-2 text-gray-400" />
          <span className="text-sm text-gray-400">Quiet Valley Trailer Park, NY</span>
        </div>
        <button className="text-gray-400">
          <Search size={20} />
        </button>
      </header>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recommended for you</h2>
          <button className="text-sm text-gray-400 flex items-center">
            View all <ChevronRight size={16} />
          </button>
        </div>
        <div className="flex overflow-x-auto pb-4">
          <EventCard
            imageUrl="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            title="The Fall of Troy"
            subtitle="Hardcore Wrestling"
          />
          <EventCard
            imageUrl="https://images.unsplash.com/photo-1559135197-8a45ea74d367?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            title="Usher"
            subtitle="R&B Concert"
          />
          {/* Add more EventCard components as needed */}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Popular in Quiet Valley Trailer Park</h2>
          <button className="text-sm text-gray-400 flex items-center">
            View all <ChevronRight size={16} />
          </button>
        </div>
        <div className="flex overflow-x-auto pb-4">
          <EventCard
            imageUrl="https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            title="Ringside Rumble"
            subtitle="Pro Wrestling"
          />
          <EventCard
            imageUrl="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            title="Slam Jam"
            subtitle="Indie Wrestling"
          />
          {/* Add more EventCard components as needed */}
        </div>
      </section>
    </div>
  );
};