import React from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

const UserAccountSettings = () => {
  return (
    <div className="w-full m-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Account Settings</h2>
      </div>
      {/* <p className="text-sm text-muted-foreground">
        Add new articles here and complete all required fields for publication.
        Click 'Publish' to make your article public.
      </p> */}
      <hr className="my-4" />
      <div className=" mx-auto">
        <form>
          {/* first line */}
          <div className="flex">
            <div className="w-full">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Label className="font-bold">Role</Label>
                  <Input
                    type="text"
                    id="role"
                    defaultValue="Farmer"
                    className="mt-1"
                    disabled
                  />
                </div>
                <div className="w-1/2">
                  <Label className="font-bold">User ID</Label>
                  <Input
                    type="text"
                    id="userid"
                    defaultValue="09110620050"
                    className="mt-1"
                    disabled
                  />
                </div>
              </div>

              {/* 3rd line */}
              <div className="mt-4">
                <Label className="font-bold">Address</Label>
                <br />
                <div className="mb-1" />
                <Input
                  type="text"
                  id="address"
                  defaultValue="Mayang Pula Street, Barangay Santa Monica Novaliches Quezon City"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button>Update Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAccountSettings;
