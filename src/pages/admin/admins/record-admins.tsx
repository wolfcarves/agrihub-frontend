import React, { useState } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { data, columns } from "./table/columns-admin";
import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { Label } from "@components/ui/label";
import { Link } from "react-router-dom";

const breadcrumbItems = [
  { title: "Admin Management", link: "/admin/record/admins" },
  { title: "Admin", link: "/admin/record/admins" }
];

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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "@components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

const RecordAdmins: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChangeAdminAccount = (admin: string) => {
    setSelectedOption(admin);
  };

  const MemberList = [
    {
      id: 1,
      firstname: "Johniebel",
      lastname: "Gracias",
      email: "johnnygracia@gmail.com",
      avatar: "https://randomuser.me/api/portraits/lego/5.jpg"
    },
    {
      id: 2,
      firstname: "Norman",
      lastname: "Domingo",
      email: "doman@gmail.com",
      avatar: "https://randomuser.me/api/portraits/lego/9.jpg"
    }
  ];

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Accounts</h2>
          <p className="text-sm text-muted-foreground">Manage all admins.</p>
        </div>

        {/* new admin */}
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">+ New Admin</Button>
          </DialogTrigger>
          <DialogContent className="p-5 flex justify-center text-center">
            <div className="my-4 w-full">
              <h2 className="text-md font-bold mb-2 tracking-tight text-left">
                Admin Accounts
              </h2>
              <Select onValueChange={e => handleChangeAdminAccount(e)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a way for adding new admin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="existing">
                    set existing account as admin
                  </SelectItem>
                  <SelectItem value="new">create new admin account</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex justify-end mt-2">
                {selectedOption === "new" && (
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
                            defaultValue="Pedro Duarte"
                            className="mt-1"
                            type="email"
                          />
                        </div>
                        <div className="">
                          <Label className="text-right">Password</Label>
                          <Input
                            id="password"
                            defaultValue="@peduarte"
                            className="mt-1"
                            type="password"
                          />
                        </div>
                        <div className="">
                          <Label className="text-right">Confirm Password</Label>
                          <Input
                            id="confirm-password"
                            defaultValue="@peduarte"
                            className="mt-1"
                            type="password"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline">Create Account</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you sure you want to create this account as
                                admin?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will send an
                                verification email to the user and will register
                                them as assistant admin of AgriHub.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <Link to="/admin/record/admins/set-permission">
                                <AlertDialogAction>Continue</AlertDialogAction>
                              </Link>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}

                {selectedOption === "existing" && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Set existing</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Set a New Admin</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-12 gap-4 py-4">
                        <Input
                          placeholder="Search person..."
                          className=" col-span-12 focus-visible:ring-0"
                        />
                        <ScrollArea className=" col-span-12 h-[47vh] overflow-y-auto ">
                          {MemberList?.map((user, i) => (
                            <div
                              key={i}
                              className="w-full grid grid-cols-12 px-2 border-y py-2"
                            >
                              <Avatar className=" col-span-2">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>
                                  {user?.firstname?.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col col-span-7 select-none">
                                <span className=" font-poppins-medium line-clamp-1">{`${user?.firstname} ${user?.lastname}`}</span>
                                <span className=" text-xs text-gray-500">
                                  {user?.email}
                                </span>
                              </div>
                              <div className=" col-span-3 flex justify-center">
                                <Button variant="outline">Select</Button>
                              </div>
                            </div>
                          ))}
                        </ScrollArea>
                      </div>
                      <DialogFooter>
                        <Link to="/admin/record/admins/set-permission">
                          <Button type="submit">Set as admin</Button>
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(RecordAdmins, ["admin", "asst_admin"], "admin");
