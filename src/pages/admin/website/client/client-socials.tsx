import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { FaTrashCan } from "react-icons/fa6";
import { CmsService, SocialUpdate } from "../../../../api/openapi";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { ClientDetails as ClientDetailsType } from "./schema/client-details";
import {
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormReturn
} from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type ClientSocialProps = {
  socialFields: SocialUpdate[];
  form: UseFormReturn<ClientDetailsType>;
  appendSocial: UseFieldArrayAppend<ClientDetailsType, "socials">;
  removeSocial: UseFieldArrayRemove;
};

const ClientSocials = ({
  socialFields,
  form,
  appendSocial,
  removeSocial
}: ClientSocialProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading: IsMutationLoading } = useMutation(
    ["CREATE_PROBLEM_MUTATION"],
    {
      async mutationFn(id: string) {
        const response = await CmsService.deleteApiCmsClientDetailsSocial({
          id
        });
        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["GET_CLIENT_DETAILS"]
        });
      }
    }
  );

  async function handleRemoveSocial(
    index: number,
    id: string | undefined | null
  ) {
    if (id) {
      try {
        await mutateAsync(id);
        removeSocial(index);
      } catch (error) {
        toast.error("error removing");
      }
    }
  }
  return (
    <div>
      <div className="my-8">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl font-bold tracking-tight">
            Social Media Accounts
          </h2>
          <Button
            type="button"
            variant="outline"
            onClick={() => appendSocial({ link: "", name: "" })}
          >
            Add Social Media
          </Button>
        </div>
        {socialFields.length === 0 ? (
          <p>No social media links added yet.</p>
        ) : (
          socialFields.map((socialMedia, index) => (
            <Card key={index} className="p-5 mb-4">
              <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 items-center">
                <FormField
                  control={form.control}
                  name={`socials.${index}.link`}
                  defaultValue={socialMedia?.link}
                  // disabled={!isEditing}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter Link"
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`socials.${index}.name`}
                  defaultValue={socialMedia?.name}
                  // disabled={!isEditing}
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter Platform"
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <Button
                  variant="destructive"
                  type="button"
                  onClick={() => handleRemoveSocial(index, socialMedia?.id)}
                >
                  <FaTrashCan />
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ClientSocials;
