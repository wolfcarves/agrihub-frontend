import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "@components/ui/button";
import useAuth from "@hooks/useAuth";

interface SettingsRequestResetPasswordDialogProps {
  isSendEmailLoading?: boolean;
  isSendOTPLoading?: boolean;
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmitClick: (type: "email" | "phone") => void;
}

const SettingsRequestResetPasswordDialog = ({
  isSendEmailLoading,
  isSendOTPLoading,
  disabled,
  open,
  onOpenChange,
  onSubmitClick
}: SettingsRequestResetPasswordDialogProps) => {
  const user = useAuth();

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

        <div className="sm:flex gap-1.5 sm:space-y-0 space-y-1.5">
          <div className="w-full">
            {true && (
              <Button
                variant="outline"
                className="rounded-full w-full"
                size="lg"
                onClick={() => {
                  onSubmitClick("email");
                }}
                isLoading={isSendEmailLoading}
                disabled={disabled}
              >
                Send via email
              </Button>
            )}
          </div>

          <div className="w-full">
            {user?.data?.contact_number && (
              <Button
                variant="outline"
                className="rounded-full w-full"
                size="lg"
                onClick={() => {
                  onSubmitClick("phone");
                }}
                isLoading={isSendOTPLoading}
                disabled={disabled}
              >
                Send via OTP
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsRequestResetPasswordDialog;
