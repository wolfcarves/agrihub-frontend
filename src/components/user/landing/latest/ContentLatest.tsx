import React from 'react';
import ReadMoreButton from '../Button/ReadMore';

const ContentLatest: React.FC = () => {
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
              articles
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
            122 devil rays joined in a wild mating ritual that lasted for hours.
            </p>
            <ReadMoreButton text="data analytics"/>
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
            articles
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
            The world’s largest flattop mountain is an adventurer’s paradise.   
            </p>
            <ReadMoreButton text="blog"/>
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
              articles
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
            Roach, Worms, and Hippo: How these 8 towns got their unusual names
            </p>
            <ReadMoreButton text="articles"/>
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
             blog
            </p>
            <p className="text-left mt-5 mb-5 overflow-hidden text-ellipsis two-line-clamp">
            Wonder Women of Agriculture
            </p>
            <ReadMoreButton text="farms"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLatest;
