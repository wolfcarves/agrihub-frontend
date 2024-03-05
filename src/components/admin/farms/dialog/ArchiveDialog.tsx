import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useDeleteArchiveProblem from "@hooks/api/delete/useDeleteArchiveProblem";
import usePutUnarchiveProblem from "@hooks/api/put/usePutUnarchiveProblem";

export function ArchiveDialog({
  open,
  onOpenChange,
  problemId
}: {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  problemId: string;
}) {
  const { mutateAsync: archiveProblemMutation } = useDeleteArchiveProblem();
  const navigate = useNavigate();
  return (
    <div className="flex justify-end my-8 gap-4">
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to archive this?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Please note that this farm problem will be archived.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            {/* <Link to="/admin/farm/problems"> */}
            {/* <AlertDialogAction> */}
            <Button
              type="button"
              onClick={async () => {
                try {
                  const data = await archiveProblemMutation(problemId);
                  // TODO : add navigation in archived list later
                  navigate("/admin/farm/problems/archived");
                  toast.success(data.message);
                } catch (error: any) {
                  toast.error(error.body.message);
                }
                onOpenChange(false);
              }}
            >
              Confirm
            </Button>
            {/* </AlertDialogAction> */}
            {/* </Link> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export function UnarchiveDialog({
  open,
  onOpenChange,
  problemId
}: {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  problemId: string;
}) {
  const { mutateAsync: archiveProblemMutation } = usePutUnarchiveProblem();
  const navigate = useNavigate();
  return (
    <div className="flex justify-end my-8 gap-4">
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to restore this?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Please note that this farm problem will be restored.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            {/* <Link to="/admin/farm/problems"> */}
            {/* <AlertDialogAction> */}
            <Button
              type="button"
              onClick={async () => {
                try {
                  const data = await archiveProblemMutation(problemId);
                  // TODO : add navigation in archived list later
                  navigate("/admin/farm/problems");
                  toast.success(data.message);
                } catch (error: any) {
                  toast.error(error.body.message);
                }
                onOpenChange(false);
              }}
            >
              Confirm
            </Button>
            {/* </AlertDialogAction> */}
            {/* </Link> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
