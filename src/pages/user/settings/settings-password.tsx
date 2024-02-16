import React from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import Capture from "@components/user/community/capture/capture";

const UserPasswordSettings = () => {
  return (
    <div className="w-full m-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Change Password</h2>
      </div>
      {/* <p className="text-sm text-muted-foreground">
        Add new articles here and complete all required fields for publication.
        Click 'Publish' to make your article public.
      </p> */}
      <hr className="my-4" />
      <div className=" mx-auto">
        <form>
          <div className="flex w-full">
            <div className="flex-col md:w-1/2 w-full sm:w-2/3  gap-4 mt-4">
              <div>
                <Label className="font-bold">Old Password</Label>
                <Input type="password" id="oldpassword" className="mt-1" />
              </div>
              <div className="mt-4">
                <Label className="font-bold">New Password</Label>
                <Input type="password" id="newpassword" className="mt-1" />
              </div>
              <div className="mt-4">
                <Label className="font-bold">Confirm Password</Label>
                <Input type="password" id="confirmpassword" className="mt-1" />
              </div>
              <p className="text-xs">
                Make sure it's at least 15 characters OR at least 8 characters
                including a number and a lowercase letter.{" "}
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-4">
            <Button>Update Password</Button>
            <Button variant="ghost">I forgot my password</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPasswordSettings;
