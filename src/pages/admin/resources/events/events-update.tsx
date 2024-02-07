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
import { useParams } from "react-router-dom";

const UpdateEvents = () => {
  const { eventId } = useParams();
  const [speakerCount, setSpeakerCount] = useState(1);
  const [partnersCount, setPartnerCount] = useState(1);

  const breadcrumbItems = [
    { title: "Resource Management", link: "/admin/resources" },
    { title: "Events", link: "/admin/resource/events" },
    {
      title: `View Event ${eventId}`,
      link: `/admin/resource/events/view/${eventId}`
    }
  ];

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
        Add new blogs here, fill the all the needed fields to coninute. Upon
        clicking next button, your blog will be saved as draft and you will be
        redirected to next step
      </p>
      <hr className="my-4" />
      <div className="max-w-[60rem] mx-auto">
        <form>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold tracking-tight">Event Details</h2>
          </div>

          {/* title and type */}
          <div className="flex flex-wrap justify-between gap-4 mb-4">
            <div className="grid w-full max-w-3xl items-center gap-1.5">
              <Label htmlFor="text">Title</Label>
              <Input type="text" id="text" placeholder="Input event title" />
            </div>
            <div className="grid w-full max-w-[11rem] items-center gap-1.5">
              <Label htmlFor="email">Event Type</Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seminar">Seminar</SelectItem>
                  <SelectItem value="Webinar">Webinar</SelectItem>
                  <SelectItem value="Workshop">Workshop</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

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

          {/* when */}
          <div className="flex justify-start gap-4 items-center flex-wrap">
            <div className="grid w-full max-w-[30%] items-center gap-1.5">
              <Label htmlFor="text">Start Date</Label>
              <DatePickerWithPresets />
            </div>
            <div className="grid w-full sm:max-w-[15%] max-w-full items-center gap-1.5">
              <Label htmlFor="time1">Start Time</Label>
              <Input
                type="time"
                id="time1"
                placeholder="Input event start time"
              />
            </div>
            <div className="grid w-full max-w-[30%] items-center gap-1.5">
              <Label htmlFor="text">End Date</Label>
              <DatePickerWithPresets />
            </div>
            <div className="grid w-full sm:max-w-[15%] max-w-full items-center gap-1.5">
              <Label htmlFor="time2">End Time</Label>
              <Input
                type="time"
                id="time2"
                placeholder="Input event end time"
              />
            </div>
          </div>

          {/* where */}
          <div className="grid w-full items-center gap-1.5 mt-4">
            <Label htmlFor="text">Where</Label>
            <Input
              type="text"
              id="text"
              placeholder="Enter event address here..."
            />
          </div>

          {/* Event desc */}
          <div className="mt-4">
            <Label htmlFor="text">About</Label>
            <RichTextEditor height={300} />
          </div>

          {/* participation guide */}
          <div className="mt-4">
            <Label htmlFor="text">How to participate guide:</Label>
            <RichTextEditor height={200} />
          </div>

          {/* thumbnail of event */}
          <div className="mt-4">
            <Label>Event Thumbnail</Label>
            <CoverImageUpload />
          </div>
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
            <Link to="/admin/resource/events">
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
                  <AlertDialogTitle>Delete event?</AlertDialogTitle>
                  <AlertDialogDescription>
                    When you delete events it will go to archive and you can
                    recover it from there.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <Link to="/admin/resource/event">
                    <AlertDialogAction className="bg-red-600 hover:bg-red-500 hover:text-black">
                      Delete
                    </AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Link to="/admin/resource/events-draft">
              <Button variant="outline" className="hover:border-green-500">
                Update Draft
              </Button>
            </Link>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Post Event</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to post this event?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This event can be seen publicly by the users when posted,
                    make sure to review everything before posting.
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

export default UpdateEvents;
