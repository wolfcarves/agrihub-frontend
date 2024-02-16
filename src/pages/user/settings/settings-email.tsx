import React from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@components/ui/card";

const UserEmailSettings = () => {
  return (
    <div className="w-full m-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Email</h2>
      </div>
      {/* <p className="text-sm text-muted-foreground">
        Add new articles here and complete all required fields for publication.
        Click 'Publish' to make your article public.
      </p> */}
      <hr className="my-4" />
      <div className=" mx-auto">
        <Card>
          {" "}
          <CardHeader>
            <CardTitle>rongodfreyultra@gmail.com - primary</CardTitle>
            <CardDescription>
              This email will be used for account-related notifications and can
              also be used for password resets.
              <p className="mt-4">Receive Notifications</p>
              <div className="ml-4">
                <ul>
                  <li>
                    This email address is the default used for GitHub
                    notifications, i.e., replies to issues, pull requests, etc.
                  </li>
                </ul>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
        <form>
          <div className="flex justify-start gap-4 flex-wrap items-end">
            <div className="w-full max-w-xl">
              <div className="flex gap-4 mt-4">
                <div className="w-full">
                  <Label className="font-bold">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    defaultValue="ronid@gmail.com"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="m-1">
              <Button>Change Email</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEmailSettings;
