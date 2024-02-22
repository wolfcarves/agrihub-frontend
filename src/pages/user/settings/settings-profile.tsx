import React from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import Capture from "@components/user/community/capture/capture";
import { Textarea } from "@components/ui/textarea";

const UserProfileSettings = () => {
  return (
    <div className="w-full m-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Public Profile</h2>
      </div>
      <hr className="my-4" />
      <div className=" mx-auto">
        <form>
          {/* first line */}
          <div className="flex flex-wrap">
            <div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Label className="font-bold">First Name</Label>
                  <Input
                    type="text"
                    id="firstname"
                    defaultValue="Ron"
                    className="mt-1"
                  />
                </div>
                <div className="w-1/2">
                  <Label className="font-bold">Last Name</Label>
                  <Input
                    type="text"
                    id="title"
                    defaultValue="Ultra"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* 2nd line */}
              <div>
                <div className="flex gap-4 mt-4">
                  <div className="w-full">
                    <Label className="font-bold">Username</Label>
                    <Input
                      type="text"
                      id="firstname"
                      defaultValue="ronid"
                      className="mt-1"
                    />
                  </div>
                </div>
                <p className="text-xs">
                  Your name may appear around AgriHub where you contribute or
                  are mentioned. You can remove it at any time.
                </p>
              </div>

              {/* 3rd line */}
              <div className="mt-4">
                <Label className="font-bold">Date of Birth</Label>
                <br />
                <div className="mb-1" />
                <Input type="date" id="birthdate" />
              </div>
              {/* line 4 */}
              <div className="mt-4">
                <Label className="font-bold">Bio</Label>
                <Textarea className="mt-1" />
              </div>
            </div>
            <div className="mx-auto w-72">
              <Capture />
            </div>
          </div>

          <div className="mt-4">
            <Button>Update Profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileSettings;
