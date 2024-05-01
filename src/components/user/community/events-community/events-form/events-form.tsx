import React, { Dispatch, SetStateAction, useState } from "react";
import { communityEventSchema } from "./schema";
import {
  CreateCommunityEventFormData,
  UpdateCommunityEventFormData
} from "../../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import useCommunityFarmEventsCreate from "../../../../../hooks/api/post/useCommunityFarmEventsCreate";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import { Form, FormField, FormMessage } from "../../../../ui/form";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";
import Dropzone from "../dropzone/dropzone";
import RichTextEditor from "../../../../ui/custom/rich-text-editor/RichTextEditor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import SelectTags from "./select-tags";
import useGetTagByKeyWord from "../../../../../hooks/api/get/useGetTagByKeyword";
import useGetCommunityFarmApplicationView from "../../../../../hooks/api/get/useGetCommunityFarmApplicationView";
import useGetCommunityFarmEventView from "../../../../../hooks/api/get/useGetCommunityFarmEventView";
import {
  formatDate,
  formatDateTimeMain,
  sliceDate
} from "../../../../lib/utils";
import { communityEventUpdateSchema } from "./schemas";
import usePutCommunityFarmEventsUpdate from "../../../../../hooks/api/put/usePutCommunityFarmEventsUpdate";
import UserTagInputDropdown from "../../../account/input/UserTagInput";

type formProps = {
  eventId?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const EventsForm: React.FC<formProps> = ({ eventId, setIsOpen }) => {
  const { id } = useParams();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [idTags, setIdTags] = useState<Array<string>>([]);
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);
  const form = useForm<CreateCommunityEventFormData>({
    resolver: zodResolver(
      eventId ? communityEventUpdateSchema : communityEventSchema
    ),
    mode: "onBlur"
  });

  const { data: eventData, isLoading } = useGetCommunityFarmEventView(
    eventId || ""
  );

  const { mutateAsync: eventMutate, isLoading: eventLoading } =
    useCommunityFarmEventsCreate();

  const { mutateAsync: updateMutate, isLoading: updateLoading } =
    usePutCommunityFarmEventsUpdate();

  const handleSubmitForm = async (data: CreateCommunityEventFormData) => {
    try {
      if (eventId) {
        const compiledData: UpdateCommunityEventFormData = {
          title: data.title,
          about: data.about,
          start_date: data.start_date,
          end_date: data.end_date,
          type: data.type,
          tags: data.tags,
          banner: data.banner
        };

        await updateMutate({ id: eventId, formData: compiledData });
        toast.success("Event Updated Successfully!");
        setTags([]);
        setIdTags([]);
        setIsOpen(false);
      } else {
        const compiledData: CreateCommunityEventFormData = {
          farmid: id || "",
          title: data.title,
          about: data.about,
          start_date: data.start_date,
          end_date: data.end_date,
          type: data.type,
          tags: data.tags,
          banner: data.banner
        };

        await eventMutate({
          formData: compiledData
        });
        toast.success("Event Added Successfully!");
        setTags([]);
        setIdTags([]);
        setIsOpen(false);
      }
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };
  console.log(form.formState.errors);
  if (isLoading) {
    return <Loader isVisible={true} />;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
        className=""
      >
        <div className="grid grid-cols-12 gap-4 mb-4 h-[70vh] overflow-y-auto px-2 custom-scroll py-2">
          <div className="md:col-span-12 col-span-12">
            <div className="md:w-[100%] w-full">
              <FormField
                control={form.control}
                name="banner"
                render={() => (
                  <Dropzone
                    defaultValue={eventData?.banner}
                    onChange={value => {
                      form.setValue("banner", value);
                      console.log(value);
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="md:col-span-12 col-span-12">
            <Label className=" font-poppins-medium">Title</Label>
            <Input
              {...form.register("title")}
              type="text"
              className="h-9 rounded-md "
              defaultValue={eventData?.title}
            />
            <FormMessage>{form.formState.errors.title?.message}</FormMessage>
          </div>
          <div className="md:col-span-12 col-span-12">
            <Label className=" font-poppins-medium">About</Label>
            <FormField
              name="about"
              control={form.control}
              render={({ field: { onChange } }) => {
                return (
                  <RichTextEditor
                    defaultValue={eventData?.about}
                    allowUploadImage={false}
                    onBlur={data => {
                      onChange(data.html);
                    }}
                    height={150}
                  />
                );
              }}
            />
            <FormMessage>{form.formState.errors.about?.message}</FormMessage>
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Start Date</Label>
            <Input
              {...form.register("start_date")}
              type="datetime-local"
              className="h-9 rounded-md "
              defaultValue={formatDateTimeMain(
                sliceDate(eventData?.start_date || "")
              )}
            />
            <FormMessage>
              {form.formState.errors.start_date?.message}
            </FormMessage>
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">End Date</Label>
            <Input
              {...form.register("end_date")}
              type="datetime-local"
              className="h-9 rounded-md "
              defaultValue={formatDateTimeMain(
                sliceDate(eventData?.end_date || "")
              )}
            />
            <FormMessage>{form.formState.errors.end_date?.message}</FormMessage>
          </div>
          <div className="md:col-span-12 col-span-12">
            <Label className=" font-poppins-medium">Visibility Type</Label>
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={eventData?.type}
                >
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Select Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />

            <FormMessage>{form.formState.errors.end_date?.message}</FormMessage>
          </div>
          {/* {form.watch("type") === "public" ||
            (eventData?.type === "public" && (
              <div className="md:col-span-12 col-span-12">
                <Label className=" font-poppins-medium">Tags</Label>
                <div className="py-3 flex flex-wrap gap-2">
                  {eventData?.tags?.map((tag, i) => (
                    <div
                      key={i}
                      className="text-primary border border-primary p-1 px-2 text-sm rounded-full"
                    >
                      {tag.tag}
                    </div>
                  ))}
                </div>
                <FormField
                  name="tags"
                  control={form.control}
                  render={({ field: { onChange } }) => {
                    return (
                      <SelectTags
                        option={tagResult}
                        onChange={e => {
                          setSearchInputTagValue(e.target.value);
                        }}
                        onTagsValueChange={e => {
                          onChange(e);
                        }}
                        tags={tags}
                        setTags={setTags}
                        idTags={idTags}
                        setIdTags={setIdTags}
                      />
                    );
                  }}
                />
                <FormMessage>{form.formState.errors.tags?.message}</FormMessage>
              </div>
            ))} */}
          {form.watch("type") === "public" && (
            <div className="md:col-span-12 col-span-12">
              <Label className=" font-poppins-medium">Tags</Label>

              <FormField
                name="tags"
                control={form.control}
                render={({ field: { onChange } }) => {
                  return (
                    <UserTagInputDropdown
                      keyword={searchInputTagValue}
                      onChange={e => {
                        setSearchInputTagValue(e.target.value);
                      }}
                      onTagsValueChange={e => {
                        onChange(e);
                      }}
                    />
                  );
                }}
              />
              <FormMessage>{form.formState.errors.tags?.message}</FormMessage>
            </div>
          )}
          <div className="py-3 flex flex-wrap gap-2">
            {eventData?.tags?.map((tag, i) => (
              <div
                key={i}
                className="text-primary border border-primary p-1 px-2 text-sm rounded-full"
              >
                {tag.tag}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 flex gap-2 justify-end items-center pb-[1rem]">
          <Button
            type="button"
            variant={"outline"}
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
          <Button disabled={eventLoading} type="submit">
            Submit
          </Button>
        </div>
      </form>
      <Loader isVisible={eventLoading || updateLoading} />
    </Form>
  );
};

export default EventsForm;
