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
import CoverImageUpload from "@components/ui/custom/image/cover-image-input";
import { Form } from "@components/ui/form";
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
import { useParams } from "react-router-dom";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import { Minus, Plus } from "lucide-react";
import { Textarea } from "@components/ui/textarea";

const UpdateLearnings = () => {
  const { learningsId } = useParams();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);
  const [resource, setResource] = React.useState(1);
  const [credits, setCredit] = React.useState(1);

  const breadcrumbItems = [
    { title: "Resource Management", link: "/admin/resources" },
    { title: "Learnings", link: "/admin/resource/events" },
    {
      title: `View Learning Material ${learningsId}`,
      link: `/admin/resource/learnings/view/${learningsId}`
    }
  ];

  const handleAddResource = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResource(prevResource => Math.min(100, prevResource + 1));
  };

  const handleDeleteResource = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResource(prevResource => Math.max(1, prevResource - 1));
  };

  const handleAddCredit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCredit(prevCredit => Math.min(100, prevCredit + 1));
  };

  const handleDeleteCredit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCredit(prevCredit => Math.max(1, prevCredit - 1));
  };
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Learning Material# {learningsId}
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Complete your draft, after publishing this material it will be visible
        to public. You can also save your progress in draft or delete it.
      </p>
      <hr className="my-4" />
      <div className="max-w-[60rem] mx-auto">
        <form>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold tracking-tight">Details</h2>
          </div>

          {/* thumbnail of event */}
          <div className="mt-4">
            <Label>Thumbnail</Label>
            <CoverImageUpload />
          </div>

          {/* title and type */}
          <div className="flex flex-wrap justify-between gap-4 mb-4">
            <div className="grid w-full max-w-3xl items-center gap-1.5">
              <Label htmlFor="text">Title</Label>
              <Input
                type="text"
                id="text"
                placeholder="Input material title"
                defaultValue="Title inserted beforehand"
              />
            </div>
            <div className="grid w-full max-w-[11rem] items-center gap-1.5">
              <Label htmlFor="email">Language</Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seminar">Tagalog</SelectItem>
                  <SelectItem value="Webinar">English</SelectItem>
                  <SelectItem value="Workshop">Tagalog and English</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Event desc */}
          <div className="mt-4">
            <Label htmlFor="text">Content</Label>
            <RichTextEditor height={300} />
          </div>

          {/* add resource */}
          <div className="flex justify-between items-center mt-4 mb-2">
            <h2 className="text-md font-bold tracking-tight">Resource</h2>
            <div>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={e => handleDeleteResource(e)}
                    disabled={resource < 0}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-md font-bold tracking-tighter">
                      {resource}
                    </div>
                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                      Resource
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={e => handleAddResource(e)}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* resource form */}
          {Array.from({ length: resource }).map((_, index) => (
            <>
              <div
                className="flex flex-wrap justify-between items-end gap-4 mb-8"
                key={index}
              >
                <h2 className="text-sm font-bold tracking-tight">
                  Resource {index + 1}
                </h2>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor={`name-${index}`}>Title</Label>
                  <Input
                    type="text"
                    id={`name-${index}`}
                    placeholder="Input resource title"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor={`occupation-${index}`}>Description</Label>
                  <Textarea
                    placeholder="insert resource desc"
                    className="active:border-green-500"
                  />
                </div>

                <div className="grid w-full max-w-[49rem] items-center gap-1.5">
                  <Label htmlFor={`name-${index}`}>Source</Label>
                  <Input
                    type="text"
                    id={`name-${index}`}
                    placeholder="Input resource link"
                  />
                </div>
                <div className="grid w-full max-w-[10rem] items-center gap-1.5">
                  <Label htmlFor={`occupation-${index}`}>Type</Label>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Seminar">Image</SelectItem>
                      <SelectItem value="Webinar">Video</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          ))}

          {/* add credits */}
          <div className="flex justify-between items-center mt-4 mb-2">
            <h2 className="text-md font-bold tracking-tight">Credits</h2>
            <div>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={e => handleDeleteCredit(e)}
                    disabled={credits < 0}
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-md font-bold tracking-tighter">
                      {credits}
                    </div>
                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                      Credits
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={e => handleAddCredit(e)}
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* credits form */}
          {Array.from({ length: credits }).map((_, index) => (
            <>
              <h2 className="text-sm font-bold tracking-tight">
                Credit {index + 1}
              </h2>
              <div
                className="flex flex-wrap justify-between items-end gap-4 mb-8"
                key={index}
              >
                <div className="grid w-full max-w-[44rem] items-center gap-1.5">
                  <Label htmlFor={`name-${index}`}>Name</Label>
                  <Input
                    type="text"
                    id={`name-${index}`}
                    placeholder="e.g Engr. Jusin F. Malindao"
                  />
                </div>

                <div className="grid w-full max-w-[15rem] items-center gap-1.5">
                  <Label htmlFor={`occupation-${index}`}>Title</Label>
                  <Input
                    type="text"
                    id={`occupation-${index}`}
                    placeholder="e.g Agriculturist"
                  />
                </div>
              </div>
            </>
          ))}

          {/* tags */}
          <div className="mt-4">
            <h3 className="text-md font-bold">Add Tags</h3>
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
          {/* ==================================bu-ons======================================== */}
          <div className="flex gap-4 justify-end mt-4">
            <Link to="/admin/resource/learnings-draft">
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
                  <AlertDialogTitle>Delete Material?</AlertDialogTitle>
                  <AlertDialogDescription>
                    When you delete learning material it will go to archive and
                    you can recover it from there.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/learnings-archives">
                    <AlertDialogAction className="bg-red-600 hover:bg-red-500 hover:text-black">
                      Delete
                    </AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link to="/admin/resource/learnings-draft">
              <Button variant="outline" className="hover:border-green-500">
                Update Draft
              </Button>
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Publish Material</Button>
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
                  <Link to="/admin/resource/leanings">
                    <AlertDialogAction>Publish</AlertDialogAction>
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

export default UpdateLearnings;
