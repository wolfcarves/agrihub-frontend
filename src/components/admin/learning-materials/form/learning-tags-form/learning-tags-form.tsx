import React, { useEffect, useState } from "react";
import { Label } from "../../../../ui/label";
import * as zod from "zod";
import useGetTagByKeyWord from "../../../../../hooks/api/get/useGetTagByKeyword";
import { Button } from "../../../../ui/button";
import UserTagInputDropdown from "../../../../user/account/input/UserTagInput";
import useLearningCreateTags from "../../../../../hooks/api/post/useLearningCreateTags";
import { useForm } from "react-hook-form";
import { NewLearningTags } from "../../../../../api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import { Card } from "../../../../ui/card";
import { IoIosClose } from "react-icons/io";
import SelectTags from "./select-tags";
import useGetLearningDraftList from "../../../../../hooks/api/get/useGetLearningDraftList";
import useGetLearningDraftView from "../../../../../hooks/api/get/useGetLearningView";
import useDeleteLearningTags from "../../../../../hooks/api/delete/useDeleteLearningTags";
import Loader from "../../../../../icons/Loader";

export const addTagsSchema = zod.object({
  tags: zod
    .array(zod.string())
    .refine(data => data.length >= 1, {
      message: "Please enter at least 1 tag"
    })
    .default([])
});
const LearningTagsForm = () => {
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [idTags, setIdTags] = useState<Array<string>>([]);
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);
  const { learningsId } = useParams();

  //get present tags
  const { data: LearningData } = useGetLearningDraftView(learningsId || "");

  const form = useForm<NewLearningTags>({
    resolver: zodResolver(addTagsSchema),
    mode: "onBlur"
  });

  //add tags
  const { mutateAsync: deleteResource, isLoading: isDeleteLoading } =
    useDeleteLearningTags();
  const handleDelete = async (id: string) => {
    await deleteResource(id);
    toast.success("Tags Deleted Successfully!");
  };

  // validations
  useEffect(() => {
    if (form.formState.errors.tags) {
      toast.error(form?.formState?.errors?.tags?.message);
    }
  }, [form.formState.errors]);

  //create
  const { mutateAsync: createTagsMutate, isLoading: isTagsLoading } =
    useLearningCreateTags();

  //submit
  const handleSubmitForm = async (data: NewLearningTags) => {
    const compiledData: NewLearningTags = {
      tags: data.tags
    };
    console.log(compiledData);

    try {
      await createTagsMutate({
        id: learningsId || "",
        requestBody: compiledData
      });
      toast.success("Tags Added Successfully!");
      setTags([]);
      setIdTags([]);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  return (
    <div className="mt-4">
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          {LearningData?.tags?.map((tag, i) => (
            <span
              key={i}
              className="inline-flex gap-1 items-center rounded-md bg-green-50 pl-3 pr-2 py-2 text-base font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
            >
              {tag.tag}
              <IoIosClose
                onClick={() => handleDelete(tag.id)}
                className=" text-green-600/50 hover:text-red-800/60"
                size={18}
              />
            </span>
          ))}
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="pb-[2rem]"
        >
          <Card className="p-4 mb-4">
            <h3 className="text-md font-bold">Add Tags</h3>
            <Label>
              Add up to 5 tags to describe what your blog is about. Start typing
              to see suggestions.
            </Label>

            <div className="">
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
            </div>
            <div className="flex justify-end mt-2">
              <Button
                disabled={isTagsLoading || tags.length <= 0}
                type="submit"
              >
                Save
              </Button>
            </div>
          </Card>
        </form>
        <Loader isVisible={isTagsLoading || isDeleteLoading} />
      </Form>
    </div>
  );
};

export default LearningTagsForm;
