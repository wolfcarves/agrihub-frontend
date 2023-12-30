import React from 'react';

const ContentFeaturedAndNews: React.FC = () => {
  return (
    <div className="flex justify-center gap-8 mt-8">
      {/* First Column */}
      <div className="flex flex-col">
        {/* First Row */}
        <div className="bg-gray-200 p-4 mb-4">
          <h1 className="text-3xl font-bold">Large Text 1</h1>
        </div>

        {/* Second Row */}
        <div className="bg-gray-200 p-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Large Text 2</h1>
          </div>
          <div className="bg-white p-4 h-96">
            {/* Card with Description */}
            <div className="bg-gray-300 p-2 h-64 mb-2">
              <h2 className="text-xl font-bold mb-2">Card Title</h2>
              <p>Description goes here...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col">
        {/* First Card */}
        <div className="bg-white p-4 mb-4 h-96">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p>Description for Card 1 goes here...</p>
        </div>

        {/* Second Card */}
        <div className="bg-white p-4 mb-4 h-96">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p>Description for Card 2 goes here...</p>
        </div>

        {/* Third Card */}
        <div className="bg-white p-4 h-96">
          <h2 className="text-xl font-bold mb-2">Card 3</h2>
          <p>Description for Card 3 goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default ContentFeaturedAndNews;
