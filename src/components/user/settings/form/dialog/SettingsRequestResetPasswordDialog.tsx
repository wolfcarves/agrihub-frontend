import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "@components/ui/button";

interface SettingsRequestResetPasswordDialogProps {
  isLoading?: boolean;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmitClick?: () => void;
}

const SettingsRequestResetPasswordDialog = ({
  isLoading,
  disabled,
  open,
  onOpenChange,
  onSubmitClick
}: SettingsRequestResetPasswordDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <h2 className="font-merri-black">Change password</h2>
        </DialogHeader>

        <DialogDescription>
          By clicking the button below, you're requesting a password reset. We
          will be sending a link to your email that is bound to this account.
        </DialogDescription>

        <Button
          className="w-full rounded-full mt-5"
          size="lg"
          onClick={onSubmitClick}
          isLoading={isLoading}
          disabled={disabled}
        >
          Send request
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsRequestResetPasswordDialog;
