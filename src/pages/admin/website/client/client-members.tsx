import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@components/ui/dialog";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { CmsService, MemberUpdate } from "@api/openapi";
import { Form } from "@components/ui/form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import {
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  UseFormReturn,
  useForm
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ClientDetails as ClientDetailsType } from "./schema/client-details";
import usePostUploadImage from "@hooks/api/post/usePostUploadImage";
import { formatImage } from "@components/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ConfirmDeleteDialog from "@components/admin/website/crops/client/confirm-delete-dialog";
import LoadingSpinner from "@icons/LoadingSpinner";
import { FaRegTrashCan } from "react-icons/fa6";
import Loader from "@icons/Loader";
import Dropzone from "@components/user/community/dropzone/dropzone";

const MB_BYTES = 1000000; // Number of bytes in a megabyte.
const ACCEPTED_MIME_TYPES = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp"
];

const MemberSchema = z.object({
  image: z
    .instanceof(Blob)
    .superRefine((f, ctx) => {
      // First, add an issue if the mime type is wrong.
      if (!ACCEPTED_MIME_TYPES.includes(f.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `File must be one of [${ACCEPTED_MIME_TYPES.join(
            ", "
          )}] but was ${f.type}`
        });
      }
      // Next add an issue if the file size is too large.
      if (f.size > 10 * MB_BYTES) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          type: "array",
          message: `The file must not be larger than ${10 * MB_BYTES} bytes: ${
            f.size
          }`,
          maximum: 10 * MB_BYTES,
          inclusive: true
        });
      }
    })
    .optional(),
  name: z.string({ required_error: "name is requred" }).min(3),
  position: z.string().min(3),
  description: z.string().default("")
});

type MemberType = z.infer<typeof MemberSchema>;

type ClientMembersProps = {
  memberFields: MemberUpdate[];
  form: UseFormReturn<ClientDetailsType>;
  appendMember: UseFieldArrayAppend<ClientDetailsType, "members">;
  updateMember: UseFieldArrayUpdate<ClientDetailsType, "members">;
  handleSubmitMainForm: (data: ClientDetailsType) => Promise<void>;
};

