import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";

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
} from "@components/ui/alert-dialog";
import { Badge } from "@components/ui/badge";

export const data: User[] = [
  {
    id: "u1",
    createdAt: "2023-01-15",
    username: "johndoe",
    fullName: "John Doe",
    verificationLevel: "Verified",
    role: "Member"
  },
  {
    id: "u2",
    createdAt: "2023-02-20",
    username: "janedoe",
    fullName: "Jane Doe",
    verificationLevel: "Not Verified",
    role: "Member"
  },
  {
    id: "u3",
    createdAt: "2023-03-10",
    username: "alice",
    fullName: "Alice Johnson",
    verificationLevel: "Verified",
    role: "Admin"
  },
  {
    id: "u4",
    createdAt: "2023-04-05",
    username: "bob",
    fullName: "Bob Brown",
    verificationLevel: "Not Verified",
    role: "Moderator"
  }
];

export type User = {
  id: string;
  createdAt: string;
  username: string;
  fullName: string;
  verificationLevel: "Verified" | "Not Verified";
  role: "Member" | "Admin" | "Moderator";
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "username",
    header: "Username",
    cell: ({ row }) => <div>{row.getValue("username")}</div>
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => <div>{row.getValue("fullName")}</div>
  },
  {
    accessorKey: "verificationLevel",
    header: "Verification Level",
    cell: ({ row }) => <div>{row.getValue("verificationLevel")}</div>
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div>{row.getValue("role")}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  View User Data
                </div>
              </DialogTrigger>

              {/* modal */}
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>UserID</DialogTitle>
                </DialogHeader>

                <div>
                  <div className="w-24 h-24 mx-auto">
                    <img
                      src="https://camo.githubusercontent.com/f498399e1d6dc0b8d4cb11e99ddf64a9cebb4d5a497bdb2b7837061a648403f8/68747470733a2f2f6170692e6461696c792e6465762f64657663617264732f36643465336434326431303734306434393733376437636432373837656639392e706e673f723d6f6f6a"
                      className="w-full h-full rounded-full"
                      alt=""
                    />
                  </div>

                  <div className="mt-2">
                    <h4 className="text-gray-700 font-semibold sm:text-lg justify-center items-center flex gap-2">
                      Full Name <Badge>Verified/Banned</Badge>
                    </h4>
                    <p className="text-center">
                      @username <span className="text-green-600">| role</span>
                    </p>
                  </div>

                  <div className="flex justify-between gap-2 flex-wrap my-2">
                    <DialogDescription>
                      <b>email:</b> rongodfreyultra@gmail.com
                    </DialogDescription>
                    <DialogDescription>
                      <b>birthday:</b> June 20, 2002
                    </DialogDescription>
                  </div>
                  <div className="flex justify-between gap-2 mb-2">
                    <DialogDescription>
                      <b>address:</b> Santa Monica, Novaliches Queaon City
                    </DialogDescription>
                  </div>
                  <div className="flex justify-between gap-2 mb-2">
                    <DialogDescription>
                      <b>District:</b> 5
                    </DialogDescription>
                    <DialogDescription>
                      <b>zip:</b> 1117
                    </DialogDescription>
                    <DialogDescription>
                      <b>Municipality:</b> Metro Manila
                    </DialogDescription>
                  </div>
                  <div className="flex justify-between gap-2 mb-2">
                    <DialogDescription>
                      <b>Bio:</b> ang oa, super oa, grabe ang oa, jusko apaka
                      oa, luh ang oa, ew ang oa, oa, oa niya oh, ang oa mo po
                      🫵🫵🫵🫵
                    </DialogDescription>
                  </div>
                </div>

                {/* dialog buttons */}
                <DialogFooter>
                  <div className="flex justify-end items-center gap-2">
                    <Button variant="ghost">Back</Button>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button variant="destructive">Ban</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Ban username?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action will block the user account from doing
                            any activity within the website.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Button type="submit">PROFILE</Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
