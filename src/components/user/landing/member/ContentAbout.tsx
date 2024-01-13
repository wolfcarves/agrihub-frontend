import React from 'react';

interface ImageData {
  id: number;
  imageUrl: string;
  altText: string;
  description: string;
}

const ContentAbout: React.FC = () => {
  const mockImageData: ImageData = {
    id: 1,
    imageUrl: 'https://via.placeholder.com/900x300',
    altText: 'Placeholder Image',
    description: 'Description for your image.',
  };

  return (
    <div>
        <header className="text-4xl font-bold pt-8 mb-8">About Us</header>
      <div className="w-90 mx-auto">
        <img
          src={mockImageData.imageUrl}
          alt={mockImageData.altText}
          className="w-full"
          style={{ maxWidth: '90%' }}
        />
        <p className="mt-4 text-center">{mockImageData.description}</p>
      </div>
    </div>
      
  );
};

export default ContentAbout;
