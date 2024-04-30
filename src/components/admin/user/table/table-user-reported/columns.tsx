import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { ReportedUser } from "@api/openapi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { Badge } from "@components/ui/badge";
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
} from "../../../../ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../ui/tabs";
import { formatDateString, formatImage } from "../../../../lib/utils";
import useGetUserProfileQuery from "../../../../../hooks/api/get/useGetUserProfileQuery";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../ui/avatar";
import { toast } from "sonner";
import useUserBanUsersMutation from "../../../../../hooks/api/post/useUserBanUsersMutation";
import Loader from "../../../../../icons/Loader";
import useUserWarnUsersMutation from "../../../../../hooks/api/post/useUserWarnUsersMutation";

export const columns: ColumnDef<ReportedUser>[] = [
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
    cell: ({ row }) => format(new Date(row.original.createdat || ""), "PPP")
  },
  {
    accessorKey: "reported",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          REPORTED
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div>{`${row.original.reported?.firstname} ${row.original.reported?.lastname}`}</div>
    )
  },
  {
    accessorKey: "reporter",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          REPORTER
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div>{`${row.original.reported_by?.firstname} ${row.original.reported_by?.lastname}`}</div>
    )
  },
  {
    accessorKey: "reason",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          REASON
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue("reason")}</div>
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          STATUS
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className=" capitalize text-center">{row.getValue("status")}</div>
    )
  },

  {
    id: "actions",
    enableHiding: false,
    header: () => {
      return <div className="capitalize text-center">ACTION</div>;
    },
    cell: ({ row }) => {
      const report = row.original;
      const navigate = useNavigate();

      const { data: user } = useGetUserProfileQuery(
        report.reported?.username || ""
      );

      const { mutateAsync: banUserMutation, isLoading: banLoading } =
        useUserBanUsersMutation();
      const handleBan = async () => {
        await banUserMutation(report.reported?.id || "");
        toast.success("User Banned Successfully!");
        navigate("/admin/record/user-banned");
      };

      const { mutateAsync: warnUserMutation, isLoading: warnLoading } =
        useUserWarnUsersMutation();
      const handleWarn = async () => {
        try {
          await warnUserMutation(report.id || "");
          toast.success("User Warned Successfully!");
        } catch (error: any) {
          toast.error(error.message);
        }
      };
      if (banLoading || warnLoading) {
        return <Loader isVisible={true} />;
      }

      return (
        <Dialog>
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
                onClick={() => navigator.clipboard.writeText(report.id || "")}
              >
                Copy report ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger>View Report Data</DialogTrigger>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* modal */}
          <DialogContent className="">
            <DialogHeader>
              <div className="flex justify-between items-center mt-4">
                <DialogTitle>{report.id}</DialogTitle>
                <div>
                  <Badge
                    className={` capitalize ${
                      report.status === "pending"
                        ? "bg-orange-600 hover:bg-orange-600"
                        : "bg-primary"
                    }`}
                  >
                    {report.status}
                  </Badge>
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
                  <div className="flex gap-4 justify-end">
                    <div>{format(new Date(report.createdat || ""), "PPP")}</div>
                  </div>
                  <div className="mt-2">
                    <Label>Reason</Label>
                    <Textarea value={report.reason} readOnly />
                  </div>
                  <div className="mt-2">
                    <Label>Evidence</Label>

                    <div className="flex flex-wrap gap-2">
                      {report.evidence?.map((image, i) => (
                        <img
                          src={formatImage(image)}
                          key={i}
                          className="h-20 border border-border object-cover object-center"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <Label>Notes</Label>
                    <Textarea value={report.notes} readOnly />
                  </div>
                </div>
              </TabsContent>
              {/* user tab */}
              <TabsContent value="user">
                <div>
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>
                      {user?.firstname?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="mt-2">
                    <h4 className="text-gray-700 font-semibold sm:text-lg justify-center items-center flex gap-2">
                      {`${user?.firstname} ${user?.lastname}`}{" "}
                      <Badge
                        className={`${
                          Number(user?.verification_level) <= 3
                            ? "bg-orange-600"
                            : "bg-primary"
                        }`}
                      >
                        {Number(user?.verification_level) <= 3
                          ? "Semi-Verified"
                          : "Verified"}
                      </Badge>
                    </h4>
                    <p className="text-center">
                      @{user?.username}{" "}
                      <span className="text-green-600">| {user?.role}</span>
                    </p>
                  </div>

                  <div className="flex justify-between gap-2 flex-wrap my-2">
                    <DialogDescription>
                      <b>email:</b> {user?.email}
                    </DialogDescription>
                    <DialogDescription>
                      <b>birthday:</b> {formatDateString(user?.birthdate || "")}
                    </DialogDescription>
                  </div>
                  <div className="flex justify-between gap-2 mb-2">
                    <DialogDescription>
                      <b>address:</b> {user?.present_address}
                    </DialogDescription>
                  </div>
                  <div className="flex justify-between gap-2 mb-2">
                    <DialogDescription>
                      <b>District:</b> {user?.district}
                    </DialogDescription>
                    <DialogDescription>
                      <b>zip:</b> {user?.zipcode}
                    </DialogDescription>
                    <DialogDescription>
                      <b>Municipality:</b> {user?.municipality}
                    </DialogDescription>
                  </div>
                  <div className="flex justify-between gap-2 mb-2">
                    <DialogDescription>
                      <b>Bio:</b> {user?.bio}
                    </DialogDescription>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* dialog buttons */}
            <DialogFooter>
              <div className="flex justify-end items-center gap-2">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button variant="destructive">Ban</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Ban username?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will block the user account from doing any
                        activity within the website.
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
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button className="bg-yellow-500 hover:bg-yellow-500/80">
                      Warning
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Send Warning to user</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will send a notification to user about the
                        action he've done.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleWarn}>
                        Send
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
  }
];
