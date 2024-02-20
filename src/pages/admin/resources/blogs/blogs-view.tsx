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
        <form>
          <div className="flex flex-wrap justify-between gap-4 mb-4">
            <div className="grid w-full max-w-[11rem] items-center gap-1.5">
              <Label htmlFor="email">Category</Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="News">News</SelectItem>
                  <SelectItem value="Initiatives">Initiatives</SelectItem>
                  <SelectItem value="Story">Story</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-3xl items-center gap-1.5">
              <Label htmlFor="text">Title</Label>
              <Input type="text" id="text" placeholder="Input blog title" />
            </div>
          </div>

          {/* input content */}
          <div>
            <Label htmlFor="text">Content</Label>
            <RichTextEditor height={300} />
          </div>

          {/* input author name and title */}
          <div className="flex gap-4 my-6">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="text">Author</Label>
              <Input
                type="text"
                id="text"
                placeholder="e.g. Engr. Jaylenon R. Asilo, MMPA"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="text">Autor Title's</Label>
              <Input type="text" id="text" placeholder="e.g. Agriculturist" />
            </div>
          </div>

          {/* upload image */}
          <Label>Add blog thumbnail</Label>
          <Capture />
          <br />
          <Label>Add other images</Label>
          <MultiImageUpload />
          {/* tag section */}
          <div className="mt-4">
            <h3 className="text-foreground text-md font-poppins-bold">
              Add Tags
            </h3>

            <Label>
              Add up to 5 tags to describe what your blog is about. Start typing
              to see suggestions.
            </Label>

            <div className="">
              {/* <UserTagInputDropdown
                option={tagResult}
                onChange={e => {
                  setSearchInputTagValue(e.target.value);
                }}
              /> */}
            </div>
          </div>

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
        </form>
      </div>
    </AdminOutletContainer>
  );
};

export default ViewBlogs;
