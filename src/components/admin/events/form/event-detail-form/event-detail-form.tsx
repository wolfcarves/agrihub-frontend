import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { DatePickerWithPresets } from "../../../../ui/date-preset-picker";
import RichTextEditor from "../../../../ui/custom/rich-text-editor/RichTextEditor";
import CoverImageUpload from "../../../../ui/custom/image/cover-image-input";

const EventDetailForm = () => {
  return (
    <>
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

      {/* when */}
      <div className="flex justify-start gap-4 items-center flex-wrap">
        <div className="grid w-full max-w-[30%] items-center gap-1.5">
          <Label htmlFor="text">Start Date</Label>
          <DatePickerWithPresets />
        </div>
        <div className="grid w-full sm:max-w-[15%] max-w-full items-center gap-1.5">
          <Label htmlFor="time1">Start Time</Label>
          <Input type="time" id="time1" placeholder="Input event start time" />
        </div>
        <div className="grid w-full max-w-[30%] items-center gap-1.5">
          <Label htmlFor="text">End Date</Label>
          <DatePickerWithPresets />
        </div>
        <div className="grid w-full sm:max-w-[15%] max-w-full items-center gap-1.5">
          <Label htmlFor="time2">End Time</Label>
          <Input type="time" id="time2" placeholder="Input event end time" />
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
    </>
  );
};

export default EventDetailForm;
