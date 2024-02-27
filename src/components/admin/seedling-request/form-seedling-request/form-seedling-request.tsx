import React, { useEffect } from "react";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";
import {
  AcceptSeedlingRequest,
  SeedlingRequestListItem
} from "../../../../api/openapi";
import { Form } from "../../../ui/form";
import * as zod from "zod";
import usePutRequestSeedlingAccept from "../../../../hooks/api/put/usePutRequestSeedlingAccept";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import useDeleteRequestSeedlingReject from "../../../../hooks/api/delete/useDeleteRequestSeedlingReject";
import Loader from "../../../../icons/Loader";

export const acceptCropReqSchema = zod.object({
  quantity_approve: zod.string({
    required_error: "Quantity is required."
  }),
  delivery_date: zod.string({
    required_error: "Delivery Date is required."
  })
});
interface RequestType {
  data: SeedlingRequestListItem;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FormSeedlingRequest: React.FC<RequestType> = ({
  data: seedlingData,
  setOpen
}) => {
  const form = useForm<AcceptSeedlingRequest>({
    resolver: zodResolver(acceptCropReqSchema),
    mode: "onBlur"
  });

  // validations
  useEffect(() => {
    if (form.formState.errors.quantity_approve) {
      toast.error(form?.formState?.errors?.quantity_approve?.message);
    }
    if (form.formState.errors.delivery_date) {
      toast.error(form?.formState?.errors?.delivery_date?.message);
    }
  }, [form.formState.errors]);

  //reject
  const { mutateAsync: rejectSeedling, isLoading: isSeedlingLoad } =
    useDeleteRequestSeedlingReject();
  const handleDelete = async (id: string) => {
    try {
      await rejectSeedling(id);
      toast.success("Request Rejected!");
      setOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  //accept
  const { mutateAsync: acceptSeedlingMutate, isLoading: isAcceptLoading } =
    usePutRequestSeedlingAccept();

  const handleSubmitForm = async (data: AcceptSeedlingRequest) => {
    const compiledData: AcceptSeedlingRequest = {
      delivery_date: data.delivery_date,
      quantity_approve: Number(data.quantity_approve)
    };

    try {
      await acceptSeedlingMutate({
        id: seedlingData.id || "",
        requestBody: compiledData
      });
      toast.success("Resource Added Successfully!");
      setOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  console.log(form.formState.errors);
  return (
    <div>
      <h6 className="my-2 font-poppins-medium text-gray-600">
        Request Details
      </h6>
      <div className="w-full mb-4">
        <Label>From:</Label>
        <Input
          value={seedlingData.farm_name}
          readOnly
          className=" focus-visible:ring-0"
        />
      </div>

      <div className="flex w-full gap-4 mb-4">
        <div className="w-full">
          <Label>Requested</Label>
          <Input
            value={seedlingData.name}
            readOnly
            className=" focus-visible:ring-0"
          />
        </div>

        <div className="w-1/3">
          <Label> Quantity</Label>
          <Input
            type="number"
            value={seedlingData.quantity_request}
            readOnly
            className=" focus-visible:ring-0"
          />
        </div>
      </div>

      <h6 className="mb-2 font-poppins-medium text-gray-600">Accept Form</h6>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
        >
          <div className="flex w-full gap-4 mb-4">
            <div className="w-full">
              <Label>Delivery Date</Label>
              <Input type="date" {...form.register("delivery_date")} />
            </div>

            <div className="w-1/3">
              <Label>Quantity</Label>
              <Input type="number" {...form.register("quantity_approve")} />
            </div>
          </div>

          {/* <div className="mb-4">
            <Label>Notes</Label>
            <div className="w-full">
              <Textarea />
            </div>
          </div> */}

          <div className="flex justify-between gap-4 mt-4">
            <Button
              onClick={() => setOpen(false)}
              type="button"
              variant="secondary"
            >
              Close
            </Button>
            <div className="flex gap-4">
              <Button
                onClick={() => handleDelete(seedlingData.id || "")}
                type="button"
                variant="destructive"
                disabled={isSeedlingLoad}
              >
                Reject
              </Button>
              <Button
                type="submit"
                variant="default"
                disabled={isAcceptLoading}
              >
                Approve
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <Loader isVisible={isAcceptLoading || isSeedlingLoad} />
    </div>
  );
};

export default FormSeedlingRequest;
