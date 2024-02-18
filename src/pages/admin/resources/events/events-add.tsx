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
import ProfileImageUpload from "@components/ui/custom/image/profile-image-input";
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
import { DatePickerWithPresets } from "@components/ui/date-preset-picker";
import { FaRegTrashAlt } from "react-icons/fa";
import EventDetailForm from "../../../../components/admin/events/form/event-detail-form/event-detail-form";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Events", link: "/admin/resource/events" },
  { title: "Add New Event", link: "/admin/resource/blogs/add" }
];

const AddEvents = () => {
  const [speakerCount, setSpeakerCount] = useState(1);
  const [partnersCount, setPartnerCount] = useState(1);

  const handleAddSpeaker = (e: any) => {
    e.preventDefault();
    setSpeakerCount(prevCount => prevCount + 1); // Increment speaker count
  };

  const handleDeleteSpeaker = (index: number, e: any) => {
    e.preventDefault();
    setSpeakerCount(prevCount => prevCount - 1);
  };

  const handleAddPartner = (e: any) => {
    e.preventDefault();
    setPartnerCount(prevCount => prevCount + 1); // Increment speaker count
  };

  const handleDeletePartner = (index: number, e: any) => {
    e.preventDefault();
    setPartnerCount(prevCount => prevCount - 1);
  };

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">New Event Form</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Add new event here and complete all required fields for publication.
        Click 'Publish' to make your article public.
      </p>
      <hr className="my-4" />
      <div className="max-w-[60rem] mx-auto">
        <form>
          <EventDetailForm />

          <div className="flex justify-between items-center mt-4 mb-2">
            <h2 className="text-md font-bold tracking-tight">Speaker</h2>
            <Button ref={null} variant="outline" onClick={handleAddSpeaker}>
              + Add Speaker
            </Button>
          </div>

          {/* speaker */}
          {Array.from({ length: speakerCount }).map((_, index) => (
            <>
              <div
                className="flex flex-wrap justify-between items-end gap-4 mb-4"
                key={index}
              >
                <div className="grid items-center gap-1.5">
                  <ProfileImageUpload />
                </div>

                <div className="grid w-full max-w-[23rem] items-center gap-1.5">
                  <Label htmlFor={`name-${index}`}>Name</Label>
                  <Input
                    type="text"
                    id={`name-${index}`}
                    placeholder="Input speaker name"
                  />
                </div>
                <div className="grid w-full max-w-[23rem] items-center gap-1.5">
                  <Label htmlFor={`occupation-${index}`}>Type</Label>
                  <Input
                    type="text"
                    id={`occupation-${index}`}
                    placeholder="Input event title"
                  />
                </div>
                <Button
                  variant="destructive"
                  onClick={e => handleDeleteSpeaker(index, e)}
                >
                  <FaRegTrashAlt />
                </Button>
              </div>
            </>
          ))}

          <div className="flex justify-between items-center my-4">
            <h2 className="text-xl font-bold tracking-tight">Event Partners</h2>
            <Button ref={null} variant="outline" onClick={handleAddPartner}>
              + Add Partner
            </Button>
          </div>

          {/* speaker */}
          {Array.from({ length: partnersCount }).map((_, index) => (
            <>
              <div
                className="flex flex-wrap justify-between items-end gap-4 mb-4"
                key={index}
              >
                <div className="grid items-center gap-1.5">
                  <ProfileImageUpload />
                </div>

                <div className="grid w-full max-w-[23rem] items-center gap-1.5">
                  <Label htmlFor={`name-${index}`}>Name</Label>
                  <Input
                    type="text"
                    id={`name-${index}`}
                    placeholder="e.g. SamSanTech Inc."
                  />
                </div>

                <div className="grid w-full max-w-[23rem] items-center gap-1.5">
                  <Label htmlFor="email">Type</Label>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Seminar">Partnership</SelectItem>
                      <SelectItem value="Webinar">Sponsored</SelectItem>
                      <SelectItem value="Workshop">Supported</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="destructive"
                  onClick={e => handleDeletePartner(index, e)}
                >
                  <FaRegTrashAlt />
                </Button>
              </div>
            </>
          ))}

          {/* ==================================bu-ons======================================== */}
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
                  <Link to="/admin/resource/events">
                    <AlertDialogAction className="bg-red-600 hover:bg-red-500 hover:text-black">
                      Discard
                    </AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link to="/admin/resource/events-draft">
              <Button variant="outline" className="hover:border-green-500">
                Save Draft
              </Button>
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Post Event</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to upload this event?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This event can be seen publicly by the users when posted, if
                    you want to archive the event you can visit the archive
                    management in admin
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/events">
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

export default AddEvents;
