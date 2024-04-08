import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import usePutRequestToolUpdate from "../../../../hooks/api/put/usePutRequestToolUpdate";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { UpdateToolRequestStatus } from "../../../../api/openapi";
import Loader from "../../../../icons/Loader";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../../ui/alert-dialog";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../../ui/form";
interface DialogProps {
  id: string;
}

const formSchema = zod.object({
  client_note: zod
    .string({
      required_error: "Note is required."
    })
    .min(1, "Note must have at least 1 characters")
});
const DialogToolReject: React.FC<DialogProps> = ({ id }) => {
  const navigate = useNavigate();
  const [dialog, setDialog] = useState(false);

  const form = useForm<UpdateToolRequestStatus>({
    resolver: zodResolver(formSchema),
    mode: "onBlur"
  });

  const { mutateAsync, isLoading } = usePutRequestToolUpdate();
  const handleValidation = async () => {
    // console.log("no open");
    const success = await form.trigger();
    if (success) {
      return setDialog(true);
    }
  };

  const handleSubmitForm = async (data: UpdateToolRequestStatus) => {
    const compiledData: UpdateToolRequestStatus = {
      client_note: data.client_note,
      status: UpdateToolRequestStatus.status.REJECTED
    };

    try {
      await mutateAsync({ id: id, requestBody: compiledData });
      toast.success("Feedback Submitted Successfully!");
      navigate("/admin/community/tool-request?tab=rejected");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive">Rejected</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-between gap-4 items-start pt-4">
              <div>
                <DialogTitle>Reject Reqeust?</DialogTitle>
                <DialogDescription>
                  Enter a reason why you want to reject this reqeust.
                </DialogDescription>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                <div className="mb-4">
                  <Label className=" font-poppins-medium">Note</Label>
                  <div className="w-full">
                    <Textarea {...form.register("client_note")} required />
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Cancel
                    </Button>
                  </DialogClose>

                  <AlertDialog open={dialog}>
                    <AlertDialogTrigger>
                      <Button
                        variant="destructive"
                        type="button"
                        onClick={handleValidation}
                      >
                        Reject
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Reject this request?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          place the request in reject status.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setDialog(false)}>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className=" bg-destructive"
                          onClick={form.handleSubmit(handleSubmitForm)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                      <Loader isVisible={isLoading} />
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogToolReject;
