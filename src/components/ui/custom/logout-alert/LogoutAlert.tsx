import React from "react";
import { LogOut } from "lucide-react";
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
} from "../../alert-dialog";
import { toast } from "sonner";
import useDeleteAuth from "../../../../hooks/api/delete/useDeleteAuthMutate";

const LogoutAlert = () => {
  const deleteAuthMutation = useDeleteAuth();

  const handleLogout = async () => {
    try {
      await deleteAuthMutation.mutateAsync();
    } catch (error) {
      toast.error(`An error occurred: ${error}`);
    }
  };
  return (
    <>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to log out of your account. Please confirm your action
            before proceeding. Logging out will terminate your current session.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  );
};

export default LogoutAlert;
