import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
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
import MultiImageUpload from "@components/user/community/multi-image-input/multi-image-input";
import { Form } from "@components/ui/form";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@components/ui/alert-dialog";
import Capture from "@components/user/community/capture/capture";
import BlogDetailForm from "../../../../components/admin/blogs/form/blog-detail-form/blog-detail-form";
import BlogImageForm from "../../../../components/admin/blogs/form/blog-image-form/blog-image-form";
import BlogTagsForm from "../../../../components/admin/blogs/form/blog-tags-form/blog-tags-form";
import useGetBlogsDraftView from "../../../../hooks/api/get/useGetBlogsDraftView";
import { toast } from "sonner";
import useDeleteBlogDraft from "../../../../hooks/api/delete/useDeleteBlogDraft";
import usePutBlogsUnpublish from "../../../../hooks/api/put/usePutBlogsUnpublish";
import useDeleteBlogArchive from "../../../../hooks/api/delete/useDeleteBlogArchive";
import usePutBlogsPublish from "../../../../hooks/api/put/usePutBlogsPublish";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Blogs", link: "/admin/resource/blogs" },
  { title: "Add New Blogs", link: "/admin/resource/blogs/add" }
];

const ViewBlogs = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const { data: blogData } = useGetBlogsDraftView(blogId || "");
  console.log(blogData);

  const { mutateAsync: deleteDraft } = useDeleteBlogDraft();
  const handleDeleteDraft = async () => {
    await deleteDraft(blogId || "");
    toast.success("Draft Deleted Successfully!");
    navigate("/admin/resource/blogs-drafts");
  };

  const { mutateAsync: unpublishMaterial } = usePutBlogsUnpublish();
  const handleUnpublish = async () => {
    await unpublishMaterial(blogId || "");
    toast.success("Unpublished Successfully!");
    navigate("/admin/resource/blogs-drafts");
  };

  const { mutateAsync: archiveMaterial } = useDeleteBlogArchive();
  const handleArchive = async () => {
    await archiveMaterial(blogId || "");
    toast.success("Archive Successfully!");
    navigate("/admin/resource/blogs-archives");
  };

  const { mutateAsync: publishMaterial } = usePutBlogsPublish();
  const handlePublish = async () => {
    try {
      await publishMaterial(blogId || "");
      toast.success("Published Successfully!");
      navigate("/admin/resource/blogs");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">New Blog Form</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Add new blog here and complete all required fields for publication.
        Click 'Publish' to make your article public.
      </p>
      <hr className="my-4" />
      <div className="max-w-[60rem] mx-auto">
        <>
          <BlogDetailForm />

          <Accordion type="single" collapsible className="w-full my-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Images
              </AccordionTrigger>
              <AccordionContent>
                <BlogImageForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Tags
              </AccordionTrigger>
              <AccordionContent>
                <BlogTagsForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex gap-4 justify-end mt-4">
            {blogData?.status === "draft" ? (
              <>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      className="hover:border-red-500"
                    >
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Draft?</AlertDialogTitle>
                      <AlertDialogDescription>
                        When you delete learning material draft it will be
                        remove totally in our system
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction
                        onClick={handleDeleteDraft}
                        className="bg-red-600 hover:bg-red-500 hover:text-black"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Publish Event</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to upload this material?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This learning material can be seen publicly by the users
                        when published, make sure to review everything before
                        publishing.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction onClick={handlePublish}>
                        Publish
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            ) : (
              <>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:text-white hover:bg-red-500"
                    >
                      Archive
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Archive Material?</AlertDialogTitle>
                      <AlertDialogDescription>
                        When you archive learning material it will go to
                        archieve and you can recover it from there.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction
                        onClick={handleArchive}
                        className="bg-red-600 hover:bg-red-500 hover:text-black"
                      >
                        Archive
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant={"destructive"}>Unpublish Material</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to unpublish this material?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This learning material will can't be seen in public
                        anymore.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction onClick={handleUnpublish}>
                        Unpublish
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
          </div>
        </>
      </div>
    </AdminOutletContainer>
  );
};

export default ViewBlogs;
