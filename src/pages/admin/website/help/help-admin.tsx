import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { FaTrashCan } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@components/ui/dialog";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Help Center", link: "/admin/website/help-center" },
  { title: "Sub Categories", link: "/admin/website/help-center/sub-categories" }
];

const HelpAdmin = () => {
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number>(-1);
  const [questions, setQuestions] = useState<{ [key: string]: string }>({});
  const [newSubCategory, setNewSubCategory] = useState<string>("");

  const handleAddSubCategory = () => {
    if (newSubCategory.trim() !== "") {
      setSubCategories([...subCategories, newSubCategory]);
      setQuestions({ ...questions, [newSubCategory]: "" });
      setNewSubCategory("");
    }
  };

  const handleDeleteSubCategory = (index: number) => {
    const updatedSubCategories = [...subCategories];
    updatedSubCategories.splice(index, 1);
    setSubCategories(updatedSubCategories);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleSave = () => {
    setEditingIndex(-1);
  };

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Sub Category main help title
          </h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>+Add</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>New Subcategory</DialogTitle>
                <DialogDescription>Add a new subcategory.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="flex-col gap-4">
                  <Label className="text-left">Title</Label>
                  <Input
                    id="title"
                    placeholder="Insert subcategory name"
                    value={newSubCategory}
                    onChange={e => setNewSubCategory(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={handleAddSubCategory}>+Add</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Label>Minanage ang kinembers ni chini colone </Label>
      </div>
      <hr className="my-4" />

      <form onSubmit={e => e.preventDefault()} className="my-8">
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
      </form>
      {subCategories.length === 0 ? (
        <Card className="w-full px-8 py-4 gap-4 text-center">
          No categories yet
        </Card>
      ) : (
        subCategories.map((subCategory, index) => (
          <Card key={index} className="w-full px-8 py-4 gap-4">
            <div className="w-full">
              <div className="flex gap-4">
                <Input
                  type="text"
                  value={subCategory}
                  disabled={editingIndex !== index}
                />
                <div className="flex gap-4 items-center">
                  {editingIndex === index ? (
                    <Button variant="outline" onClick={handleSave}>
                      Save
                    </Button>
                  ) : (
                    <Button variant="outline" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteSubCategory(index)}
                  >
                    <FaTrashCan />
                  </Button>
                </div>
              </div>
            </div>
            <div className="my-4">
              <Label>Guide</Label>
              <div className="w-full">
                <RichTextEditor
                  height={300}
                  disabled={editingIndex !== index}
                />
              </div>
            </div>
          </Card>
        ))
      )}
    </AdminOutletContainer>
  );
};

export default withAuthGuard(HelpAdmin, ["admin", "asst_admin"]);
