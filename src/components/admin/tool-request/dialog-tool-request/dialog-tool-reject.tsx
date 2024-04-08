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
interface DialogProps {
  id: string;
}
const DialogToolReject: React.FC<DialogProps> = ({ id }) => {
  const navigate = useNavigate();
  const [note, setNote] = useState<string>("");

  const { mutateAsync, isLoading } = usePutRequestToolUpdate();

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) {
      toast.error("Note is required");
      return;
    }
    const compiledData: UpdateToolRequestStatus = {
      client_note: note,
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

            <div className="mb-4">
              <Label>Note</Label>
              <div className="w-full">
                <Textarea onChange={e => setNote(e.target.value)} />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button variant="secondary">Cancel</Button>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="destructive">Reject</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Reject this request?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently place
                      the request in reject status.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className=" bg-destructive"
                      onClick={e => handleSubmitForm(e)}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Loader isVisible={isLoading} />
    </div>
  );
};

export default DialogToolReject;
