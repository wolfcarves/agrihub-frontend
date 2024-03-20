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
          To enhance clarity and provide clearer options for the user, you could
          revise the message as follows:
        </DialogDescription>

        <DialogDescription>
          "By clicking the button below, you're requesting a password reset. We
          will send a link to your email associated with this account.
          Alternatively, you can choose OTP Verification via phone ."
        </DialogDescription>

        <div className="sm:flex gap-1.5 sm:space-y-0 space-y-1.5">
          {user?.data?.email && (
            <div className="w-full">
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
            </div>
          )}

          {user?.data?.contact_number && (
            <div className="w-full">
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
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsRequestResetPasswordDialog;
