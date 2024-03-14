import React from "react";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";

import { ClientDetailsResponse } from "@api/openapi";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";

import { ClientDetails as ClientDetailsType } from "./schema/client-details";
import { UseFormReturn } from "react-hook-form";
import AwsUploader from "@components/user/community/uploader/uploader";

type ClientDetailsProps = {
  details: ClientDetailsResponse | undefined;
  form: UseFormReturn<ClientDetailsType>;
};

const ClientDetails = ({ details, form }: ClientDetailsProps) => {
  // const [isEditing, setIsEditing] = useState(true);

  // const handleEdit = () => {
  //   setIsEditing(true);
  // };

  // const handleSave = () => {
  //   setIsEditing(false);
  // };

  return (
    <div>
      <Card className="p-5">
        {/* 1st */}
        <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
          <div className="w-full max-w-xs">
            <AwsUploader
              onChange={data => form.setValue("logo", data)}
              defaultValue={details?.logo}
              onDelete={() => form.setValue("logo", "")}
            />
          </div>
          <div className="w-full flex-col">
            <div className="mb-4">
              <Label>Client Name</Label>
              <FormField
                control={form.control}
                name="name"
                defaultValue={details?.name}
                // disabled={!isEditing}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-4">
              <Label>Email</Label>
              <FormField
                control={form.control}
                name="email"
                defaultValue={details?.email}
                // disabled={!isEditing}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Label>Contact#</Label>
              <FormField
                control={form.control}
                name="contact_number"
                defaultValue={details?.contact_number}
                // disabled={!isEditing}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="my-4">
          <Label>Address</Label>
          <FormField
            control={form.control}
            name="address"
            defaultValue={details?.address}
            // disabled={!isEditing}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        {/* 3rd */}
        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
          <Card className="my-4 p-4 w-full sm:w-1/2 h-48">
            <Label className="font-bold">Mission</Label>
            <FormField
              control={form.control}
              name="mission"
              // disabled={!isEditing}
              defaultValue={details?.mission}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="mission"
                      className="h-32 mt-1"
                      // disabled={!isEditing}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </Card>
          <Card className="my-4 p-4 w-full sm:w-1/2">
            <Label className="font-bold">Vision</Label>
            <FormField
              control={form.control}
              name="vision"
              // disabled={!isEditing}
              defaultValue={details?.vision}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="mission"
                      className="h-32 mt-1"
                      // disabled={!isEditing}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </Card>
        </div>
        {/* <div className="flex justify-end">
          {isEditing ? (
            <Button onClick={handleSave}>Save</Button>
          ) : (
            <Button onClick={handleEdit} variant="outline">
              Edit
            </Button>
          )}
        </div> */}
      </Card>
    </div>
  );
};

export default ClientDetails;
