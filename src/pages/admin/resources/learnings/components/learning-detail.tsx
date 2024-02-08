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
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Button } from "@components/ui/button";
import CoverImageUpload from "@components/ui/custom/image/cover-image-input";
import { useState } from "react";
import { Card } from "@components/ui/card";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";

const LearningDetailForm = () => {
  // tags
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);

  // details edit
  const [isEditingDeets, setIsEditingDeets] = useState(false);
  const handleEditingDeets = () => {
    setIsEditingDeets(true);
  };
  const handleSaveDeets = () => {
    setIsEditingDeets(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold tracking-tight">Details</h2>
      </div>

      {/* thumbnail of event */}
      <div className="mt-4">
        <Label>Thumbnail</Label>
        <CoverImageUpload disabled={!isEditingDeets} />
      </div>

      {/* title and type */}
      <div className="flex flex-wrap justify-between gap-4 mb-4">
        <div className="grid w-full max-w-3xl items-center gap-1.5">
          <Label htmlFor="text">Title</Label>
          <Input
            type="text"
            id="text"
            placeholder="Input material title"
            defaultValue="Title inserted beforehand"
            disabled={!isEditingDeets}
          />
        </div>
        <div className="grid w-full max-w-[11rem] items-center gap-1.5">
          <Label htmlFor="email">Language</Label>
          <Select>
            <SelectTrigger disabled={!isEditingDeets}>
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Seminar">Tagalog</SelectItem>
              <SelectItem value="Webinar">English</SelectItem>
              <SelectItem value="Workshop">Tagalog and English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Event desc */}
      <div className="mt-4">
        <Label htmlFor="text">Content</Label>
        <RichTextEditor height={300} disabled={!isEditingDeets} />
      </div>
      {/* tags */}
      <div className="mt-4">
        <h3 className="text-md font-bold">Add Tags</h3>
        <Label>
          Add up to 5 tags to describe what your blog is about. Start typing to
          see suggestions.
        </Label>

        <div className="">
          <UserTagInputDropdown
            option={tagResult}
            onChange={e => {
              setSearchInputTagValue(e.target.value);
            }}
            disabled={!isEditingDeets}
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        {isEditingDeets ? (
          <div>
            <Button variant="secondary" onClick={handleSaveDeets}>
              Save
            </Button>
          </div>
        ) : (
          <Button variant="outline" onClick={handleEditingDeets}>
            Edit Details
          </Button>
        )}
      </div>
    </div>
  );
};

export default LearningDetailForm;
