import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

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

import { PiArrowFatUpThin, PiArrowFatDownThin } from "react-icons/pi";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import useDeleteQuestionMutation from "../../../../hooks/api/delete/useDeleteQuestionMutation";
import Loader from "../../../../icons/Loader";
import { toast } from "sonner";
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
export type Question = {
  id?: string;
  user?: {
    avatar?: string;
    id?: string;
    username?: string;
    role?: string;
  };
  tags?: Array<{
    tag?: string;
  }>;
  title?: string;
  question?: string;
  imagesrc?: Array<string>;
  createdat?: string;
  updatedat?: string;
  answer_count?: string;
  vote_count?: string;
  vote?: {
    id?: string;
    type?: string;
  };
};

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "createdat",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CREATED AT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) =>
      format(new Date(row.original.createdat || ""), "MMM dd, yyyy")
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TITLE
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-wrap line-clamp-2">{row.getValue("title")}</div>
    )
  },
  {
    accessorKey: "answer_count",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ANSWERS COUNT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("answer_count")}</div>
    )
  },
  {
    accessorKey: "vote_count",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          VOTE COUNT
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.getValue("vote_count")}</div>
    )
  },

  {
    id: "actions",
    enableHiding: false,
    header: () => {
      return <div className="text-center">ACTIONS</div>;
    },
    cell: ({ row }) => {
      const [isOpen, setIsOpen] = React.useState<boolean>(false);
      const question = row.original;

      const navigate = useNavigate();
      const handleViewQuestionPage = () => {
        navigate(`/forum/question/${question.user?.username}/${question.id}`);
      };

      //handle delete image
      const { mutateAsync: deleteQuestion, isLoading: isDeleteLoading } =
        useDeleteQuestionMutation();
      const handleDelete = async (id: string) => {
        await deleteQuestion(id);
        toast.success("Question Deleted Successfully!");
        setIsOpen(false);
      };

      return (
        <Drawer open={isOpen}>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full">
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(question?.id || "")
                }
              >
                Copy question ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <DrawerTrigger
                  onClick={() => setIsOpen(true)}
                  className="w-full text-start"
                >
                  Open
                </DrawerTrigger>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleViewQuestionPage}>
                View question in page
              </DropdownMenuItem>
            </DropdownMenuContent>
            {/* drawer */}
            <DrawerContent>
              <div className="flex justify-center">
                <div className="max-w-[50rem] w-full">
                  <DrawerHeader>
                    <div className="flex justify-between items-center">
                      <DrawerTitle>{question.id}</DrawerTitle>
                      {/* status of question id poster or archive or reported */}
                    </div>
                  </DrawerHeader>

                  <DrawerHeader>
                    <div className="flex justify-between items-center">
                      {/* question title */}
                      <DrawerTitle>{question.title}</DrawerTitle>
                      <div className="flex gap-3 px-2 h-8 border rounded-lg items-center">
                        <PiArrowFatUpThin />
                        {question.vote_count}
                        <PiArrowFatDownThin />
                      </div>
                    </div>
                    {/* question it self */}
                    <DrawerDescription>
                      <p className="  break-all">
                        {parse(question.question ?? "")}
                      </p>
                    </DrawerDescription>
                  </DrawerHeader>

                  {/* question tags */}
                  <div className="flex wrap justify-start gap-4 mx-4">
                    {question.tags?.map((tag, i) => (
                      <p
                        key={i}
                        className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 py-1"
                      >
                        {tag.tag}
                      </p>
                    ))}
                  </div>

                  {/* buttons */}
                  <DrawerFooter>
                    <Button onClick={handleViewQuestionPage}>
                      See question in page
                    </Button>
                    <div className="flex justify-between gap-4">
                      <DrawerClose className="w-3/6">
                        <Button
                          onClick={() => setIsOpen(false)}
                          variant="outline"
                          className="w-full"
                        >
                          Back
                        </Button>
                      </DrawerClose>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" className="w-full">
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Delete Question?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete the question and remove this
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(question.id || "")}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </DrawerFooter>
                </div>
              </div>
            </DrawerContent>
          </DropdownMenu>
          <Loader isVisible={isDeleteLoading} />
        </Drawer>
      );
    }
  }
];
