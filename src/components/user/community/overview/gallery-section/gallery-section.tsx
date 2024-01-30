import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetFarmGalleryQuery from "../../../../../hooks/api/get/useGetFarmGalleryQuery";
import { IoChevronForward } from "react-icons/io5";

const DisplayNone = () => {
  return (
    <div className="text-center min-h-32">
      <p className=" text-gray-400">No images found for this farm.</p>
    </div>
  );
};

const GallerySection = () => {
  const { id } = useParams();
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");

  return (
    <div>
      <h4 className="font-poppins-semibold mb-4">Gallery Overview</h4>
      {!farmGallery?.length || 0 < 0 ? (
        <DisplayNone />
      ) : (
        <>
          <div className="flex justify-center gap-3 flex-wrap">
            {farmGallery?.slice(0, 5).map((gallery, i) => (
              <div key={i}>
                <img
                  className="h-[10rem] rounded hover:shadow-lg"
                  src={gallery.imagesrc}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-2">
            <Link
              to={"gallery"}
              className="flex flex-row  items-center text-green-700 leading-none hover:underline"
            >
              See more <IoChevronForward size={18} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default GallerySection;
