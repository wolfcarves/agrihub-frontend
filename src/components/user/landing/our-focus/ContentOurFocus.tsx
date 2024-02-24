import React from "react";
export const ellipsis = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength).trim() + "...";
  }
};

import { Link } from "react-router-dom";

// interface ImageData {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
// }

// const imageData: ImageData[] = [
//   {
//     id: 1,
//     image: image1,
//     title: "DATA ANALYTICS",
//     description: "Lorem ipsum dolor sit amet..."
//   },
//   {
//     id: 2,
//     image: image2,
//     title: "BLOG",
//     description: "Sa pangalawang araw ng workshop..."
//   },
//   {
//     id: 3,
//     image: image3,
//     title: "ARTICLES",
//     description: "Nagsama-sama ang mga lider ng mga Urban Farms..."
//   },
//   {
//     id: 3,
//     image: image4,
//     title: "FARMS",
//     description: "Nagsama-sama ang mga lider ng mga Urban Farms..."
//   }
// ];

const ContentOurFocus: React.FC = () => {
  return (
    <>
      <div className="px-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 grid-rows-1 gap-5">
          <Link to={`/blogs`}>
            <div className="group flex flex-col">
              <div className="max-h-370px max-w-750px ">
                <img
                  src="\src\assets\images\bannerchildren'smonth.jpg"
                  alt="Our Focus"
                  className="w-full rounded-lg max-h-64 min-h-64 object-cover"
                />
              </div>

              <div className="mt-3 pb-3">
                <h5 className="font-bold mt-1">
                  <span className="group-hover:text-green-700 text-xl">
                    Our Focus
                  </span>
                </h5>
                <p className="group-hover:text-green-700 text-sm me-8 text-justify">
                  Our Focus blogs is the primary focus of the Quezon City for
                  Urban Agriculture practicing their mission for the useful
                  Urban Farming practices in Quezon City. These blogs contains
                  the description along with the supporting photo documentation.
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/blogs`}>
            <div className="group flex flex-col">
              <div className="max-h-370px max-w-750px ">
                <img
                  src="\src\assets\images\bannerchildren'smonth.jpg"
                  alt="Our Focus"
                  className="w-full rounded-t-lg max-h-64 min-h-64 object-cover"
                />
              </div>

              <div className="mt-3 pb-3">
                <h5 className="font-bold mt-1">
                  <span className="group-hover:text-green-700 text-xl">
                    Initiatives
                  </span>
                </h5>
                <p className="group-hover:text-green-700 text-sm me-8 text-justify">
                  Quezon City Center for Urban Agriculture leads meaningful
                  initiatives that would be helpful in the Urban Farming
                  practices. These blogs contains the narrative of each of their
                  initiatives along with the photo documentation.
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/about/latest`}>
            <div className="group flex flex-col">
              <div className="max-h-370px max-w-750px ">
                <img
                  src="\src\assets\images\bannerchildren'smonth.jpg"
                  alt="Our Focus"
                  className="w-full rounded-t-lg max-h-64 min-h-64 object-cover"
                />
              </div>

              <div className="mt-3 pb-3">
                <h5 className="font-bold mt-1">
                  <span className="group-hover:text-green-700 text-xl">
                    News
                  </span>
                </h5>
                <p className="group-hover:text-green-700 text-sm me-8 text-justify">
                  News blogs provides information about latest events and
                  information about the Urban Farming practices in Quezon City.
                  These blogs contains the description of the news along with
                  the supporting photo documentation.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentOurFocus;
