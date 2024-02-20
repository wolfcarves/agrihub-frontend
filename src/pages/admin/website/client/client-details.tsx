import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import Capture from "@components/user/community/capture/capture";
const ClientDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };
  return (
    <div>
      <Card className="p-5">
        {/* 1st */}
        <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
          <div className="w-full max-w-xs">
            <Capture />
          </div>
          <div className="w-full flex-col">
            <div className="mb-4">
              <Label>Client Name</Label>
              <Input
                type="text"
                id="name"
                defaultValue="Center for Urban Agriculture and Innovation"
                disabled={!isEditing}
              />
            </div>

            <div className="mb-4">
              <Label>Email</Label>
              <Input
                type="email"
                id="email"
                defaultValue="center.urban.agriculture@qcu.edu.ph"
                disabled={!isEditing}
              />
            </div>

            <div>
              <Label>Contact#</Label>
              <Input
                type="number"
                id="contact"
                defaultValue="09082559914"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="my-4">
          <Label>Address</Label>
          <Input
            type="text"
            id="address"
            defaultValue="2nd Floor, Room 212 Tech-Voc Building, 673 Quirino Hwy, Novaliches, Quezon City, Metro Manila"
            disabled={!isEditing}
          />
        </div>

        {/* 3rd */}
        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
          <Card className="my-4 p-4 w-full sm:w-1/2 h-48">
            <Label className="font-bold">Mission</Label>
            <Textarea
              id="mission"
              defaultValue="To empower urban farmers through education and collaboration, fostering sustainable agricultural practices and environmental stewardship for a resilient and thriving community."
              className="h-32 mt-1"
              disabled={!isEditing}
            />
          </Card>
          <Card className="my-4 p-4 w-full sm:w-1/2">
            <Label className="font-bold">Vision</Label>
            <Textarea
              id="vision"
              defaultValue="To empower urban farmers through education and collaboration, fostering sustainable agricultural practices and environmental stewardship for a resilient and thriving community."
              className="h-32 mt-1"
              disabled={!isEditing}
            />
          </Card>
        </div>
        <div className="flex justify-end">
          {isEditing ? (
            <Button onClick={handleSave}>Save</Button>
          ) : (
            <Button onClick={handleEdit} variant="outline">
              Edit
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ClientDetails;
