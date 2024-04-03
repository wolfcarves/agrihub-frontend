import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@components/ui/drawer";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";

import { ComboboxPopoverStatus } from "./components/combobox-status";
import { PiArrowFatUpThin, PiArrowFatDownThin } from "react-icons/pi";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { useState } from "react";
import { ReportedQuestion } from "../../../../api/openapi";
import { format } from "date-fns";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
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
} from "../../../../components/ui/alert-dialog";
import useUserWarnUsersMutation from "../../../../hooks/api/post/useUserWarnUsersMutation";
import useUserBanUsersMutation from "../../../../hooks/api/post/useUserBanUsersMutation";
import { toast } from "sonner";
import Loader from "../../../../icons/Loader";
import { Input } from "../../../../components/ui/input";
import useGetViewQuestion from "../../../../hooks/api/get/useGetViewQuestion";
export const columns: ColumnDef<ReportedQuestion>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) =>
      format(new Date(row.original.createdat || ""), "MMM dd, yyyy")
  },

  {
    accessorKey: "reason",
    header: "Reason",
    cell: ({ row }) => <div>{row.getValue("reason")}</div>
  },

  {
    header: "Reported By",
    cell: ({ row }) => (
      <div>{`${row.original.firstname} ${row.original.lastname}`}</div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const question = row.original;

      const navigate = useNavigate();
      const handleViewQuestionPage = () => {
        navigate(
          `/forum/question/${question.reported_username}/${question.forumid}`
        );
      };

      const { data: viewQuestion } = useGetViewQuestion(question.forumid ?? "");
      const [isEditing, setIsEditing] = useState(false);

      const handleEdit = () => {
        setIsEditing(true);
      };

      const handleSave = () => {
        setIsEditing(false);
      };

      const { mutateAsync: banUserMutation, isLoading: banLoading } =
        useUserBanUsersMutation();
      const handleBan = async () => {
        await banUserMutation(question.reported_userid || "");
        toast.success("User Banned Successfully!");
      };

      const { mutateAsync: warnUserMutation, isLoading: warnLoading } =
        useUserWarnUsersMutation();
      const handleWarn = async () => {
        try {
          await warnUserMutation(question.userid || "");
          toast.success("User Warned Successfully!");
        } catch (error: any) {
          toast.error(error.message);
        }
      };

      if (banLoading || warnLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <Drawer>
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
                onClick={() => navigator.clipboard.writeText(question.id || "")}
              >
                Copy question ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DrawerTrigger className=" w-full text-start">
                  View Report
                </DrawerTrigger>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleViewQuestionPage}>
                View question in page
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* drawer */}
          <DrawerContent>
            <div className="flex justify-center py-2">
              <div className="max-w-[50rem] w-full">
                <Tabs defaultValue="report" className="">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="report">Report</TabsTrigger>
                    <TabsTrigger value="question">Question</TabsTrigger>
                  </TabsList>
                  {/* report tab*/}
                  <TabsContent value="report">
                    <Card>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="flex items-center gap-4">
                            Report
                          </CardTitle>
                        </div>
                        <CardDescription>
                          on{" "}
                          {format(
                            new Date(question.createdat || ""),
                            "MMM dd, yyyy"
                          )}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-2">
                        <div className="mb-4">
                          <Label>Reported User</Label>
                          <Input
                            disabled
                            defaultValue={question.reported_firstname}
                          />
                        </div>
                        <div className="mb-4">
                          <Label>Reason</Label>
                          <Textarea
                            disabled
                            defaultValue="dito yung reason field"
                          />
                        </div>
                        {/* <Label>Note</Label>
                        <Textarea disabled={!isEditing} /> */}
                      </CardContent>

                      {/* report buttons */}
                      <CardFooter>
                        <div className="flex justify-between gap-4 items-center">
                          <DrawerClose>
                            <Button variant="ghost">Back</Button>
                          </DrawerClose>
                          <AlertDialog>
                            <AlertDialogTrigger>
                              <Button variant="destructive">Ban</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Ban username?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action will block the user account from
                                  doing any activity within the website.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleBan}>
                                  Continue
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                          {/* <AlertDialog>
                            <AlertDialogTrigger>
                              <Button className="bg-yellow-500 hover:bg-yellow-500/80">
                                Warning
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Send Warning to user
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action will send a notification to user
                                  about the action he've done.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleWarn}>
                                  Send
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog> */}
                        </div>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  {/* question */}
                  <TabsContent value="question">
                    <Card>
                      <DrawerHeader>
                        <div className="flex justify-between items-center">
                          <DrawerTitle>
                            {viewQuestion?.question?.id}
                          </DrawerTitle>
                          <ComboboxPopoverStatus />
                        </div>
                      </DrawerHeader>

                      <DrawerHeader>
                        <div className="flex justify-between items-center">
                          {/* ito yung title ng question */}
                          <DrawerTitle>
                            {viewQuestion?.question?.title}
                          </DrawerTitle>
                          <div className="flex gap-3 h-8 border rounded-lg items-center">
                            {/* vote count here */}
                            <PiArrowFatUpThin />
                            {viewQuestion?.question?.vote_count}
                            <PiArrowFatDownThin />
                          </div>
                        </div>
                        {/* yung question mismo */}
                        <DrawerDescription>
                          {parse(viewQuestion?.question?.question || "")}
                        </DrawerDescription>
                      </DrawerHeader>

                      {/* ito yung tags */}
                      <div className="flex wrap justify-start gap-4 mx-4">
                        {viewQuestion?.question?.tags?.map((tag, i) => (
                          <p
                            key={i}
                            className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 py-1"
                          >
                            {tag.tag}
                          </p>
                        ))}
                      </div>

                      <DrawerFooter>
                        {/* redirect sa view nung question sa page */}

                        <div className="flex justify-between gap-4">
                          <DrawerClose className="w-full">
                            <Button variant="outline" className="w-full">
                              Back
                            </Button>
                          </DrawerClose>
                          <Button onClick={handleViewQuestionPage}>
                            See question in page
                          </Button>
                        </div>
                      </DrawerFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      );
    }
  }
];
