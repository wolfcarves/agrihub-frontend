import { UserFooter } from '@components/ui/custom';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import image1 from "@assets/images/landing-5.png";
import image2 from "@assets/images/Initiatives-3.png";
import image3 from "@assets/images/landing-4.jpg"
import image4 from "@assets/images/Upcoming-events-permaculture.png";
import image5 from "@assets/images/learning hub.png";

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

interface UpcomingEventsData {
  id: number;
  imageUrl: string;
  altText: string;
  description: string;
}

const ContentWhatWeDoMember: React.FC = () => {

  const AboutData: AboutData = {
    id: 1,
    imageUrl: image5,
    altText: 'Placeholder Image',
    description: 'Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa.',
  };

  const mockImageData: ImageData[] = [
    {
      id: 1,
      imageUrl: image1,
      altText: 'Image 1',
      description: 'Our Focus',
    },
    {
      id: 2,
      imageUrl: image2,
      altText: 'Image 2',
      description: 'Initiatives',
    },
    {
      id: 3,
      imageUrl: image3,
      altText: 'Image 3',
      description: 'Latest News',
    },
  ];

  const mockUpcomingEventsData: UpcomingEventsData[] = [
    {
      id: 1,
      imageUrl: image4,
      altText: 'Placeholder Image 1',
      description: 'Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa.',
    },
    {
      id: 2,
      imageUrl: image4,
      altText: 'Placeholder Image 2',
      description: 'Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa.',
    },
    {
      id: 3,
      imageUrl: image4,
      altText: 'Placeholder Image 3',
      description: 'Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa.',
    },
  ];

  return (
    //     WHAT WE DO

    // <div className="md:container md:mx-auto bg-blue-500">
    //   <div className='bg-red-500 h-screen'>
    //     <div>
    //       <header className="text-center text-2xl md:text-4xl lg:text-7xl font-extrabold">
    //         What we do
    //       </header>
    //     </div>
    //     <div className='bg-orange-500 flex flex-col'>
    //       <div className="flex flex-col gap-8 items-center flex-row text-center">
    //         {mockImageData.map((image)=>(
    //           <div key={image.id} className="flex flex-col items-center">
    //             <img src={image.imageUrl} alt={image.altText} className=''/>
    //             <p className="mt-4 text-center">{image.description}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="mx-auto my-0 md:my-15 bg-blue-500">

    //   {/* HEADER */}
    //   <div className='bg-red-500'>
    //     <div>
    //       <header className="text-center text-2xl md:text-4xl lg:text-7xl font-extrabold">
    //         What we do
    //       </header>
    //     </div>
    //     <div className='bg-orange-500 mt-9'>
    //       <div className="flex flex-row gap-8 items-center justify-center">
    //         {mockImageData.map((image) => (
    //           <div key={image.id} className="">
    //             <img src={image.imageUrl} alt={image.altText} className='w-full md:w-[calc(85vw/3)] h-auto md:h-[calc(60vw/3)] object-cover mt-9' />
    //             <p className="my-10 px-3 font-medium text-sm md:text-base lg:text-lg">{image.description}</p>
    //             <div className="flex items-center mt-2 ml-2 cursor-pointer">
    //               <span className="text-black font-bold uppercase bg-transparent hover:bg-white hover:text-orange-500 px-2 py-1 rounded transition duration-300">
    //                 Read More
    //               </span>
    //               <IoIosArrowForward className="ml-1 text-orange-500" />
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full mx-auto my-0 md:my-15 mb-8">
      {/* Header */}
      <header className="text-2xl md:text-4xl lg:text-7xl font-['Arial_Black'] pb-10 mx-auto m-12 text-center">
        What we do
      </header>

      {/* Image Section */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4 md:mt-8 pt-10">
  {mockImageData.map((image) => (
    <div key={image.id} className="flex flex-col md:w-[calc(85vw/3)]">
      <div className="image-container w-full h-[200px] md:h-[250px] lg:h-[300px]">
        <img
          src={image.imageUrl}
          alt={image.altText}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-4 text-sm md:text-base lg:text-lg">{image.description}</p>
      <div className="flex items-center mt-2 cursor-pointer">
        <span className="text-black font-bold uppercase bg-transparent hover:bg-white hover:text-orange-500 px-2 py-1 rounded transition duration-300">
          Discover More
        </span>
        <IoIosArrowForward className="ml-1 text-orange-500" />
      </div>
    </div>
  ))}
</div>


          {/* FEATURED INITIATIVES */}
          <div className="flex flex-col items-center mt-10">
            <div className="w-full md:w-5/6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
              <div className='col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1'>
                <h2 className='md:text-7xl font-bold text-center'>Featured Initiatives</h2>
              </div>

              <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-2">
                <div className="bg-gray-100 p-6">
                  <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
                  <h2 className="ml-5 text-2xl mb-4">PERMACULTURE WORKSHOP DAY 3</h2>
                  <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                  <div className="flex items-center mt-2 ml-2 cursor-pointer">
                    <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                      Read More
                    </span>
                    <IoIosArrowForward className="ml-1 text-orange-500" />
                  </div>
                </div>
              </div>
              <div className='col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1'>
                <div className="bg-gray-100 p-6">
                <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
                  <h2 className="ml-5 text-2xl mb-4">PERMACULTURE WORKSHOP DAY 3</h2>
                  <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                  <div className="flex items-center mt-2 ml-2 cursor-pointer">
                    <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                      Read More
                    </span>
                    <IoIosArrowForward className="ml-1 text-orange-500" />
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6">
              <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
                  <h2 className="ml-5 text-2xl mb-4">PERMACULTURE WORKSHOP DAY 3</h2>
                  <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                <div className="flex items-center mt-2 ml-2 cursor-pointer">
                  <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                    Read More
                  </span>
                  <IoIosArrowForward className="ml-1 text-orange-500" />
                </div>
              </div>
              <div className="bg-gray-100 p-4">
              <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
                  <h2 className="ml-5 text-2xl mb-4">PERMACULTURE WORKSHOP DAY 3</h2>
                  <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                <div className="flex items-center mt-2 ml-2 cursor-pointer">
                  <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                    Read More
                  </span>
                  <IoIosArrowForward className="ml-1 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
       

        {/* LATEST NEWS */}
        <div className="flex flex-col items-center mt-16">
            <div className="w-full md:w-5/6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
              <div className='p-2 col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1'>
                <h2 className='md:text-7xl font-bold text-center'>Latest News</h2>
              </div>

              <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-2">
                <div className="bg-gray-100 p-6">
                  <h2 className="ml-5 text-2xl font-bold mb-4 ">Initiatives</h2>
                  <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                  <div className="flex items-center mt-2 ml-2 cursor-pointer">
                    <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                      Read More
                    </span>
                    <IoIosArrowForward className="ml-1 text-orange-500" />
                  </div>
                </div>
              </div>
              <div className='col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1'>
                <div className="bg-gray-100 p-6">
                  <h2 className="ml-5 text-2xl font-bold mb-4 ">Initiatives</h2>
                  <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                  <div className="flex items-center mt-2 ml-2 cursor-pointer">
                    <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                      Read More
                    </span>
                    <IoIosArrowForward className="ml-1 text-orange-500" />
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6">
                <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
                <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                <div className="flex items-center mt-2 ml-2 cursor-pointer">
                  <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                    Read More
                  </span>
                  <IoIosArrowForward className="ml-1 text-orange-500" />
                </div>
              </div>
              <div className="bg-gray-100 p-6">
                <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
                <p className='ml-4'>The QC urban farmers successfully learned Permaculture in a workshop.</p>
                <div className="flex items-center mt-2 ml-2 cursor-pointer">
                  <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                    Read More
                  </span>
                  <IoIosArrowForward className="ml-1 text-orange-500" />
                </div>
              </div>
            </div>
          </div>


          <header className="text-4xl md:text-7xl font-['Arial_Black'] pt-8 mx-auto m-12 text-center pb-8">Learning Materials</header>
          <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
            <img
              src={AboutData.imageUrl}
              alt={AboutData.altText}
              className="w-full"
              style={{ maxWidth: '100%' }}
            />
            <div className=' text-black w-full mt-4'>
              <p className="text-xl mt-12">{AboutData.description}</p>
              <div className="flex items-center mt-8 cursor-pointer">
                <span className="text-lg text-black font-bold bg-transparent hover:text-orange-500 rounded transition duration-300">
                  Learn More
                </span>
                <IoIosArrowForward className="ml-1 text-orange-500" />
              </div>
            </div>
          </div>

           {/* Learning Hub */}
           <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
            <header className="text-4xl md:text-7xl font-['Arial_Black'] pt-8 mx-auto m-12 text-center">
              Upcoming Events
            </header>
            {mockUpcomingEventsData.map((data) => (
              <div key={data.id} className="w-full">
                <img
                  src={data.imageUrl}
                  alt={data.altText}
                  className="w-full"
                  style={{ maxWidth: '100%' }}
                />
                <div className=' text-black w-full mt-4'>
                  <p className="text-xl mt-12">{data.description}</p>
                  <div className="flex items-center mt-8 cursor-pointer mb-12">
                    <span className="text-lg text-black font-bold bg-transparent hover:text-orange-500 rounded transition duration-300">
                      Learn More
                    </span>
                    <IoIosArrowForward className="ml-1 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

    </div>

  );
};

export default ContentWhatWeDoMember;