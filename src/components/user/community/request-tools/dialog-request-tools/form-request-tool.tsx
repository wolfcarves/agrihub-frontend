import React, { useEffect, useState } from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import { NewToolRequest } from "../../../../../api/openapi";
import { Textarea } from "../../../../ui/textarea";
import useRequestToolsCreate from "../../../../../hooks/api/post/useRequestToolsCreate";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import * as zod from "zod";
import { DialogFooter } from "../../../../ui/dialog";
import { Button } from "../../../../ui/button";
const addRequestSchema = zod.object({
  tool_requested: zod
    .string({
      required_error: "Tools is required."
    })
    .min(3, "Tool must be atleast 3 characters"),

  quantity_requested: zod.coerce
    .number({
      required_error: "Please provide a requested quantity"
    })
    .min(0, "Requested quantity must be at least 0")
    .max(1000, "Requested quantity cannot exceed 1000"),
  requester_note: zod
    .string({
      required_error: "Note is required."
    })
    .min(3, "Note must be atleast 3 characters"),
  contact: zod
    .string({
      required_error: "Contact is required."
    })
    .min(3, "Contact must be atleast 3 characters")
});

const ToolRequest = [
  "Hand Trowel (Dulos)",
  "Pruning Shears (Gunting na Panghalaman)",
  "Watering Can (Pandilig)",
  "Hose",
  "Small Shovel (Maliit na Pala)",
  "Large Shovel (Malaking Pala)",
  "Garden Fork (Tinidor na Panghardin)",
  "Planting Containers (Lagayan ng Tanim)",
  "Seedling Tray (Lagayan ng Punla)",
  "Pots (Paso)",
  "Garden Knife (Kutsilyong Panghardin)",
  "Rake (Kalaykay)",
  "Garden Ties (Tali)",
  "Sickle (Karit)",
  "Garden Gloves (Guwantes)",
  "Wheel Barrow (Kartilya)"
];

interface dialogProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}
const FormRequestTool: React.FC<dialogProps> = ({ setIsOpen }) => {
  const [isOther, setIsOther] = useState<boolean>(false);
  const [otherVal, setOtherVal] = useState<string>("");

  const form = useForm<NewToolRequest>({
    resolver: zodResolver(addRequestSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.watch("tool_requested") === "Other") {
      setIsOther(true);
    } else {
      setIsOther(false);
    }
  }, [form.watch("tool_requested")]);

  useEffect(() => {
    if (form.formState.errors.tool_requested) {
      toast.error(form?.formState?.errors?.tool_requested?.message);
    }
    if (form.formState.errors.quantity_requested) {
      toast.error(form?.formState?.errors?.quantity_requested?.message);
    }
    if (form.formState.errors.requester_note) {
      toast.error(form?.formState?.errors?.requester_note?.message);
    }
    if (form.formState.errors.contact) {
      toast.error(form?.formState?.errors?.contact?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: addRequestMutate, isLoading: addRequestLoading } =
    useRequestToolsCreate();

  const handleSubmitForm = async (data: NewToolRequest) => {
    if (isOther && otherVal === "") {
      toast.error("Tool is required");
    }
    const compiledData: NewToolRequest = {
      tool_requested: isOther ? otherVal : data.tool_requested,
      quantity_requested: String(data.quantity_requested),
      requester_note: data.requester_note,
      contact: data.contact
    };

    try {
      await addRequestMutate({ requestBody: compiledData });
      toast.success("Tool Requested Successfully!");
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className="grid gap-4"
        >
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Tool Requested</Label>
            <FormField
              control={form.control}
              name="tool_requested"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Tool" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="max-h-[40vh] overflow-y-auto custom-scroll">
                      {ToolRequest.map((tool, i) => (
                        <SelectItem key={i} value={tool}>
                          {tool}
                        </SelectItem>
                      ))}
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          {isOther && (
            <div className="flex flex-col gap-3">
              <Label className=" font-poppins-medium">Other Tool Name</Label>
              <Input
                onChange={e => setOtherVal(e.target.value)}
                value={otherVal}
                type="text"
                placeholder="Input Other Tool"
                className="col-span-3"
                min={1}
                max={10000}
                required
              />
            </div>
          )}
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">
              Requested Tool Quantity
            </Label>
            <Input
              {...form.register("quantity_requested")}
              type="number"
              placeholder="Input quantity"
              className="col-span-3"
              min={1}
              max={10000}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Notes</Label>
            <Textarea
              {...form.register("requester_note")}
              placeholder="Input notes"
              className="col-span-3"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label className=" font-poppins-medium">Contact</Label>
            <Input
              {...form.register("contact")}
              type="text"
              placeholder="Input contact"
              className="col-span-3"
              min={1}
              max={10000}
              required
            />
          </div>

          <DialogFooter className="flex flex-row gap-2 justify-end">
            <Button
              variant={"secondary"}
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
            <Button type="submit" disabled={addRequestLoading}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </Form>
      <Loader isVisible={addRequestLoading} />
    </>
  );
};

export default FormRequestTool;
