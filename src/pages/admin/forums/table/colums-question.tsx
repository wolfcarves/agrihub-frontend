import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@components/ui/button";
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

import { ComboboxPopoverStatus } from "./components/combobox-status";
import { PiArrowFatUpThin, PiArrowFatDownThin } from "react-icons/pi";

export const data: Question[] = [
  {
    id: "q1",
    createdAt: "2023-01-15",
    title: "Best practices for organic farming",
    answerCount: 5,
    status: "posted",
    tags: ["Organic Farming", "Farming Practices"]
  },
  {
    id: "q2",
    createdAt: "2023-02-20",
    title: "Effective pest control methods for crops",
    answerCount: 3,
    status: "posted",
    tags: ["Pest Control", "Crop Management"]
  },
  {
    id: "q3",
    createdAt: "2023-03-10",
    title: "Water conservation techniques in agriculture",
    answerCount: 8,
    status: "archive",
    tags: ["Water Conservation", "Agricultural Techniques"]
  },
  {
    id: "q4",
    createdAt: "2023-04-05",
    title: "Improving soil fertility naturally",
    answerCount: 2,
    status: "posted",
    tags: ["Soil Fertility", "Natural Farming"]
  }
];

export type Question = {
  id: string;
  createdAt: string;
  title: string;
  answerCount: number;
  status: "posted" | "archive";
  tags: string[];
};

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdAt")}</div>
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div>{row.getValue("title")}</div>
  },
  {
    accessorKey: "answerCount",
    header: "Answer Count",
    cell: ({ row }) => <div>{row.getValue("answerCount")}</div>
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => <div>{}</div>
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
              Copy question ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <Drawer>
              <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <DrawerTrigger>Open</DrawerTrigger>
              </div>

              {/* drawer */}
              <DrawerContent>
                <div className="flex justify-center">
                  <div className="max-w-[50rem] w-full">
                    <DrawerHeader>
                      <div className="flex justify-between items-center">
                        <DrawerTitle>Question ID</DrawerTitle>
                        {/* status of question id poster or archive or reported */}
                        <ComboboxPopoverStatus />
                      </div>
                    </DrawerHeader>

                    <DrawerHeader>
                      <div className="flex justify-between items-center">
                        {/* question title */}
                        <DrawerTitle>
                          Nakatikim ka na ba ng takoyako
                        </DrawerTitle>
                        <div className="flex gap-3 h-8 border rounded-lg items-center">
                          <PiArrowFatUpThin />
                          90
                          <PiArrowFatDownThin />
                        </div>
                      </div>
                      {/* question it self */}
                      <DrawerDescription>
                        KENJI ANO BA?🤺😠KENJI HINDI YON!🙅‼️ HINDI GANON!💢❌EH
                        ANO?🧍🤨 KENJI🧒HINDI MO BA TALAGA👄NAIINTINDIHAN?😟☹️😓
                        ANG ANO?🗿 YUNG TOTOO!☑️💯NA ANO?👁️👄👁️ GUSTO KO NA
                        ITIGIL✋🚳🚫 TO KASE NAGIGING TOTOO NA!🫤😳🙉 ANG
                        ANO?🙍🧐 NA NAGUGUSTUHAN NA KITA😔😳😙💞 TILL I MET
                        YOUU~🥹🫦🫂
                      </DrawerDescription>
                    </DrawerHeader>

                    {/* question tags */}
                    <div className="flex wrap justify-start gap-4 mx-4">
                      <p className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 py-1">
                        Kenji
                      </p>
                    </div>

                    {/* buttons */}
                    <DrawerFooter>
                      <Button>See question in page</Button>
                      <div className="flex justify-between gap-4">
                        <DrawerClose className="w-3/6">
                          <Button variant="outline" className="w-full">
                            Back
                          </Button>
                        </DrawerClose>
                        <Button variant="destructive" className="w-3/6">
                          Archive
                        </Button>
                      </div>
                    </DrawerFooter>
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
