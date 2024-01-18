import React from "react";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import Dropzone from "../../dropzone/dropzone";
import { Button } from "../../../../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerCommunitySchema } from "./schema";
import { Form, FormField } from "../../../../ui/form";
import Capture from "../../capture/capture";
import ValidId from "./Id.json";

const CommunityRegisterForm = () => {
  const form = useForm<any>({
    resolver: zodResolver(registerCommunitySchema),
    mode: "onBlur"
  });

  const handleSubmitForm = async (data: any) => {
    const compiledData: any = {
      name: data.name,
      size: data.size,
      location: data.location,
      district: data.district,
      idType: data.idType,
      id: data.id,
      selfie: data.selfie,
      proof: data.proof
    };

    console.log("Submitted Data:", compiledData);

    // try {
    //   await questionAskMutate(compiledData);
    //   toast.success("Question successfully posted!");
    // } catch (e: any) {
    //   toast.error(e.body.message);
    // }
  };

  return (
    <div className="w-full ">
      <h2 className="font-semibold mb-4">Register Community</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className=" grid grid-cols-12 gap-4"
        >
          <div className=" col-span-8">
            <Label>Farm Name</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter farm name..."
              {...form.register("name")}
            />
          </div>
          <div className=" col-span-4">
            <Label>Farm Size (&#x33A1;)</Label>
            <Input
              type="number"
              className="h-10"
              placeholder="Enter farm size..."
              {...form.register("size")}
            />
          </div>
          <div className=" col-span-8">
            <Label>Location</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter Location..."
              {...form.register("location")}
            />
          </div>
          <div className=" col-span-4">
            <Label>District</Label>
            <Input
              type="number"
              className="h-10"
              placeholder="Enter farm size..."
              {...form.register("district")}
            />
          </div>

          <div className="col-span-12">
            <Label>Select valid ID type</Label>
            <FormField
              control={form.control}
              name="idType"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select valid id type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {ValidId.Id.map((id, i) => (
                      <SelectItem key={i} value={id}>
                        {id}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="col-span-12">
            <Label>Upload ID</Label>
            <FormField
              control={form.control}
              name="id"
              render={() => (
                <Dropzone onChange={value => form.setValue("id", value)} />
              )}
            />
          </div>

          <div className="col-span-12">
            <Label>Capture a photo of yourself</Label>
            <FormField
              control={form.control}
              name="id"
              render={() => (
                <Capture onChange={value => form.setValue("selfie", value)} />
              )}
            />
          </div>
          <div className="col-span-12">
            <Label>Proof of farm ownership</Label>
            <FormField
              control={form.control}
              name="proof"
              render={() => (
                <Dropzone onChange={value => form.setValue("proof", value)} />
              )}
            />
          </div>
          <div className="col-span-12">
            <Button type="submit">Apply</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CommunityRegisterForm;
