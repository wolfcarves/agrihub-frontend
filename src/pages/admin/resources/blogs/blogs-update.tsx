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
import { useParams } from "react-router-dom";

const UpdateBlogs = () => {
  const { blogId } = useParams();

  const breadcrumbItems = [
    { title: "Resource Management", link: "/admin/resources" },
    { title: "Blogs", link: "/admin/resource/blogs" },
    { title: `Update BLog #${blogId}`, link: "/admin/resource/blogs/add" }
  ];

  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Blog # {blogId}</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Blogs that has been published is visible to public, blogs draft is blogs
        that is currently in progress, and blogs archive is the blogs removed
        from the website.
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
                  <SelectItem value="light">News</SelectItem>
                  <SelectItem value="dark">Initiatives</SelectItem>
                  <SelectItem value="system">Story</SelectItem>
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
              <UserTagInputDropdown
                option={tagResult}
                onChange={e => {
                  setSearchInputTagValue(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex gap-4 justify-end mt-4">
            <Link to="/admin/resource/blogs">
              <Button variant="ghost">Back</Button>
            </Link>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="hover:border-red-500">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete?</AlertDialogTitle>
                  <AlertDialogDescription>
                    When you delete blogs it will go to archive and you can
                    recover it from there.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/blogs">
                    <AlertDialogAction className="bg-red-600 hover:bg-red-500 hover:text-black">
                      Delete
                    </AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link to="/admin/resource/blogs-drafts">
              <Button variant="outline" className="hover:border-green-500">
                Update Draft
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
                    This blogs can be seen publicly by the users when published,
                    make sure to review everything before publish.
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

export default UpdateBlogs;
