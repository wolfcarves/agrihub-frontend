import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { FaTrashCan } from "react-icons/fa6";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import { CmsService, PartnerUpdate } from "@api/openapi";
import { ClientDetails as ClientDetailsType } from "./schema/client-details";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import {
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormReturn
} from "react-hook-form";
import AwsUploader from "@components/user/community/uploader/uploader";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "@icons/Loader";
import ConfirmDeleteDialog from "../../../../components/admin/website/crops/client/confirm-delete-dialog";

type ClientPartnershipsProps = {
  fields: PartnerUpdate[];
  form: UseFormReturn<ClientDetailsType>;
  appendPartner: UseFieldArrayAppend<ClientDetailsType, "partners">;
  removePartner: UseFieldArrayRemove;
};

const ClientPartnerships = ({
  fields,
  form,
  appendPartner,
  removePartner
}: ClientPartnershipsProps) => {
  // const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteParnertship, setDeleteParnertshipConfirmation] = useState(false);

  const queryClient = useQueryClient();
  const { mutateAsync: deletePartnerMutation, isLoading: isDeletingPartner } =
    useMutation(["DELETE_PARTNER_MUTATION"], {
      async mutationFn(id: string) {
        const response = await CmsService.deleteApiCmsClientDetailsPartner({
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

  function handleAppendPartner() {
    appendPartner({
      description: "",
      name: "",
      logo: ""
    });
  }

  function handleRemovePartner(partner: PartnerUpdate, index: number) {
    if (partner?.id) {
      setDeleteId(partner?.id);
      return setDeleteParnertshipConfirmation(true);
    }
    removePartner(index);
  }

  async function deletePartner(id: string) {
    try {
      setDeleteParnertshipConfirmation(false);
      await deletePartnerMutation(id);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  }

  return (
    <div>
      <div className="my-8">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl font-bold tracking-tight">Partnerships</h2>
          <Button type="button" variant="outline" onClick={handleAppendPartner}>
            Add Partnership
          </Button>
        </div>
        {fields.length === 0 ? (
          <Card className="p-5">No partnership added</Card>
        ) : (
          fields.map((partnership, index) => (
            <Card key={index} className="p-5 mb-4">
              <div className="flex sm:flex-nowrap flex-wrap gap-4">
                <div className="w-full">
                  <AwsUploader
                    onChange={data =>
                      form.setValue(`partners.${index}.logo`, data)
                    }
                    defaultValue={partnership?.logo}
                    onDelete={() => form.setValue(`partners.${index}.logo`, "")}
                  />
                </div>
                <div className="w-full">
                  <div>
                    <Label>Name</Label>
                    <FormField
                      control={form.control}
                      name={`partners.${index}.name`}
                      defaultValue={partnership?.name}
                      // disabled={editIndex !== index}
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
                  <div>
                    <Label>Description</Label>
                    <div>
                      <FormField
                        control={form.control}
                        name={`partners.${index}.description`}
                        defaultValue={partnership?.description}
                        // disabled={editIndex !== index}
                        render={({ field, fieldState }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage>
                              {fieldState.error?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-4">
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => handleRemovePartner(partnership, index)}
                >
                  <FaTrashCan />
                </Button>
                {/* {editIndex === index ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setEditIndex(index)}
                  >
                    Edit
                  </Button>
                )} */}
              </div>
            </Card>
          ))
        )}
      </div>
      <ConfirmDeleteDialog
        open={deleteParnertship}
        onOpenChange={setDeleteParnertshipConfirmation}
        handleDelete={deletePartner}
        deleteId={deleteId}
      />
      <Loader isVisible={isDeletingPartner} />
    </div>
  );
};

export default ClientPartnerships;
