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

export const data: ReportedQuestion[] = [
  {
    id: "i1",
    createdAt: "2023-01-15",
    updatedAt: "2023-01-20",
    question: "How to prevent crop diseases in tomato plants?",
    reason: "Increased humidity in greenhouse",
    status: "resolved",
    severity: "medium"
  },
  {
    id: "i2",
    createdAt: "2023-02-20",
    updatedAt: "2023-02-25",
    question: "What are the symptoms of nutrient deficiency in maize?",
    reason: "Poor soil fertility",
    status: "unresolved",
    severity: "high"
  },
  {
    id: "i3",
    createdAt: "2023-03-10",
    updatedAt: "2023-03-15",
    question: "How to control weeds in organic farming?",
    reason: "Lack of effective weed management strategy",
    status: "in progress",
    severity: "low"
  },
  {
    id: "i4",
    createdAt: "2023-04-05",
    updatedAt: "2023-04-10",
    question: "What causes yellowing of citrus leaves?",
    reason: "Possible pest infestation",
    status: "unresolved",
    severity: "medium"
  }
];

export type ReportedQuestion = {
  id: string;
  createdAt: string;
  updatedAt: string;
  question: string;
  reason: string;
  status: "resolved" | "unresolved" | "in progress";
  severity: "low" | "medium" | "high";
};

export const columns: ColumnDef<ReportedQuestion>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => <div>{row.getValue("updatedAt")}</div>
  },
  {
    accessorKey: "question",
    header: "Question",
    cell: ({ row }) => <div>{row.getValue("question")}</div>
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

      const [isEditing, setIsEditing] = useState(false);

      const handleEdit = () => {
        setIsEditing(true);
      };

      const handleSave = () => {
        setIsEditing(false);
      };

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
              Copy question ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <Drawer>
              <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <DrawerTrigger>View Report</DrawerTrigger>
              </div>
              {/* drawer */}
              <DrawerContent>
                <div className="flex justify-center">
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
                                {/* severity */}
                                <Badge variant="secondary">Low</Badge>
                              </CardTitle>
                              <ComboboxPopoverStatus />
                            </div>
                            <CardDescription>on May 27, 2024</CardDescription>
                          </CardHeader>

                          <CardContent className="space-y-2">
                            <div className="mb-4">
                              <Label>Reason</Label>
                              <Textarea
                                disabled
                                defaultValue="dito yung reason field"
                              />
                            </div>
                            <Label>Note</Label>
                            <Textarea disabled={!isEditing} />
                          </CardContent>

                          {/* report buttons */}
                          <CardFooter>
                            <div className="flex justify-between gap-4 items-center">
                              <DrawerClose>
                                <Button variant="ghost">Back</Button>
                              </DrawerClose>
                              {isEditing ? (
                                <div>
                                  <Button
                                    variant="secondary"
                                    onClick={handleSave}
                                  >
                                    Save Note
                                  </Button>
                                </div>
                              ) : (
                                <Button variant="outline" onClick={handleEdit}>
                                  Add Note
                                </Button>
                              )}
                              <Select>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Action" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>Action</SelectLabel>
                                    <SelectItem value="apple">
                                      Delete Question
                                    </SelectItem>
                                    <SelectItem value="banana">
                                      Send Warning
                                    </SelectItem>
                                    <SelectItem value="blueberry">
                                      Suspen User
                                    </SelectItem>
                                    <SelectItem value="grapes">
                                      Ban User
                                    </SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </CardFooter>
                        </Card>
                      </TabsContent>

                      {/* question */}
                      <TabsContent value="question">
                        <Card>
                          <DrawerHeader>
                            <div className="flex justify-between items-center">
                              <DrawerTitle>Question ID</DrawerTitle>
                              <ComboboxPopoverStatus />
                            </div>
                          </DrawerHeader>

                          <DrawerHeader>
                            <div className="flex justify-between items-center">
                              {/* ito yung title ng question */}
                              <DrawerTitle>
                                Nakatikim ka na ba ng takoyako
                              </DrawerTitle>
                              <div className="flex gap-3 h-8 border rounded-lg items-center">
                                {/* vote count here */}
                                <PiArrowFatUpThin />
                                90
                                <PiArrowFatDownThin />
                              </div>
                            </div>
                            {/* yung question mismo */}
                            <DrawerDescription>
                              KENJI ANO BA?🤺😠KENJI HINDI YON!🙅‼️ HINDI
                              GANON!💢❌EH ANO?🧍🤨 KENJI🧒HINDI MO BA
                              TALAGA👄NAIINTINDIHAN?😟☹️😓 ANG ANO?🗿 YUNG
                              TOTOO!☑️💯NA ANO?👁️👄👁️ GUSTO KO NA ITIGIL✋🚳🚫
                              TO KASE NAGIGING TOTOO NA!🫤😳🙉 ANG ANO?🙍🧐 NA
                              NAGUGUSTUHAN NA KITA😔😳😙💞 TILL I MET
                              YOUU~🥹🫦🫂
                            </DrawerDescription>
                          </DrawerHeader>

                          {/* ito yung tags */}
                          <div className="flex wrap justify-start gap-4 mx-4">
                            <p className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 py-1">
                              Kenji
                            </p>
                          </div>

                          <DrawerFooter>
                            {/* redirect sa view nung question sa page */}
                            <Button>See question in page</Button>
                            <div className="flex justify-between gap-4">
                              <DrawerClose className="w-full">
                                <Button variant="outline" className="w-full">
                                  Back
                                </Button>
                              </DrawerClose>
                            </div>
                          </DrawerFooter>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            <DropdownMenuItem>View question in page</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
