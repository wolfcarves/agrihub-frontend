import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { format } from "date-fns";
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
import useDeleteTags from "../../../../../hooks/api/delete/useDeleteTags";

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
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer  "
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
    accessorKey: "tag_name",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer  "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NAME
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue("tag_name")}</div>
  },
  {
    accessorKey: "details",
    header: ({ column }) => {
      return (
        <div
          className="flex cursor-pointer  "
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          DETAIL
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-wrap line-clamp-2">{row.getValue("details")}</div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => {
      return <div className="text-center">ACTIONS</div>;
    },
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
        if (form.formState.errors.tag_name) {
          toast.error(form?.formState?.errors?.details?.message);
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
          // console.log(compiledData);
          const response = await addTagMutate(compiledData);
          toast.success(`Tag ${response.data?.tag_name} Created Successfully!`);
          setIsOpen(false);
        } catch (e: any) {
          toast.error(e.body.message);
        }
      };

      const { mutateAsync: deleteTag, isLoading: deleteLoading } =
        useDeleteTags();
      const handleUnpublish = async () => {
        await deleteTag(tag.id || "");
        toast.success("Tag Deleted Successfully!");
        setIsOpen(false);
      };
      if (deleteLoading) {
        return <Loader isVisible={true} />;
      }
      return (
        <Dialog open={isOpen}>
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
                onClick={() => navigator.clipboard.writeText(tag.id || "")}
              >
                Copy Tag ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DialogTrigger>View/update Tag</DialogTrigger>
              </DropdownMenuItem>

              {/* modal */}
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tag Name</DialogTitle>
              <DialogDescription>
                Update tags to categorize resources effectively. Click 'Save'
                when you've finished.
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
                    <FormField
                      control={form.control}
                      name="tag_name"
                      defaultValue={tag.tag_name}
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} type="text" />
                          </FormControl>
                          <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-col gap-4">
                    <Label className="text-right">Descrition</Label>
                    <FormField
                      control={form.control}
                      name="details"
                      defaultValue={tag.details}
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button type="button" variant="destructive">
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete this tag?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete a tag and remove tag data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-500"
                          onClick={handleUnpublish}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <Button type="submit">Save Changes</Button>
                </DialogFooter>
              </form>
            </Form>
            <Loader isVisible={addTagLoading} />
          </DialogContent>
        </Dialog>
      );
    }
  }
];
