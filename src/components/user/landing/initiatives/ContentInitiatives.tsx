import React from 'react';
import ReadMoreButton from '../Button/ReadMore';

const ContentInitiatives: React.FC = () => {
  const imageUrl1 = 'https://via.placeholder.com/300';
  const imageUrl2 = 'https://via.placeholder.com/300';

  return (
    <div className="flex flex-col justify-center items-center w-full p-8">
      <div className="flex flex-row justify-center w-5/6 h-2/5">
        <div className="flex flex-col items-start m-4 bg-gray-100 rounded-lg shadow-lg w-1/2 h-1/4">
          <img
            src={imageUrl1}
            alt="Image 1"
            className="w-full h-80 rounded-t-lg object-cover"
          />
          <div className="p-4">
            <p className="text-left uppercase font-bold">
              initiatives
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
              Bumisita sa Quezon City University - Center for Urban Agriculture and Innovation (QCU-CUAI)...
            </p>
            <ReadMoreButton text="read more"/>
          </div>
        </div>

  
        <div className="flex flex-col items-start m-4 bg-gray-100 rounded-lg shadow-lg w-1/2 h-1/4">
          <img
            src={imageUrl2}
            alt="Image 2"
            className="w-full h-80 rounded-t-lg object-cover"
          />
          <div className="p-4">
            <p className="text-left uppercase font-bold">
            initiatives
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
              Sa pangalawang araw ng workshop, itinalakay at pinag-usapan ang mas malalim na kahulugan...
            </p>
            <ReadMoreButton text="read more"/>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center w-5/6 h-2/5">
        <div className="flex flex-col items-start m-4 bg-gray-100 rounded-lg shadow-lg w-1/2 h-1/4">
          <img
            src={imageUrl1}
            alt="Image 1"
            className="w-full h-80 rounded-t-lg object-cover"
          />
          <div className="p-4">
            <p className="text-left uppercase font-bold">
            initiatives
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
            Nagsama-sama ang mga lider ng mga Urban Farms mula sa iba't ibang distrito ng Quezon City...
            </p>
            <ReadMoreButton text="read more"/>
          </div>
        </div>


        <div className="flex flex-col items-start m-4 bg-gray-100 rounded-lg shadow-lg w-1/2 h-1/4">
          <img
            src={imageUrl2}
            alt="Image 2"
            className="w-full h-80 rounded-t-lg object-cover"
          />
          <div className="p-4">
            <p className="text-left uppercase font-bold">
            initiatives
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
            Bumaba sa Barangay Gulod ang Center for Urban Agriculture and Innovation (CUAI) upang...
            </p>
            <ReadMoreButton text="read more"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInitiatives;
