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
import TableAdminList from "../../../components/admin/admins/table-admin-list/table-admin-list";
import DialogCreateAdmin from "../../../components/admin/admins/dialog-create-admin/dialog-create-admin";

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
        <DialogCreateAdmin />
      </div>
      <hr className="my-4" />
      <TableAdminList />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(RecordAdmins, ["admin", "asst_admin"], "admin");
