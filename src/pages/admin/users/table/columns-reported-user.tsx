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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";

export const data: ReportedUser[] = [
  {
    id: "ru1",
    createdAt: "2023-01-15",
    reported: "John Doe",
    reporter: "Jane Smith",
    reason: "Spamming",
    status: "pending",
    severity: "low"
  },
  {
    id: "ru2",
    createdAt: "2023-02-20",
    reported: "Alice Johnson",
    reporter: "Bob Brown",
    reason: "Inappropriate behavior",
    status: "resolved",
    severity: "medium"
  },
  {
    id: "ru3",
    createdAt: "2023-03-10",
    reported: "Michael Lee",
    reporter: "Sarah Miller",
    reason: "Violent threats",
    status: "pending",
    severity: "high"
  }
];

export type ReportedUser = {
  id: string;
  createdAt: string;
  reported: string;
  reporter: string;
  reason: string;
  status: "pending" | "resolved";
  severity: "low" | "medium" | "high";
};

export const columns: ColumnDef<ReportedUser>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "reported",
    header: "Reported",
    cell: ({ row }) => <div>{row.getValue("reported")}</div>
  },
  {
    accessorKey: "reporter",
    header: "Reporter",
    cell: ({ row }) => <div>{row.getValue("reporter")}</div>
  },
  {
    accessorKey: "reason",
    header: "Reason",
    cell: ({ row }) => <div>{row.getValue("reason")}</div>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    accessorKey: "severity",
    header: "Severity",
    cell: ({ row }) => <div>{row.getValue("severity")}</div>
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
              Copy report ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  View Report Data
                </div>
              </DialogTrigger>

              {/* modal */}
              <DialogContent className="">
                <DialogHeader>
                  <div className="flex justify-between items-center">
                    <DialogTitle>ReportID</DialogTitle>
                    <div>
                      <Badge className="bg-red-500">High</Badge> |{" "}
                      <Badge>Reviewed</Badge>
                    </div>
                  </div>
                </DialogHeader>

                <Tabs defaultValue="report">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="report">Report</TabsTrigger>
                    <TabsTrigger value="user">User</TabsTrigger>
                  </TabsList>
                  {/* report tab */}
                  <TabsContent value="report">
                    <div>
                      <div className="flex gap-4">
                        <Input
                          type="text"
                          defaultValue="issued warning"
                          disabled
                        />
                        <Input type="date" />
                      </div>
                      <div className="mt-2">
                        <Label>Reason</Label>
                        <Textarea />
                      </div>
                      <div className="mt-2">
                        <Label>Evidence</Label>
                        <RichTextEditor />
                      </div>
                      <div className="mt-2">
                        <Label>Notes</Label>
                        <Textarea />
                      </div>
                    </div>
                  </TabsContent>
                  {/* user tab */}
                  <TabsContent value="user">
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
                          @username{" "}
                          <span className="text-green-600">| role</span>
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
                          <b>Bio:</b> ang oa, super oa, grabe ang oa, jusko
                          apaka oa, luh ang oa, ew ang oa, oa, oa niya oh, ang
                          oa mo po 🫵🫵🫵🫵
                        </DialogDescription>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

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
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button variant="outline">Warning</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Send Warning to user
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action will send a notification to user about
                            the action he've done.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Send</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Button>Notes</Button>
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
