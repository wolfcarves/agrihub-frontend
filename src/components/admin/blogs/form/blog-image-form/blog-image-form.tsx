import React from "react";
import { Label } from "../../../../ui/label";
import DialogAddImages from "../../dialogs/dialog-add-images/dialog-add-images";
import useGetBlogsDraftView from "../../../../../hooks/api/get/useGetBlogsDraftView";
import { useParams } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { Checkbox } from "../../../../ui/checkbox";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import usePutBlogsThumbnail from "../../../../../hooks/api/put/usePutBlogsThumbnail";
import useDeleteBlogImage from "../../../../../hooks/api/delete/useDeleteBlogImage";

const BlogImageForm = () => {
  const { blogId } = useParams();

  //get present tags
  const { data: blogData } = useGetBlogsDraftView(blogId || "");

  //delete
  const { mutateAsync: deleteImage, isLoading: isDeleteLoading } =
    useDeleteBlogImage();

  const handleDelete = async (id: string) => {
    await deleteImage(id);
    toast.success("Image Deleted Successfully!");
  };

  //set thumbnail
  const { mutateAsync: putFeatured, isLoading: isFeaturedLoad } =
    usePutBlogsThumbnail();
  const handleIsFeatured = async (id: string) => {
    await putFeatured({ blogId: blogId || "", id: id });
    toast.success("Thumbnail Set Successfully!");
  };
  return (
    <div>
      <div className="flex flex-wrap mb-4 gap-2">
        {blogData?.images?.map((image, i) => (
          <div
            className=" bg-white border border-border p-2 rounded-md hover:shadow "
            key={i}
          >
            <div className="relative">
              <img className=" h-40 border border-border" src={image.image} />
              <button
                className="absolute top-1 right-1 text-white bg-red-600 rounded-full p-1 cursor-pointer"
                onClick={() => handleDelete(image.id)}
              >
                <FaRegTrashCan />
              </button>
            </div>
            <div className="flex items-center space-x-1 my-2">
              <Checkbox
                checked={image.thumbnail}
                onCheckedChange={() => handleIsFeatured(image.id)}
              />
              <label className="text-sm font-poppins-medium leading-none">
                Thumbnail
              </label>
            </div>
          </div>
        ))}
      </div>
      <Label className=" font-poppins-medium">Add other images</Label>
      <DialogAddImages />
      <Loader isVisible={isFeaturedLoad || isDeleteLoading} />
    </div>
  );
};

export default BlogImageForm;
