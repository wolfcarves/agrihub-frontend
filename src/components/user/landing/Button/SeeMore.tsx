import React from 'react';

interface SeeMoreProps {
  onClick: () => void;
  text: string;
}

const SeeMore: React.FC<SeeMoreProps> = ({ onClick, text }) => {
  return (
    <div className="col-span-2 flex justify-center items-center mt-5 mb-10">
      <button
        className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold py-2 uppercase text-md w-full"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default SeeMore;
