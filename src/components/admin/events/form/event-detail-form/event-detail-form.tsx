import React, { useEffect, useState } from "react";
import { Input } from "@components/ui/custom/input-admin/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { DatePickerWithPresets } from "../../../../ui/date-preset-picker";
import CoverImageUpload from "../../../../ui/custom/image/cover-image-input";
import RichTextEditorBottom from "../../../../ui/custom/rich-text-editor-bottom/RichTextEditorBottom";
import { MdOutlineModeEdit } from "react-icons/md";
import { Button } from "../../../../ui/button";
import { useParams } from "react-router-dom";
import useGetEventsDraftView from "../../../../../hooks/api/get/useGetEventsDraftView";
import { addEventDetailSchema } from "./schema";
import { UpdateDraftEvent } from "../../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import usePutEventsUpdateDraft from "../../../../../hooks/api/put/usePutEventsUpdateDraft";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import { format } from "date-fns";
import RichTextEditor from "../../../../ui/custom/rich-text-editor/RichTextEditor";
const formatDate = (originalDateString: string) => {
  const date = new Date(originalDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const formattedDateString = `${year}-${month}-${day}T${hours}:${minutes}`;

  return formattedDateString;
};
const EventDetailForm = () => {
  const { eventId } = useParams();
  const { data: eventData, isLoading: eventDataLoad } = useGetEventsDraftView(
    eventId || ""
  );
  console.log(eventData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  //form
  const form = useForm<UpdateDraftEvent>({
    resolver: zodResolver(addEventDetailSchema),
    mode: "onBlur",
    defaultValues: {
      type: eventData?.type,
      image: eventData?.banner || ""
    }
  });

  // useEffect(() => {
  //   const startDate = new Date(form.watch("event_start") || "");
  //   const endDate = new Date(form.watch("event_end") || "");

  //   const timeDifference = endDate.getTime() - startDate.getTime();

  //   const daysDifference = timeDifference / (1000 * 3600 * 24);

  //   if (daysDifference <= 1) {
  //     toast.warning(
  //       "Warning: The event end date is 1 day away from the start date."
  //     );
  //   }
  // }, [form.watch("event_start"), form.watch("event_end")]);
  // console.log(form.watch("event_start"), form.watch("event_end"));

  // validations
  useEffect(() => {
    if (form.formState.errors.title) {
      toast.error(form?.formState?.errors?.title?.message);
    }
    if (form.formState.errors.type) {
      toast.error(form?.formState?.errors?.type?.message);
    }
    if (form.formState.errors.event_start) {
      toast.error(form?.formState?.errors?.event_start?.message);
    }
    if (form.formState.errors.event_end) {
      toast.error(form?.formState?.errors?.event_end?.message);
    }
    if (form.formState.errors.location) {
      toast.error(form?.formState?.errors?.location?.message);
    }
    if (form.formState.errors.image) {
      toast.error(form?.formState?.errors?.image?.message);
    }
  }, [form.formState.errors]);

  //edit
  const { mutateAsync: updateDetailMutate, isLoading: isDetailLoading } =
    usePutEventsUpdateDraft();

  //submit form
  const handleSubmitForm = async (data: UpdateDraftEvent) => {
    if (data.event_start === data.event_end) {
      form.setError("event_end", {
        type: "manual",
        message: "The event time and date can't be the same"
      });
      return null;
    }

    const compiledData: UpdateDraftEvent = {
      title: data.title,
      type: data.type,
      event_start: data.event_start,
      event_end: data.event_end,
      location: data.location,
      about: data.about,
      guide: data.guide,
      image: data.image
    };

    try {
      await updateDetailMutate({
        id: eventId || "",
        formData: compiledData
      });
      toast.success("Event Detail Updated Successfully!");
      setIsEditing(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  const todayDateTime = format(new Date(), "yyyy-MM-dd'T'HH:mm");

  if (eventDataLoad) {
    return <Loader isVisible={true} />;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold tracking-tight">Event Details</h2>
        </div>

        {/* title and type */}
        <div className=" grid grid-cols-12 gap-3">
          <div className="grid w-full items-center gap-1 md:col-span-9 col-span-12">
            <Label className=" font-poppins-medium">Title</Label>
            <Input
              type="text"
              placeholder="Input event title"
              readOnly={!isEditing}
              defaultValue={eventData?.title}
              {...form.register("title")}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 md:col-span-3 col-span-12">
            <Label className=" font-poppins-medium">Event Type</Label>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger disabled={!isEditing} className="">
                    <SelectValue
                      placeholder={eventData?.type ? eventData?.type : "Choose"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Seminar">Seminar</SelectItem>
                    <SelectItem value="Webinar">Webinar</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* when */}

          <div className="grid w-full items-center gap-1.5 md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Start Date/Time</Label>
            <Input
              type="datetime-local"
              placeholder="Input event start time"
              readOnly={!isEditing}
              defaultValue={formatDate(eventData?.event_start || "")}
              {...form.register("event_start")}
              min={todayDateTime}
            />
          </div>

          <div className="grid w-full items-center gap-1.5 md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">End Date/Time</Label>
            <Input
              type="datetime-local"
              placeholder="Input event end time"
              readOnly={!isEditing}
              defaultValue={formatDate(eventData?.event_end || "")}
              {...form.register("event_end")}
              min={todayDateTime}
            />
          </div>

          {/* where */}
          <div className="grid w-full items-center gap-1.5 mt-4  col-span-12">
            <Label className=" font-poppins-medium">Where</Label>
            <Input
              type="text"
              id="text"
              placeholder="Enter event address here..."
              {...form.register("location")}
              defaultValue={eventData?.location}
              readOnly={!isEditing}
            />
          </div>

          {/* Event desc */}
          <div className="mt-4  col-span-12">
            <Label className=" font-poppins-medium">About</Label>
            <FormField
              name="about"
              control={form.control}
              render={({ field: { onChange } }) => {
                return (
                  <RichTextEditor
                    disabled={!isEditing}
                    defaultValue={eventData?.about}
                    height={300}
                    onBlur={data => {
                      onChange(data.html);
                    }}
                  />
                );
              }}
            />
          </div>

          {/* participation guide */}
          <div className="mt-4 col-span-12">
            <Label className=" font-poppins-medium">
              How to participate guide:
            </Label>
            <FormField
              name="guide"
              control={form.control}
              render={({ field: { onChange } }) => {
                return (
                  <RichTextEditor
                    disabled={!isEditing}
                    defaultValue={eventData?.guide}
                    height={200}
                    onBlur={data => {
                      onChange(data.html);
                    }}
                  />
                );
              }}
            />
          </div>

          {/* thumbnail of event */}
          <div className="mt-4 col-span-12">
            <Label className=" font-poppins-medium">Event Banner</Label>
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <CoverImageUpload
                  onChange={value => {
                    form.setValue("image", value);
                  }}
                  defaultValue={
                    eventData?.banner ===
                    "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/"
                      ? undefined
                      : eventData?.banner
                  }
                  disabled={!isEditing}
                />
              )}
            />
          </div>
          <hr className=" col-span-12" />
          <div className="mt-4 flex justify-end  col-span-12">
            {isEditing ? (
              <div>
                <Button
                  disabled={isDetailLoading}
                  type="submit"
                  variant="default"
                >
                  Save
                </Button>
              </div>
            ) : (
              <Button
                type="button"
                variant="outline"
                className="gap-1 text-primary border-primary hover:text-white hover:bg-primary"
                onClick={() => setIsEditing(true)}
              >
                <MdOutlineModeEdit size={18} /> Edit Details
              </Button>
            )}
          </div>
        </div>
        <Loader isVisible={isDetailLoading} />
      </form>
    </Form>
  );
};

export default EventDetailForm;
