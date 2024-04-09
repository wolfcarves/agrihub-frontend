import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import { Card } from "@components/ui/card";
import { useParams } from "react-router-dom";
import useGetLearningDraftView from "../../../../../hooks/api/get/useGetLearningView";
import useDeleteLearningResource from "../../../../../hooks/api/delete/useDeleteLearningResource";
import { toast } from "sonner";
import { Checkbox } from "../../../../ui/checkbox";
import usePutLearningFeatured from "../../../../../hooks/api/put/usePutLearningFeatured";
import DialogAddResource from "../../dialogs/dialog-add-resource/dialog-add-resource";
import DialogEditResource from "../../dialogs/dialog-edit-resource/dialog-edit-resource";
import Loader from "../../../../../icons/Loader";
import { convertToEmbedLink } from "../../../../lib/utils";

const LearningResourceForm = () => {
  const { learningsId } = useParams();
  const { data: LearningData } = useGetLearningDraftView(learningsId || "");

  const { mutateAsync: deleteResource, isLoading: isDeleteLoad } =
    useDeleteLearningResource();
  const handleDelete = async (id: string) => {
    await deleteResource(id);
    toast.success("Resource Deleted Successfully!");
  };

  const { mutateAsync: putFeatured, isLoading: isFeaturedLoad } =
    usePutLearningFeatured();
  const handleIsFeatured = async (id: string) => {
    await putFeatured({ materialId: learningsId || "", id: id });
    toast.success("Featured Successfully!");
  };
  return (
    <div>
      {/* add resource */}
      <div className="flex justify-end mb-4">
        <DialogAddResource />
      </div>

      {/* resource form */}
      {LearningData?.learning_resource &&
        LearningData.learning_resource.length <= 0 && (
          <div className="py-10 flex items-center justify-center">
            <h4 className="text-gray-500 font-poppins-medium">
              No Resource Available. Add now...
            </h4>
          </div>
        )}
      <div className="w-full grid grid-cols-12 gap-4">
        {LearningData?.learning_resource?.map((resource, index) => (
          <Card key={index} className="p-4 mb-4 col-span-12 md:col-span-6">
            <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
              <h2 className="text-sm font-bold tracking-tight">
                Resource {index + 1}
              </h2>
              <div className="w-full flex justify-between gap-4">
                <div className="grid w-full max-w-[46rem] items-center gap-1.5">
                  <Label className=" font-poppins-medium">Title</Label>
                  <Input
                    type="text"
                    value={resource.name}
                    placeholder="Input resource title"
                    readOnly
                  />
                </div>

                <div className="grid w-full max-w-[10rem] items-center gap-1.5">
                  <Label className=" font-poppins-medium">Type</Label>
                  <Input
                    type="text"
                    className=" capitalize"
                    value={resource.type}
                    placeholder="Type"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label className=" font-poppins-medium">Description</Label>
                <Textarea
                  placeholder="insert resource desc"
                  className=" focus-visible:ring-primary/60"
                  value={resource.description || ""}
                  readOnly
                />
              </div>
              {/* Source  */}
              {resource.type === "video" && (
                <div className="grid w-full items-center gap-1.5">
                  <div>
                    <Label className=" font-poppins-medium">Video Source</Label>
                    <div className="w-full aspect-video max-h-[64] rounded-lg">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={convertToEmbedLink(resource.resource || "")}
                        title={resource.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
              {resource.type === "image" && (
                <div className="grid w-full items-center gap-1.5">
                  <div>
                    <Label className=" font-poppins-medium">
                      Image Uploaded
                    </Label>
                    <img
                      src={resource.resource}
                      alt="Uploaded"
                      className="h-64 w-full rounded-lg object-cover object-center border border-border"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-4 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={resource.is_featured}
                  onCheckedChange={() => handleIsFeatured(resource.id)}
                />
                <label className="text-sm font-poppins-medium leading-none">
                  Featured
                </label>
              </div>

              <div className="flex gap-4">
                <DialogEditResource resourceId={resource.id} />
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(resource.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Loader isVisible={isFeaturedLoad || isDeleteLoad} />
    </div>
  );
};

export default LearningResourceForm;
