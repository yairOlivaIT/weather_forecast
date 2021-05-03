import React from 'react';
import TodayHighlights from './TodayHighlights';
import Weekly from './Weekly';

const MainContent = ({ weather }) => {
  const { consolidated_weather } = weather;

  return (
    <main className="md:w-3/5  xl:w-4/5 px-6 py-8 bg-gray-900 main">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 justify-center justify-items-center">
        {consolidated_weather.slice(1, 6).map((element) => (
          <Weekly key={element.id} element={element} />
        ))}
      </div>

      <h2 className="text-left text-white text-3xl mt-4 p-2">
        Today's Highlights
      </h2>
      <TodayHighlights weather={weather} />
    </main>
  );
};

export default MainContent;
