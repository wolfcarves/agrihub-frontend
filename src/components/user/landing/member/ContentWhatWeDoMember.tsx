import { UserFooter } from "@components/ui/custom";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import image1 from "@assets/images/landing-5.png";
import image2 from "@assets/images/Initiatives-3.png";
import image3 from "@assets/images/landing-4.jpg";
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
    altText: "Placeholder Image",
    description:
      "Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa."
  };

  const mockImageData: ImageData[] = [
    {
      id: 1,
      imageUrl: image1,
      altText: "Image 1",
      description: "Our Focus"
    },
    {
      id: 2,
      imageUrl: image2,
      altText: "Image 2",
      description: "Initiatives"
    },
    {
      id: 3,
      imageUrl: image3,
      altText: "Image 3",
      description: "Latest News"
    }
  ];

  const mockUpcomingEventsData: UpcomingEventsData[] = [
    {
      id: 1,
      imageUrl: image4,
      altText: "Placeholder Image 1",
      description:
        "Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa."
    },
    {
      id: 2,
      imageUrl: image4,
      altText: "Placeholder Image 2",
      description:
        "Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa."
    },
    {
      id: 3,
      imageUrl: image4,
      altText: "Placeholder Image 3",
      description:
        "Isang pamamaraan ng pagtanim ng mga halaman nang hindi gumagamit ng lupa."
    }
  ];

  return (
    <div className="w-full mx-auto my-0 md:my-15 mb-8">
      {/* Header */}
      <section
        className="py-28"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl space-y-3 md:mx-auto">
            <h3 className="text-indigo-600 font-semibold">
              Professional services
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Build the future with us
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="mt-4">
            <a
              href="javascript:void(0)"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
      <header className="text-2xl md:text-4xl lg:text-7xl font-['Arial_Black'] pb-10 mx-auto m-12 text-center">
        What we do
      </header>

      {/* Image Section */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4 md:mt-8 pt-10">
        {mockImageData.map(image => (
          <div key={image.id} className="flex flex-col md:w-[calc(85vw/3)]">
            <div className="image-container w-full h-[200px] md:h-[250px] lg:h-[300px]">
              <img
                src={image.imageUrl}
                alt={image.altText}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm md:text-base lg:text-lg">
              {image.description}
            </p>
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
          <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1">
            <h2 className="md:text-7xl font-bold text-center">
              Featured Initiatives
            </h2>
          </div>

          <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-2">
            <div className="bg-gray-100 p-6">
              <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
              <h2 className="ml-5 text-2xl mb-4">
                PERMACULTURE WORKSHOP DAY 3
              </h2>
              <p className="ml-4">
                The QC urban farmers successfully learned Permaculture in a
                workshop.
              </p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
                <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                  Read More
                </span>
                <IoIosArrowForward className="ml-1 text-orange-500" />
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div className="bg-gray-100 p-6">
              <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
              <h2 className="ml-5 text-2xl mb-4">
                PERMACULTURE WORKSHOP DAY 3
              </h2>
              <p className="ml-4">
                The QC urban farmers successfully learned Permaculture in a
                workshop.
              </p>
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
            <p className="ml-4">
              The QC urban farmers successfully learned Permaculture in a
              workshop.
            </p>
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
            <p className="ml-4">
              The QC urban farmers successfully learned Permaculture in a
              workshop.
            </p>
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
          <div className="p-2 col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1">
            <h2 className="md:text-7xl font-bold text-center">Latest News</h2>
          </div>

          <div className="col-span-full md:col-span-1 lg:col-span-2 xl:col-span-2">
            <div className="bg-gray-100 p-6">
              <h2 className="ml-5 text-2xl font-bold mb-4 ">Initiatives</h2>
              <p className="ml-4">
                The QC urban farmers successfully learned Permaculture in a
                workshop.
              </p>
              <div className="flex items-center mt-2 ml-2 cursor-pointer">
                <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                  Read More
                </span>
                <IoIosArrowForward className="ml-1 text-orange-500" />
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div className="bg-gray-100 p-6">
              <h2 className="ml-5 text-2xl font-bold mb-4 ">Initiatives</h2>
              <p className="ml-4">
                The QC urban farmers successfully learned Permaculture in a
                workshop.
              </p>
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
            <p className="ml-4">
              The QC urban farmers successfully learned Permaculture in a
              workshop.
            </p>
            <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
          </div>
          <div className="bg-gray-100 p-6">
            <h2 className="ml-5 text-2xl font-bold mb-4">Initiatives</h2>
            <p className="ml-4">
              The QC urban farmers successfully learned Permaculture in a
              workshop.
            </p>
            <div className="flex items-center mt-2 ml-2 cursor-pointer">
              <span className="text-black font-bold uppercase bg-transparent hover:text-orange-500 px-2 py-1 rounded transition duration-300">
                Read More
              </span>
              <IoIosArrowForward className="ml-1 text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      <header className="text-4xl md:text-7xl font-['Arial_Black'] pt-8 mx-auto m-12 text-center pb-8">
        Learning Materials
      </header>
      <div className="w-4/5 mx-auto flex flex-col justify-center items-center">
        <img
          src={AboutData.imageUrl}
          alt={AboutData.altText}
          className="w-full"
          style={{ maxWidth: "100%" }}
        />
        <div className=" text-black w-full mt-4">
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
        {mockUpcomingEventsData.map(data => (
          <div key={data.id} className="w-full">
            <img
              src={data.imageUrl}
              alt={data.altText}
              className="w-full"
              style={{ maxWidth: "100%" }}
            />
            <div className=" text-black w-full mt-4">
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
