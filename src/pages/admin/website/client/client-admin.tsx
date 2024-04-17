import React, { useEffect } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import ClientMembers from "./client-members";
import ClientSocials from "./client-socials";
import ClientDetails from "./client-details";
import ClientPartnerships from "./client-partnerships";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CmsService } from "@api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  ClientDetails as ClientDetailsType,
  ClientDetailsSchema
} from "./schema/client-details";
import { Form } from "@components/ui/form";
import { UpdateClientDetailsRequest } from "@api/openapi";
import { toast } from "sonner";
import Loader from "@icons/Loader";
import useFormClientError from "./useFormClientError";
import { parseValidString } from "@components/lib/utils";
import { Button } from "@components/ui/button";

const breadcrumbItems = [
  {
    title: "Center for Urban Agriculture and Innovation",
    link: "/admin/website/client-details"
  }
];

const ClientAdmin = () => {
  const queryClient = useQueryClient();
  const { data: clientDetails, isLoading: isClientLoading } = useQuery({
    queryKey: ["GET_CLIENT_DETAILS"],
    queryFn: async () => {
      const data = await CmsService.getApiCmsClientDetails();

      return data;
    }
  });

  const { mutateAsync, isLoading: IsMutationLoading } = useMutation(
    ["CREATE_PROBLEM_MUTATION"],
    {
      async mutationFn(requestBody: UpdateClientDetailsRequest) {
        const response = await CmsService.putApiCmsClientDetails({
          requestBody
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
    }
  );

  const form = useForm<ClientDetailsType>({
    resolver: zodResolver(ClientDetailsSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const {
    fields: socialFields,
    append: appendSocial,
    remove: removeSocial,
    replace: replaceSocial
  } = useFieldArray({
    control: form.control,
    name: "socials",
    keyName: "_uid"
  });

  const {
    fields: memberFields,
    append: appendMember,
    update: updateMember,
    replace: replaceMember
  } = useFieldArray({
    control: form.control,
    name: "members",
    keyName: "_uid"
  });

  const {
    fields: partnerFields,
    append: appendPartner,
    remove: removePartner,
    replace: replacePartner
  } = useFieldArray({
    control: form.control,
    name: "partners",
    keyName: "_uid"
  });

  useEffect(() => {
    if (clientDetails?.socials) {
      replaceSocial(
        clientDetails?.socials as (
          | { name: string; link: string; id?: string | undefined }
          | undefined
        )[]
      );
    }
    if (clientDetails?.members) {
      replaceMember(clientDetails?.members as any);
    }
    if (clientDetails?.partners) {
      replacePartner(clientDetails?.partners as any);
    }

    if (clientDetails?.logo) {
      form.setValue("logo", parseValidString(clientDetails.logo));
    }
  }, [clientDetails]);

  useFormClientError(form);
  console.log(form.formState.errors);

  if (isClientLoading) {
    return "...loading";
  }

  const handleSubmit = async (data: ClientDetailsType) => {
    try {
      await mutateAsync(data as UpdateClientDetailsRequest);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Center for Urban Agriculture and Innovation
        </h2>
      </div>
      <p className="text-sm text-muted-foreground w-10/12">
        Manage all the information about your organization, covering its
        mission, vision, team members, partnerships, and social media presence.
        Showcase the collective efforts and values driving your platform, along
        with strategic collaborations and avenues for engagement.
      </p>
      <hr className="my-4" />

      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl font-bold tracking-tight">
          Center for Urban Agriculture and Innovation
        </h2>
      </div>

      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
          {/* client details */}
          <ClientDetails details={clientDetails} form={form} />
          <hr className="my-4" />

          {/* social media section */}
          <ClientSocials
            socialFields={socialFields}
            form={form}
            appendSocial={appendSocial}
            removeSocial={removeSocial}
          />

          {/* members */}
          <ClientMembers
            updateMember={updateMember}
            memberFields={memberFields}
            form={form}
            appendMember={appendMember}
            handleSubmitMainForm={handleSubmit}
          />

          {/* partnership */}
          <ClientPartnerships
            fields={partnerFields}
            form={form}
            appendPartner={appendPartner}
            removePartner={removePartner}
          />
          <div className="bottom-8 right-8 fixed">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
      <Loader isVisible={IsMutationLoading} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(ClientAdmin, ["admin", "asst_admin"], "cuai");
