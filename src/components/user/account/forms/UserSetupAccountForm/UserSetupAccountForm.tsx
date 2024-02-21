import { useForm } from "react-hook-form";
import { UserSetupAccount, userSetupAcountSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAllowedYears } from "./constant/years";
import useUserSetupAccount from "@hooks/api/post/useUserSetupAccount";
import { UserCompletionSchema } from "@api/openapi";
import { MONTHS } from "./constant/months";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";

export default function UserSetupAccountForm() {
  const form = useForm<UserSetupAccount>({
    resolver: zodResolver(userSetupAcountSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const {
    mutateAsync: userSetupAccountMutate,
    isLoading: isUserSetupAccountLoading,
    isSuccess: isUserSetupAccountSuccess
  } = useUserSetupAccount();

  const { mutateAsync: deleteAuth, isLoading: isDeleteAuthLoading } =
    useDeleteAuthMutate();

  const onSubmitForm = async (data: UserSetupAccount) => {
    const refinedData = {
      firstname: data.firstname,
      lastname: data.lastname,
      birthdate: `${data.year}-${
        Number(data.month) < 10 ? "0" + data.month : data.month
      }-01`,
      present_address: data.presentAddress,
      district: "1",
      municipality: "City",
      zipcode: "1234"
    } as UserCompletionSchema;

    try {
      await userSetupAccountMutate(refinedData);
    } catch (e) {
      console.log(e);
    }
  };

  const years = getAllowedYears();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitForm)}
        className="mt-10 space-y-5"
      >
        <div>
          <FormField
            name="firstname"
            control={form.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Firstname" />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            name="lastname"
            control={form.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Lastname" />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className="">
          <span className="font-medium">Date of Birth</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <FormField
              name="month"
              control={form.control}
              defaultValue={String(MONTHS[0].value)}
              render={({ field, fieldState }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl className="rounded-2xl bg-white h-11 shadow-sm">
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {MONTHS.map(({ label, value }) => (
                          <SelectItem
                            key={label}
                            value={value}
                            className="cursor-pointer"
                          >
                            {label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-1">
            <FormField
              name="year"
              control={form.control}
              defaultValue={String(years[0].value)}
              render={({ field, fieldState }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl className="rounded-2xl bg-white h-11 shadow-sm">
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[300px]">
                      <SelectGroup>
                        {years.map(({ label, value }) => (
                          <SelectItem
                            key={label}
                            value={value}
                            className="cursor-pointer"
                          >
                            {label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>

        <div>
          <FormField
            name="presentAddress"
            control={form.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Home Address" />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col  gap-3 pt-10">
          <Button
            className="w-full"
            isLoading={isUserSetupAccountLoading || isUserSetupAccountSuccess}
          >
            Continue
          </Button>

          <Button
            className="w-full"
            variant="outline"
            onClick={() => deleteAuth()}
            isLoading={isDeleteAuthLoading}
          >
            Use other account instead
          </Button>
        </div>
      </form>
    </Form>
  );
}
