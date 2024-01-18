import React, { useRef, useState } from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select";

const ValidId = [
  "PhilID",
  "Postal ID",
  "Passport",
  "Social Security System ID",
  "Professional Regulation Commission ID",
  "Home Development Mutual Fund ID",
  "Driver's License",
  "Unified Multi-Purpose ID"
];

const CommunityRegister = () => {
  return (
    <OutletContainer>
      <div className="w-full ">
        <h2 className="font-semibold mb-4">Register Community</h2>
        <form className=" grid grid-cols-12 gap-4">
          <div className=" col-span-8">
            <Label>Farm Name</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter farm name..."
            />
          </div>
          <div className=" col-span-4">
            <Label>Farm Size (&#x33A1;)</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter farm size..."
            />
          </div>
          <div className=" col-span-12">
            <Label>Location</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter Location..."
            />
          </div>

          <div className="col-span-12">
            <Label>Select valid ID type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select valid id type..." />
              </SelectTrigger>
              <SelectContent>
                {ValidId.map((id, i) => (
                  <SelectItem key={i} value={id}>
                    {id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12">
            <Label>Upload ID</Label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG, or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="col-span-12">
            <Label>Capture a photo of yourself</Label>
            <Input
              type="file"
              className="h-10"
              placeholder=""
              accept="image/*"
              capture="environment"
              id="cameraInput"
              name="cameraInput"
            />
          </div>
          <div className="col-span-12">
            <Label>Proof of farm ownership</Label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG, or GIF (MAX. 800x400px)
                  </p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          <div className="col-span-12">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </OutletContainer>
  );
};

export default CommunityRegister;
