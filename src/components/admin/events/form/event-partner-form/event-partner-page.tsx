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
import { Checkbox } from "../../../../ui/checkbox";

const EventPartnerPage = () => {
  const { eventId } = useParams();
  const { data: eventData } = useGetEventsDraftView(eventId || "");
  console.log(eventData);

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

      {eventData?.partnership && eventData.partnership.length <= 0 && (
        <div className="py-10 flex items-center justify-center">
          <h4 className="text-gray-500 font-poppins-medium">
            No Partners Available. Add now...
          </h4>
        </div>
      )}

      {eventData?.partnership?.map((partner, i) => (
        <div key={i} className="grid grid-cols-12 gap-4 mb-4">
          <div className="grid col-span-1 items-end gap-1.5">
            <ProfileImageUpload defaultValue={partner.logo} disabled={true} />
          </div>

          <div className="grid w-full md:col-span-3 col-span-12 items-center gap-1.5">
            <Label className=" font-poppins-medium">Name</Label>
            <Input
              type="text"
              placeholder="e.g. SamSanTech Inc."
              value={partner.name}
              readOnly
              className=" focus-visible:ring-0"
            />
          </div>

          <div className="grid w-full md:col-span-4 col-span-12 items-center gap-1.5">
            <Label className=" font-poppins-medium">Type</Label>
            <Input
              type="text"
              value={partner.type}
              readOnly
              className=" focus-visible:ring-0"
            />
          </div>
          <div className="flex w-full mt-3 justify-center md:col-span-2 col-span-12 items-center gap-1.5">
            <Checkbox className="" checked={partner.organizer} />
            <Label className="font-poppins-medium ">Organizer</Label>
          </div>

          <div className="md:col-span-1 col-span-6 flex items-end">
            <DialogEditPartner partnerId={partner.id} />
          </div>
          <div className="md:col-span-1 col-span-6 justify-end flex items-end">
            <Button
              onClick={() => handleDeleteSpeaker(partner.id)}
              variant="destructive"
              className=""
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </div>
      ))}
      <Loader isVisible={isDeleteLoading} />
    </div>
  );
};

export default EventPartnerPage;