const ClientMembers = ({
  memberFields,
  form: mainForm,
  appendMember,
  updateMember,
  handleSubmitMainForm
}: ClientMembersProps) => {
  const [addMember, setAddMember] = useState(false);
  const [deleteMemberConfirmation, setDeleteMemberConfirmation] =
    useState(false);
  const [deleteMemberId, setDeleteMemberId] = useState<string | null>(null);
  const [currentMember, setCurrentMember] = useState<MemberUpdate | null>(null);
  const [editMemberIndex, setEditMemberIndex] = useState<number | null>(null);

  const form = useForm<MemberType>({
    resolver: zodResolver(MemberSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const { mutateAsync: uploadMutation, isLoading: isUploading } =
    usePostUploadImage();

  const queryClient = useQueryClient();
  const { mutateAsync: deleteMemberMutation, isLoading: isDeletingMember } =
    useMutation(["DELETE_MEMBER_MUTATION"], {
      async mutationFn(id: string) {
        const response = await CmsService.deleteApiCmsClientDetailsMember({
          id
        });
        return response;
      },
      onSuccess: data => {
        queryClient.invalidateQueries({
          queryKey: ["GET_CLIENT_DETAILS"]
        });
        toast.success(data.message);
        // navigate("/admin/farm/problems");
      }
    });

  useEffect(() => {
    if (form.formState.errors.image) {
      toast.error(form?.formState?.errors?.image?.message);
    }
    if (form.formState.errors.description) {
      toast.error(form?.formState?.errors?.description?.message);
    }
    if (form.formState.errors.name) {
      toast.error(form?.formState?.errors?.name?.message);
    }
    if (form.formState.errors.position) {
      toast.error(form?.formState?.errors?.position?.message);
    }
  }, [form.formState.errors]);

  async function handleSubmit(data: MemberType) {
    try {
      const { description, name, position } = data;
      let imageData;

      if (data.image) {
        imageData = await uploadMutation(data.image);
      }

      if (currentMember?.id && editMemberIndex) {
        const updateObject = {
          id: currentMember?.id,
          description,
          name,
          image: imageData?.file
            ? (imageData?.file as string)
            : (currentMember.image as string),
          position
        };

        updateMember(editMemberIndex, updateObject);
      } else {
        if (!form.getValues("image")) {
          return toast.error("Image is required");
        }
        appendMember({
          description,
          name,
          position,
          image: imageData?.file as string
        });
      }
      mainForm.handleSubmit(handleSubmitMainForm)();
      setAddMember(false);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  }

  async function handleDeleteMember(id: string) {
    try {
      setDeleteMemberConfirmation(false);
      await deleteMemberMutation(id);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  }

  function triggerFormSubmition() {
    form.handleSubmit(handleSubmit)();
  }

  function handleCloseAddDialog(isOpen: boolean) {
    if (!isOpen) {
      form.reset();
      form.setValue("name", "");
      form.setValue("position", "");
      form.setValue("description", "");
      setAddMember(false);
      setCurrentMember(null);
      setEditMemberIndex(null);
    }
  }

  function handleOnClickMember(index: number, member: MemberUpdate) {
    setFormValues(member);
    setCurrentMember(member);
    setEditMemberIndex(index);
    setAddMember(true);
  }

  function setFormValues(member: MemberUpdate) {
    form.setValue("name", member.name as string);
    form.setValue("position", member.position as string);
    form.setValue("description", (member.description as string) ?? "");
  }

  return (
    <div>
      <hr className="my-4" />
      <div className="flex justify-between items-center my-4">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold tracking-tight">The team</h2>
          <p className="text-gray-600 mt-3">
            Quezon City University - Center for Urban Agriculture and Innovation
            Core Members.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => setAddMember(true)}
        >
          Add Member
        </Button>
        <Dialog open={addMember} onOpenChange={handleCloseAddDialog}>
          <DialogContent className="sm:max-w-3xl">
            <MemberForm
              currentMember={currentMember}
              form={form}
              handleSubmit={handleSubmit}
              triggerFormSubmition={triggerFormSubmition}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* members */}
      <Card className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div>
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {memberFields.length === 0 ? (
                <Card className="p-5">No members added yet.</Card>
              ) : (
                memberFields.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative cursor-pointer"
                    onClick={() => handleOnClickMember(idx, item)}
                  >
                    <Card className="p-5" key={idx}>
                      <div className="w-24 h-24 mx-auto">
                        {/* profile */}
                        <img
                          src={formatImage(item?.image ?? "")}
                          className="w-full h-full rounded-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="mt-2">
                        {/* name */}
                        <h4 className="text-gray-700 font-semibold sm:text-lg">
                          {item.name}
                        </h4>
                        {/* position */}
                        <p className="text-green-600">{item.position}</p>
                        {/* description */}
                        <p className="text-gray-600 mt-2">{item.description}</p>
                      </div>
                    </Card>
                    <button
                      type="button"
                      className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer"
                      disabled={isDeletingMember}
                      onClick={e => {
                        e.stopPropagation();
                        setDeleteMemberConfirmation(true);
                        setDeleteMemberId(item?.id ?? null);
                      }}
                    >
                      {isDeletingMember ? (
                        <LoadingSpinner className="absolute" />
                      ) : (
                        <FaRegTrashCan />
                      )}
                    </button>
                  </div>
                ))
              )}
            </ul>
          </div>
        </div>
      </Card>
      <ConfirmDeleteDialog
        open={deleteMemberConfirmation}
        onOpenChange={setDeleteMemberConfirmation}
        handleDelete={handleDeleteMember}
        deleteId={deleteMemberId}
      />
      <Loader isVisible={isDeletingMember || isUploading} />
    </div>
  );
};

export default ClientMembers;

type MemberFormProps = {
  form: UseFormReturn<MemberType>;
  handleSubmit: (data: MemberType) => Promise<void | string | number>;
  currentMember: MemberUpdate | null;
  triggerFormSubmition: () => void;
};

function MemberForm({
  form,
  handleSubmit,
  currentMember,
  triggerFormSubmition
}: MemberFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <DialogHeader>
          <DialogTitle>
            {currentMember?.id ? "Update Member" : "Add Member"}
          </DialogTitle>
          <DialogDescription>
            {currentMember?.id
              ? "Update team member"
              : "Add a new team member."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div>
            <>
              <div className="flex w-full flex-wrap sm:flex-nowrap items-center gap-4">
                <div className="w-full">
                  <Dropzone
                    onChange={file => form.setValue("image", file)}
                    defaultValue={
                      currentMember?.id
                        ? formatImage(currentMember?.image as string)
                        : undefined
                    }
                  />
                </div>

                <div className="w-full">
                  <div className="mb-4">
                    <Label>Name</Label>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              // defaultValue={currentMember?.name}
                            />
                          </FormControl>
                          <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mb-4">
                    <Label>Position</Label>
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              // defaultValue={currentMember?.position}
                            />
                          </FormControl>
                          <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
        <DialogFooter className="mt-4">
          <div className="flex justify-end">
            <Button
              variant="default"
              type="button"
              onClick={triggerFormSubmition}
            >
              {currentMember?.id ? "Update" : "Add"}
            </Button>
          </div>
        </DialogFooter>
      </form>
    </Form>
  );
}
