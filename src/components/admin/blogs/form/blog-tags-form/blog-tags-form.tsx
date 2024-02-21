import React, { useEffect, useState } from "react";
import { Label } from "../../../../ui/label";
import * as zod from "zod";
import useGetTagByKeyWord from "../../../../../hooks/api/get/useGetTagByKeyword";
import { Button } from "../../../../ui/button";
import { useForm } from "react-hook-form";
import { CreateEventTagsRequest } from "../../../../../api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import { Card } from "../../../../ui/card";
import { IoIosClose } from "react-icons/io";
import SelectTags from "./select-tags";
import Loader from "../../../../../icons/Loader";
import useGetBlogsDraftView from "../../../../../hooks/api/get/useGetBlogsDraftView";
import useBlogsCreateTags from "../../../../../hooks/api/post/useBlogsCreateTags";
import useDeleteBlogTags from "../../../../../hooks/api/delete/useDeleteBlogTags";

export const addTagsSchema = zod.object({
  tags: zod
    .array(zod.string())
    .refine(data => data.length >= 1, {
      message: "Please enter at least 1 tag"
    })
    .default([])
});
const BlogTagsForm = () => {
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [idTags, setIdTags] = useState<Array<string>>([]);
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);
  const { blogId } = useParams();

  //get present tags
  const { data: blogData } = useGetBlogsDraftView(blogId || "");

  const form = useForm<CreateEventTagsRequest>({
    resolver: zodResolver(addTagsSchema),
    mode: "onBlur"
  });

  //add tags
  const { mutateAsync: deleteResource, isLoading: isDeleteLoading } =
    useDeleteBlogTags();
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
    useBlogsCreateTags();

  //submit
  const handleSubmitForm = async (data: CreateEventTagsRequest) => {
    const compiledData: CreateEventTagsRequest = {
      tags: data.tags
    };
    console.log(compiledData);

    try {
      await createTagsMutate({
        id: blogId || "",
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
          {blogData?.tags?.map((tag, i) => (
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

export default BlogTagsForm;
