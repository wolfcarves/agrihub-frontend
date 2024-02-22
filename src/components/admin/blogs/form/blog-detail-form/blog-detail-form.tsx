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
import { MdOutlineModeEdit } from "react-icons/md";
import { Button } from "../../../../ui/button";
import { useParams } from "react-router-dom";
import { addBlogsDetailSchema } from "./schema";
import { UpdateBlogRequest } from "../../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import RichTextEditor from "../../../../ui/custom/rich-text-editor/RichTextEditor";
import useGetBlogsDraftView from "../../../../../hooks/api/get/useGetBlogsDraftView";
import usePutBlogsUpdateDraft from "../../../../../hooks/api/put/usePutBlogsUpdateDraft";

const BlogDetailForm = () => {
  const { blogId } = useParams();
  const { data: blogData, isLoading: blogDataLoad } = useGetBlogsDraftView(
    blogId || ""
  );
  console.log(blogData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  //form
  const form = useForm<UpdateBlogRequest>({
    resolver: zodResolver(addBlogsDetailSchema),
    mode: "onBlur",
    defaultValues: {
      category: blogData?.category || ""
    }
  });

  // validations
  useEffect(() => {
    if (form.formState.errors.title) {
      toast.error(form?.formState?.errors?.title?.message);
    }
    if (form.formState.errors.category) {
      toast.error(form?.formState?.errors?.category?.message);
    }
    if (form.formState.errors.author) {
      toast.error(form?.formState?.errors?.author?.message);
    }
    if (form.formState.errors.author_title) {
      toast.error(form?.formState?.errors?.author_title?.message);
    }
    if (form.formState.errors.content) {
      toast.error(form?.formState?.errors?.content?.message);
    }
  }, [form.formState.errors]);

  //edit
  const { mutateAsync: updateDetailMutate, isLoading: isDetailLoading } =
    usePutBlogsUpdateDraft();

  //submit form
  const handleSubmitForm = async (data: UpdateBlogRequest) => {
    const compiledData: UpdateBlogRequest = {
      title: data.title,
      category: data.category,
      content: data.content,
      author: data.author,
      author_title: data.author_title
    };

    try {
      await updateDetailMutate({
        id: blogId || "",
        requestBody: compiledData
      });
      toast.success("Blogs Detail Updated Successfully!");
      setIsEditing(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  if (blogDataLoad) {
    return <Loader isVisible={true} />;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold tracking-tight">Blog Details</h2>
        </div>
        <div className=" grid grid-cols-12 gap-5">
          <div className="grid w-full col-span-3 items-center gap-1.5">
            <Label className=" font-poppins-medium">Category</Label>

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger disabled={!isEditing} className="">
                    <SelectValue placeholder="Choose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="News">News</SelectItem>
                    <SelectItem value="Initiatives">Initiatives</SelectItem>
                    <SelectItem value="Story">Story</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="grid w-full col-span-9 items-center gap-1.5">
            <Label className=" font-poppins-medium">Title</Label>
            <Input
              defaultValue={blogData?.title}
              readOnly={!isEditing}
              {...form.register("title")}
              placeholder="Input blog title"
              type="text"
            />
          </div>

          <div className="grid w-full col-span-6 items-center gap-1.5">
            <Label className=" font-poppins-medium">Author</Label>
            <Input
              defaultValue={blogData?.author}
              readOnly={!isEditing}
              {...form.register("author")}
              type="text"
              placeholder="e.g. Engr. Jaylenon R. Asilo, MMPA"
            />
          </div>
          <div className="grid w-full col-span-6 items-center gap-1.5">
            <Label className=" font-poppins-medium">Author’s Title</Label>
            <Input
              defaultValue={blogData?.author_title}
              readOnly={!isEditing}
              type="text"
              {...form.register("author_title")}
              placeholder="e.g. Agriculturist"
            />
          </div>

          <div className=" col-span-12">
            <Label className=" font-poppins-medium">Content</Label>
            <FormField
              name="content"
              control={form.control}
              render={({ field: { onChange } }) => {
                return (
                  <RichTextEditor
                    disabled={!isEditing}
                    defaultValue={blogData?.content}
                    height={300}
                    onBlur={data => {
                      onChange(data.html);
                    }}
                  />
                );
              }}
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

export default BlogDetailForm;
