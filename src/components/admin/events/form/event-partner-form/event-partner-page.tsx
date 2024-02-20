import React from "react";
import { Button } from "../../../../ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import ProfileImageUpload from "../../../../ui/custom/image/profile-image-input";
import useGetEventsDraftView from "../../../../../hooks/api/get/useGetEventsDraftView";
import { useParams } from "react-router-dom";
import DialogAddPartner from "../../dialogs/dialog-add-partner/dialog-add-partner";
import DialogEditPartner from "../../dialogs/dialog-edit-partner/dialog-edit-partner";
import useDeleteEventPartner from "../../../../../hooks/api/delete/useDeleteEventPartner";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";

const EventPartnerPage = () => {
  const { eventId } = useParams();
  const { data: eventData } = useGetEventsDraftView(eventId || "");

  //delete speaker
  const { mutateAsync: deletePartner, isLoading: isDeleteLoading } =
    useDeleteEventPartner();

  const handleDeleteSpeaker = async (id: string) => {
    await deletePartner(id);
    toast.success("Partner Deleted Successfully!");
  };
  return (
    <div>
      <div className="flex justify-between items-center my-4">
        <h2 className="text-md font-bold tracking-tight">List</h2>
        <DialogAddPartner />
      </div>

      {eventData?.partnership?.map((partner, i) => (
        <div
          key={i}
          className="flex flex-wrap justify-between items-end gap-4 mb-4"
        >
          <div className="grid items-center gap-1.5">
            <ProfileImageUpload defaultValue={partner.logo} disabled={true} />
          </div>

          <div className="grid w-full max-w-[23rem] items-center gap-1.5">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="e.g. SamSanTech Inc."
              defaultValue={partner.name}
              readOnly
              className=" focus-visible:ring-0"
            />
          </div>

          <div className="grid w-full max-w-[23rem] items-center gap-1.5">
            <Label>Type</Label>
            <Input
              type="text"
              defaultValue={partner.type}
              readOnly
              className=" focus-visible:ring-0"
            />
          </div>
          <DialogEditPartner partnerId={partner.id} />
          <Button
            onClick={() => handleDeleteSpeaker(partner.id)}
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

export default EventPartnerPage;
