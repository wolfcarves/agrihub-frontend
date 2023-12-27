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
import toast from "react-hot-toast";
import useDeleteAuth from "../../../../hooks/api/delete/useDeleteAuth";

const LogoutAlert = () => {
  const deleteAuthMutation = useDeleteAuth();

  const handleLogout = async () => {
    try {
      // Trigger the mutation when the logout button is clicked
      await deleteAuthMutation.mutateAsync();
    } catch (error) {
      // Display error toast
      toast.error(`An error occurred: ${error}`);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="relative flex cursor-default select-none w-full items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </button>
      </AlertDialogTrigger>
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
    </AlertDialog>
  );
};

export default LogoutAlert;
