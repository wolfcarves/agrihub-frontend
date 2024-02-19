import React from "react";

import ProfileImageUpload from "../../../../ui/custom/image/profile-image-input";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../../../../ui/button";
import DialogAddSpeaker from "../../dialogs/dialog-add-speaker/dialog-add-speaker";
import useGetEventsDraftView from "../../../../../hooks/api/get/useGetEventsDraftView";
import { useParams } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import useDeleteEventSpeaker from "../../../../../hooks/api/delete/useDeleteEventSpeaker";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import DialogEditSpeaker from "../../dialogs/dialog-edit-speaker/dialog-edit-speaker";
const EventSpeakerPage = () => {
  //get data
  const { eventId } = useParams();
  const { data: eventData } = useGetEventsDraftView(eventId || "");

  //delete speaker
  const { mutateAsync: deleteSpeaker, isLoading: isDeleteLoading } =
    useDeleteEventSpeaker();
  const handleDeleteSpeaker = async (id: string) => {
    await deleteSpeaker(id);
    toast.success("Speaker Deleted Successfully!");
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mt-4 mb-2">
        <h2 className="text-md font-bold tracking-tight">List</h2>
        <DialogAddSpeaker />
      </div>

      {/* speaker */}
      {eventData?.speaker && eventData.speaker.length <= 0 && (
        <div className="py-10 flex items-center justify-center">
          <h4 className="text-gray-500 font-poppins-medium">
            No Speaker Available. Add now...
          </h4>
        </div>
      )}

      {eventData?.speaker?.map((speaker, i) => (
        <div
          key={i}
          className="flex flex-wrap justify-between items-end gap-4 mb-4"
        >
          <div className="grid items-center gap-1.5">
            <ProfileImageUpload
              defaultValue={speaker.profile}
              disabled={true}
            />
          </div>

          <div className="grid w-full max-w-[23rem] items-center gap-1.5">
            <Label>Name</Label>
            <Input
              readOnly
              defaultValue={speaker.name}
              type="text"
              placeholder="Input speaker name"
              className=" focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full max-w-[23rem] items-center gap-1.5">
            <Label>Type</Label>
            <Input
              readOnly
              defaultValue={speaker.title}
              type="text"
              placeholder="Input event title"
              className=" focus-visible:ring-0"
            />
          </div>
          <DialogEditSpeaker speakerId={speaker.id} />
          <Button
            onClick={() => handleDeleteSpeaker(speaker.id)}
            variant="destructive"
          >
            <FaRegTrashAlt />
          </Button>
        </div>
      ))}
      <Loader isVisible={isDeleteLoading} />
    </div>
  );
};

export default EventSpeakerPage;
