import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Label } from "@radix-ui/react-dropdown-menu";
import { helpList } from "@pages/user/help/helpData";
import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Help Center", link: "/admin/website/help-center" }
];

const HelpsAdmin = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
        </div>
        <Label>Minanage ang kinembers ni chini colone </Label>
      </div>
      <hr className="my-4" />
      <section>
        <div className="max-w-screen-2xl px-4 md:px-8">
          <form
            onSubmit={e => e.preventDefault()}
            className="max-w-md mt-12 sm:mx-32"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-green-600"
              />
            </div>
            <p className="text-gray-600 max-w-lg mx-auto text-lg font-bold mt-8">
              Topic
            </p>
          </form>

          <ul className="mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-32">
            <Dialog>
              <DialogTrigger asChild>
                <div className="border rounded-lg cursor-pointer">
                  <div className="flex items-start justify-center p-4">
                    <div className="space-y-2 text-center">
                      <div className="flex justify-center">
                        <IoMdAddCircleOutline
                          style={{ height: "2.5rem", width: "2.5rem" }}
                        />
                      </div>
                      <h4 className="text-gray-800 font-semibold">Add New</h4>
                      <p className="text-gray-600 text-sm">
                        Add New Help Topic
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              {/* tag modal */}
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>New help topic</DialogTitle>
                  <DialogDescription>
                    Add topic that can help users to know more about AgriHub
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="flex-col gap-4">
                    <Label className="text-left">Title</Label>
                    <Input
                      id="title"
                      placeholder="Insert new topic"
                      className="col-span-3 my-2"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Add</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {helpList.map(item => (
              <Link
                to={`/admin/website/help-center/sub-categories`}
                className="border rounded-lg"
                key={item.ref}
              >
                <div className="flex items-start justify-center p-4">
                  <div className="space-y-2 text-center">
                    <div className="flex justify-center">{item.icon}</div>
                    <h4 className="text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  HelpsAdmin,
  ["admin", "asst_admin"],
  "help_center"
);
