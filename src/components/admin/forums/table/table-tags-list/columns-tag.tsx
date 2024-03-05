import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";

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
import { Tag } from "@api/openapi";
import { useForm } from "react-hook-form";

import * as zod from "zod";
import { NewTagRequestBody } from "@api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import useTagsCreate from "@hooks/api/post/useTagsCreate";
import Loader from "@icons/Loader";
import { Form, FormField } from "@components/ui/form";

const addTagSchema = zod.object({
  tag_name: zod
    .string({
      required_error: "Title is required."
    })
    .min(3, "Title is too small"),
  details: zod.string().min(10, {
    message: "Description must be at least 10 characters."
  })
});

export const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: "createdat",
    header: "Created At",
    cell: ({ row }) => <div>{row.getValue("createdat")}</div>
  },
  // {
  //   accessorKey: "updatedat",
  //   header: "Updated At",
  //   cell: ({ row }) => <div>{row.getValue("updatedat")}</div>
  // },
  {
    accessorKey: "tag_name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("tag_name")}</div>
  },
  {
    accessorKey: "details",
    header: "Detail",
    cell: ({ row }) => <div>{row.getValue("details")}</div>
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tag = row.original;
      const [isOpen, setIsOpen] = React.useState<boolean>();
      const form = useForm<NewTagRequestBody>({
        resolver: zodResolver(addTagSchema),
        mode: "onBlur"
      });

      React.useEffect(() => {
        if (form.formState.errors.tag_name) {
          toast.error(form?.formState?.errors?.tag_name?.message);
        }
      }, [form.formState.errors]);

      const { mutateAsync: addTagMutate, isLoading: addTagLoading } =
        useTagsCreate();

      const handleSubmitForm = async (data: NewTagRequestBody) => {
        const compiledData: NewTagRequestBody = {
          id: tag.id,
          tag_name: data.tag_name,
          details: data.details
        };

        try {
          const response = await addTagMutate(compiledData);
          toast.success(`Tag ${response.data?.tag_name} Created Successfully!`);
          setIsOpen(false);
        } catch (e: any) {
          toast.error(e.body.message);
        }
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
              onClick={() => navigator.clipboard.writeText(tag.id || "")}
            >
              Copy Tag ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Dialog open={isOpen}>
              <DialogTrigger asChild>
                <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  View/update Tag
                </div>
              </DialogTrigger>
              {/* modal */}
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Tag Name</DialogTitle>
                  <DialogDescription>
                    Update tags to categorize resources effectively. Click
                    'Save' when you've finished.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmitForm)}
                    encType="multipart/form-data"
                    className="grid gap-4"
                  >
                    <div className="grid gap-4">
                      <div className="flex-col gap-4">
                        <Label htmlFor="title" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="title"
                          placeholder="insert title of your material"
                          className="col-span-3"
                          defaultValue={tag.tag_name}
                          {...form.register("tag_name")}
                        />
                      </div>
                      <div className="flex-col gap-4">
                        <Label className="text-right">Descrition</Label>
                        <FormField
                          control={form.control}
                          name="details"
                          render={({ field }) => (
                            <Textarea
                              placeholder="Describe your tag"
                              {...field}
                              defaultValue={tag.details}
                            />
                          )}
                        />
                      </div>
                    </div>

                    {/* buttons */}
                    <DialogFooter>
                      <Button variant="destructive">Delete</Button>
                      <Button type="submit">Save Changes</Button>
                    </DialogFooter>
                  </form>
                </Form>
                <Loader isVisible={addTagLoading} />
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
