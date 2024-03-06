import { useEffect } from "react";
import { ClientDetails as ClientDetailsType } from "./schema/client-details";
import { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

export default function useFormClientError(
  form: UseFormReturn<ClientDetailsType>
) {
  useEffect(() => {
    if (form.formState.errors.address) {
      toast.error(form?.formState?.errors?.address?.message);
    }
    if (form.formState.errors.contact_number) {
      toast.error(form?.formState?.errors?.contact_number?.message);
    }
    if (form.formState.errors.email) {
      toast.error(form?.formState?.errors?.email?.message);
    }
    if (form.formState.errors.logo) {
      toast.error(form?.formState?.errors?.logo?.message);
    }
    if (form.formState.errors.members) {
      toast.error(form?.formState?.errors?.members?.message);
    }
    if (form.formState.errors.mission) {
      toast.error(form?.formState?.errors?.mission?.message);
    }
    if (form.formState.errors.name) {
      toast.error(form?.formState?.errors?.name?.message);
    }
    if (form.formState.errors.partners) {
      toast.error(form?.formState?.errors?.partners?.message);
    }
    if (form.formState.errors.socials) {
      toast.error(form?.formState?.errors?.socials?.message);
    }
    if (form.formState.errors.vision) {
      toast.error(form?.formState?.errors?.vision?.message);
    }
  }, [form.formState.errors]);
}
