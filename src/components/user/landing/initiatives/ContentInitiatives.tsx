import React from 'react';
import ReadMoreButton from '../Button/ReadMore';

// Import your images
import image1 from '@assets/images/Initiatives1.svg';
import image2 from '@assets/images/Initiatives2.svg';
import image3 from '@assets/images/Initiatives3.svg';
import image4 from '@assets/images/Initiatives4.svg';

interface ImageData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const imageData: ImageData[] = [
  { id: 1, image: image1, title: 'Initiatives', description: 'Lorem ipsum dolor sit amet...' },
  { id: 2, image: image2, title: 'Initiatives', description: 'Sa pangalawang araw ng workshop...' },
  { id: 3, image: image3, title: 'Initiatives', description: 'Nagsama-sama ang mga lider ng mga Urban Farms...' },
  { id: 4, image: image4, title: 'Initiatives', description: 'Bumaba sa Barangay Gulod ang Center for Urban Agriculture and Innovation (CUAI) upang...' },
];

const ContentInitiatives: React.FC = () => {
  const handleCardClick = (id: number) => {
    console.log(`Card clicked with id: ${id}`);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-10">
      {imageData.reduce((rows: ImageData[][], item: ImageData, index: number) => {
        if (index % 2 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(item);
        return rows;
      }, []).map((row: ImageData[], rowIndex: number) => (
        <div key={rowIndex} className="flex flex-row justify-center w-full">
          {row.map((item: ImageData) => (
            <div
              key={item.id}
              className="flex flex-col items-start m-4 bg-gray-100 rounded-lg shadow-lg w-2/5 h-1/4"
              onClick={() => handleCardClick(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={item.image}
                alt={`Image ${item.id}`}
                className="w-full h-80 rounded-t-lg object-cover"
              />
              <div className="p-4">
                <p className="text-left uppercase font-bold">
                  {item.title}
                </p>
                <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
                  {item.description}
                </p>
                <ReadMoreButton text="read more"/>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContentInitiatives;
