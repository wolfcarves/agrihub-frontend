import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Button } from "@components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
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
import BlogDetailForm from "../../../../components/admin/blogs/form/blog-detail-form/blog-detail-form";
import BlogImageForm from "../../../../components/admin/blogs/form/blog-image-form/blog-image-form";
import BlogTagsForm from "../../../../components/admin/blogs/form/blog-tags-form/blog-tags-form";
import useGetBlogsDraftView from "../../../../hooks/api/get/useGetBlogsDraftView";
import { toast } from "sonner";
import useDeleteBlogDraft from "../../../../hooks/api/delete/useDeleteBlogDraft";
import usePutBlogsUnpublish from "../../../../hooks/api/put/usePutBlogsUnpublish";
import useDeleteBlogArchive from "../../../../hooks/api/delete/useDeleteBlogArchive";
import usePutBlogsPublish from "../../../../hooks/api/put/usePutBlogsPublish";
import Loader from "../../../../icons/Loader";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import BackButton from "@components/ui/custom/button/back-button";

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

  const { mutateAsync: deleteDraft, isLoading: draftLoading } =
    useDeleteBlogDraft();
  const handleDeleteDraft = async () => {
    await deleteDraft(blogId || "");
    toast.success("Draft Deleted Successfully!");
    navigate("/admin/resource/blogs?tab=draft");
  };

  const { mutateAsync: unpublishMaterial, isLoading: unpublishLoading } =
    usePutBlogsUnpublish();
  const handleUnpublish = async () => {
    await unpublishMaterial(blogId || "");
    toast.success("Unpublished Successfully!");
    navigate("/admin/resource/blogs?tab=draft");
  };

  const { mutateAsync: archiveMaterial, isLoading: archiveLoading } =
    useDeleteBlogArchive();
  const handleArchive = async () => {
    await archiveMaterial(blogId || "");
    toast.success("Archive Successfully!");
    navigate("/admin/resource/blogs?tab=archived");
  };

  const { mutateAsync: publishMaterial, isLoading: publishLoading } =
    usePutBlogsPublish();
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
        <h2 className="text-3xl font-bold tracking-tight flex gap-4">
          <BackButton /> Blog Form
        </h2>
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
                Add Preview Images
              </AccordionTrigger>
              <AccordionContent>
                <BlogImageForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Add Tags
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
                    <Button>Publish</Button>
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
                        This learning material will not be visible to the public
                        anymore. However, you can publish it again if you decide
                        to make this blog visible to anyone.
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
        <Loader
          isVisible={
            draftLoading || unpublishLoading || archiveLoading || publishLoading
          }
        />
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(ViewBlogs, ["admin", "asst_admin"], "blog");
