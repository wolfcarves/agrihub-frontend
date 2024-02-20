import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
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
import { Input } from "../../../../ui/custom/input-admin/input";
import ProfileImageUpload from "../../../../ui/custom/image/profile-image-input";
import useGetEventsDraftView from "../../../../../hooks/api/get/useGetEventsDraftView";
import { useParams } from "react-router-dom";
import { Checkbox } from "../../../../ui/checkbox";
import { Form, FormField, FormItem } from "../../../../ui/form";
import { useForm } from "react-hook-form";
import { NewEventPartnership } from "../../../../../api/openapi";
import { addEventPartnerSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useEventsCreatePartners from "../../../../../hooks/api/post/useEventsCreatePartners";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import usePutEventsUpdatePartners from "../../../../../hooks/api/put/usePutEventsUpdatePartners";
interface formProps {
  setIsOpen: Dispatch<SetStateAction<boolean | undefined>>;
  partnerId?: string;
}
const EventPartnerForm: React.FC<formProps> = ({ setIsOpen, partnerId }) => {
  const { eventId } = useParams();

  //get data
  const { data: eventData } = useGetEventsDraftView(eventId || "");
  //get present partner
  const activePartner = useMemo(() => {
    return eventData?.partnership?.find(partner => partner.id === partnerId);
  }, [eventData, partnerId]);

  console.log(activePartner);

  const form = useForm<NewEventPartnership>({
    resolver: zodResolver(addEventPartnerSchema),
    mode: "onBlur"
  });

  // validations
  useEffect(() => {
    if (form.formState.errors.name) {
      toast.error(form?.formState?.errors?.name?.message);
    }
    if (form.formState.errors.type) {
      toast.error(form?.formState?.errors?.type?.message);
    }
    if (form.formState.errors.logo) {
      toast.error(form?.formState?.errors?.logo?.message);
    }
    if (form.formState.errors.organizer) {
      toast.error(form?.formState?.errors?.organizer?.message);
    }
  }, [form.formState.errors]);

  //create
  const { mutateAsync: createPartnerMutate, isLoading: isPartnerLoading } =
    useEventsCreatePartners();

  //update
  const { mutateAsync: updatePartnerMutate, isLoading: isUpdateLoading } =
    usePutEventsUpdatePartners();

  const handleSubmitForm = async (data: NewEventPartnership) => {
    const compiledData: NewEventPartnership = {
      type: data.type,
      name: data.name,
      logo: data.logo,
      organizer: data.organizer
    };

    try {
      if (partnerId) {
        await updatePartnerMutate({
          id: activePartner?.id || "",
          formData: compiledData
        });
        toast.success("Partner Edited Successfully!");
      } else {
        await createPartnerMutate({
          id: eventId || "",
          formData: compiledData
        });
      }

      toast.success("Partner Edited Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitForm)} className="w-full">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-4">
          <div className="grid items-center gap-1.5">
            <Label className=" font-poppins-medium">Logo</Label>
            <FormField
              control={form.control}
              name="logo"
              render={() => (
                <ProfileImageUpload
                  defaultValue={activePartner?.logo}
                  onChange={value => {
                    form.setValue("logo", value);
                  }}
                />
              )}
            />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" font-poppins-medium">Name</Label>
            <Input
              type="text"
              placeholder="e.g. SamSanTech Inc."
              defaultValue={activePartner?.name}
              {...form.register("name")}
            />
          </div>

          <div className="grid w-full  items-center gap-1.5">
            <Label className=" font-poppins-medium">Type</Label>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="">
                    <SelectValue
                      placeholder={
                        activePartner?.type ? activePartner.type : "Choose"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Seminar">Partnership</SelectItem>
                    <SelectItem value="Webinar">Sponsored</SelectItem>
                    <SelectItem value="Workshop">Supported</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex w-full  items-center gap-1.5">
            <FormField
              control={form.control}
              name="organizer"
              render={({ field }) => (
                <FormItem className="flex w-full  items-center gap-1.5">
                  <Checkbox className="mt-1" onCheckedChange={field.onChange} />
                  <Label className="font-poppins-medium ">Organizer</Label>
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button
              type="reset"
              variant={"outline"}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button disabled={isPartnerLoading} type="submit">
              Save
            </Button>
          </div>
        </div>
        <Loader isVisible={isPartnerLoading} />
      </form>
    </Form>
  );
};

export default EventPartnerForm;
