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
import { Link } from "react-router-dom";
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

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Blogs", link: "/admin/resource/blogs" },
  { title: "Add New Blogs", link: "/admin/resource/blogs/add" }
];

const ViewBlogs = () => {
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);

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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="ghost" className="hover:bg-red-500">
                  Discard
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to discard?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    all your progress from our website.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/blogs">
                    <AlertDialogAction className="bg-red-600 hover:bg-red-500 hover:text-black">
                      Discard
                    </AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link to="/admin/resource/blogs-drafts">
              <Button variant="outline" className="hover:border-green-500">
                Save Draft
              </Button>
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Post Blog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to upload this blog?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This blog can be seen publicly by the users when posted, if
                    you want to archive the blog you can visit the blogs
                    management in admin
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/blogs">
                    <AlertDialogAction>Post</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </>
      </div>
    </AdminOutletContainer>
  );
};

export default ViewBlogs;