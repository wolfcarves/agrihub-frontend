import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface ImageData {
  id: number;
  imageUrl: string;
  altText: string;
  description: string;
}

interface FeaturedInitiatives {
    id: number;
    title: string;
    description: string;
  }

  interface AboutData {
    id: number;
    imageUrl: string;
    altText: string;
    description: string;
  }

  interface LearningHubData {
    id: number;
    imageUrl: string;
    altText: string;
    description: string;
  }
  
const ContentWhatWeDo: React.FC = () => {

    const AboutData: AboutData = {
        id: 1,
        imageUrl: 'https://via.placeholder.com/900x300',
        altText: 'Placeholder Image',
        description: 'Description for your image. asdasdsadsadsadsasadsadsadsadsaddasd sadsadsadsadsadsadsad asdasda dasdsadasd sadasdasdsa asasdasasas sadsadasd asdasdasdasdasd f asasd asd asdadadasdasda asdasas asdd ',
      };

  const mockImageData: ImageData[] = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      altText: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      altText: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      altText: 'Image 3',
      description: 'Description for Image 3',
    },
  ];

  const FeaturedInitiatives: FeaturedInitiatives[] = [
    {
      id: 1,
      title: 'initiative',
      description: 'The QC urban farmers successfully learned Permaculture in a workshop.',
    },
    {
      id: 2,
      title: 'initiative',
      description: 'The QC urban farmers successfully learned Permaculture in a workshop.',
    },
    {
      id: 3,
      title: 'initiative',
      description: 'The QC urban farmers successfully learned Permaculture in a workshop.',
    },
  ];

  const mockLearningHubData: LearningHubData[] = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/900x300',
      altText: 'Placeholder Image 1',
      description: 'wan',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/900x300',
      altText: 'Placeholder Image 2',
      description: 'tu',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/900x300',
      altText: 'Placeholder Image 3',
      description: 'tri',
    },
  ];

  return (
    //WHAT WE DO
    <div className="w-90 mx-auto my-0 md:my-15">
    <div className="flex flex-col h-screen">
      <header className="text-4xl md:text-7xl font-bold pt-8 mx-auto m-12 text-center">Header Title</header>
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4 md:mt-8">
        {mockImageData.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <img
              src={image.imageUrl}
              alt={image.altText}
              className="w-full md:w-[calc(85vw/3)] h-auto md:h-[calc(60vw/3)] object-cover"
            />
            <p className="mt-4 text-center">{image.description}</p>
            <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:bg-white hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
          </div>
        ))}
      </div>


      <div className="flex flex-col h-screen mt-10">
      <div className="flex justify-center p-4">
        <div className="w-5/6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-1/2 flex justify-center items-center">
              <h2 className="text-4xl md:text-7xl font-bold mb-4">Featured Initiatives</h2>
            </div>

            <div className="md:w-1/2 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <div className="w-5/6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/3 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>

            <div className="md:w-1/3 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>

            <div className="md:w-1/3 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center p-4">
        <div className="w-5/6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-1/2 flex justify-center items-center">
              <h2 className="text-4xl md:text-7xl font-bold mb-4">Latest News</h2>
            </div>

            <div className="md:w-1/2 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <div className="w-5/6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-1/3 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>

            <div className="md:w-1/3 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>

            <div className="md:w-1/3 bg-gray-100 p-6">
              <h2 className="text-2xl font-bold mb-4">Column 2</h2>
              <p>Vivamus volutpat, libero sed sollicitudin interdum, libero odio tincidunt nisi.</p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
            </div>
          </div>
        </div>
      </div>

  
      <header className="text-4xl md:text-7xl font-bold pt-8 mx-auto m-12 text-center">About Us</header>
      <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
        <img
          src={AboutData.imageUrl}
          alt={AboutData.altText}
          className="w-full"
          style={{ maxWidth: '100%' }}
        />
        <div className=' text-black w-full mt-4'>
          <p className="text-xl">{AboutData.description}</p>
          <div className="flex items-center mt-8 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 rounded transition duration-300">
                Learn More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
        </div>
      </div> 



      <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
      <header className="text-4xl md:text-7xl font-bold pt-8 mx-auto m-12 text-center">
        Learning Hub
      </header>
      {mockLearningHubData.map((data) => (
        <div key={data.id} className="w-full">
          <img
            src={data.imageUrl}
            alt={data.altText}
            className="w-full"
            style={{ maxWidth: '100%' }}
          />
          <div className=' text-black w-full mt-4'>
            <p className="text-xl">{data.description}</p>
            <div className="flex items-center mt-8 cursor-pointer mb-8">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 rounded transition duration-300">
                Learn More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
          </div>
        </div>
      ))}
    </div>

      
    </div>
    </div>


</div>

  );
};

export default ContentWhatWeDo;
