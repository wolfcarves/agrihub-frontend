import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { data, columns } from "./table/columns-tag";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Tags", link: "/admin/forum/tags" }
];
const TagsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Tags</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>+Add</Button>
          </DialogTrigger>

          {/* tag modal */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>New Tag</DialogTitle>
              <DialogDescription>
                Add descriptive tags to categorize resources effectively. Click
                'Save' when you've finished
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="flex-col gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Insert tag name"
                  className="col-span-3"
                />
              </div>
              <div className="flex-col gap-4">
                <Label className="text-right">Descrition</Label>
                <Textarea placeholder="Describe your tag" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <p className="text-sm text-muted-foreground">
        Manage all tags within the website.
      </p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(TagsAdmin, ["admin", "asst_admin"], "forums");
