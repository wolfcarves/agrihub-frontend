import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { Button } from "@components/ui/button";
import CoverImageUpload from "@components/ui/custom/image/cover-image-input";
import { useState } from "react";
import { Textarea } from "@components/ui/textarea";
import { Card } from "@components/ui/card";

const LearningResourceForm = () => {
  const [resource, setResource] = React.useState(1);
  const handleAddResource = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResource(prevResource => Math.min(100, prevResource + 1));
  };
  const handleDeleteResource = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResource(prevResource => Math.max(1, prevResource - 1));
  };

  // resource edit
  const [isEditingResource, setIsEditingResource] = useState(false);
  const handleEditingResource = () => {
    setIsEditingResource(true);
  };
  const handleSaveResource = () => {
    setIsEditingResource(false);
  };

  // type upload
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const handleTypeChange = (value: string) => {
    console.log("Selected type:", value);
    setSelectedType(value);
  };

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const handleImageChange = (files: Blob[]) => {
    setSelectedImages(files as File[]);
  };
  return (
    <div>
      {/* add resource */}
      <div className="flex justify-between items-center mt-4 mb-2">
        <h2 className="text-md font-bold tracking-tight">Resource</h2>
      </div>

      {/* resource form */}
      {Array.from({ length: resource }).map((_, index) => (
        <>
          <Card className="p-4 mb-4">
            <div
              className="flex flex-wrap justify-between items-end gap-4 mb-8"
              key={index}
            >
              <h2 className="text-sm font-bold tracking-tight">
                Resource {index + 1}
              </h2>
              <div className="w-full flex justify-between gap-4">
                <div className="grid w-full max-w-[46rem] items-center gap-1.5">
                  <Label htmlFor={`name-${index}`}>Title</Label>
                  <Input
                    type="text"
                    id={`name-${index}`}
                    placeholder="Input resource title"
                    disabled={!isEditingResource}
                  />
                </div>

                <div className="grid w-full max-w-[10rem] items-center gap-1.5">
                  <Label htmlFor={`occupation-${index}`}>Type</Label>
                  <Select onValueChange={handleTypeChange}>
                    <SelectTrigger disabled={!isEditingResource}>
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Image">Image</SelectItem>
                      <SelectItem value="Video">Video</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor={`occupation-${index}`}>Description</Label>
                <Textarea
                  placeholder="insert resource desc"
                  className="active:border-green-500"
                  disabled={!isEditingResource}
                />
              </div>
              {/* for image upload  */}
              {selectedType === "Image" && (
                <div className="grid w-full items-center gap-1.5">
                  {selectedImages == 0 ? (
                    <div>
                      <Label htmlFor={`name-${index}`}>Source</Label>
                      <Input
                        type="text"
                        id={`name-${index}`}
                        placeholder="Input resource link"
                        disabled={!isEditingResource}
                      />
                      <div className="relative my-4">
                        <span className="block w-full h-px bg-gray-300"></span>
                        <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                          OR
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <CoverImageUpload
                    onChange={handleImageChange}
                    disabled={!isEditingResource}
                  />
                </div>
              )}

              {/* for video upload */}
              {selectedType === "Video" && (
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor={`name-${index}`}>Video Source</Label>
                  <Input
                    type="text"
                    id={`name-${index}`}
                    placeholder="Input video link"
                    disabled={!isEditingResource}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end mt-4 gap-4">
              {isEditingResource ? (
                <div>
                  <Button variant="secondary" onClick={handleSaveResource}>
                    Save
                  </Button>
                </div>
              ) : (
                <Button variant="outline" onClick={handleEditingResource}>
                  Edit Details
                </Button>
              )}
              <Button
                variant="destructive"
                onClick={e => handleDeleteResource(e)}
                disabled={resource < 0}
              >
                Delete
              </Button>
              <Button onClick={e => handleAddResource(e)}>
                Add more source
              </Button>
            </div>
          </Card>
        </>
      ))}
    </div>
  );
};

export default LearningResourceForm;
