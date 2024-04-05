import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../ui/dialog";
import { Button } from "../../../ui/button";
import { Label } from "../../../ui/label";
import { Input } from "@components/ui/custom";
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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "../../../../redux/store";
import { setEmail, setPassword } from "../../../../redux/slices/adminSlice";
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const DialogCreateAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmails] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [cpass, setCpass] = useState<string>("");
  const handleAdminCredits = () => {
    if (!email) {
      toast.error("Email is Required");
      return null;
    }
    if (!isValidEmail(email)) {
      toast.error("Invalid Email");
      return null;
    }
    if (!pass || !cpass) {
      toast.error("Passwords is Required");
      return null;
    }
    if (pass !== cpass) {
      toast.error("Password dont match");
      return null;
    }
    dispatch(setEmail(email));
    dispatch(setPassword(pass));
    navigate(`/admin/record/admins/create`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>create new</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Admin</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label className="text-right">Email</Label>
            <Input
              id="email"
              className="mt-1"
              placeholder="Enter admin email..."
              type="email"
              value={email}
              onChange={e => setEmails(e.target.value)}
            />
          </div>
          <div className="">
            <Label className="text-right">Password</Label>
            <Input
              id="password"
              className="mt-1"
              placeholder="Enter admin password..."
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
          </div>
          <div className="">
            <Label className="text-right">Confirm Password</Label>
            <Input
              id="confirm-password"
              className="mt-1"
              placeholder="Confirm admin password..."
              type="password"
              value={cpass}
              onChange={e => setCpass(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="default">Create Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to create this account as admin?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will send an verification
                  email to the user and will register them as assistant admin of
                  AgriHub.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction onClick={handleAdminCredits}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateAdmin;
