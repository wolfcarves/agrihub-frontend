// import { Button, Input, Typography } from "@components-ui";
import { useForm, Controller } from "react-hook-form";
import { UserSetupAccount, userSetupAcountSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
// import InputSelect from "@components/ui/Input/InputSelect";
import { getAllowedYears } from "./constant/years";
import useUserSetupAccount from "@hooks/api/post/useUserSetupAccount";
import { UserCompletionSchema } from "@api/openapi";
import { MONTHS } from "./constant/months";
import { useQueryClient } from "@tanstack/react-query";
import { GET_USER_KEY } from "@hooks/api/get/useGetMyProfileQuery";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

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

  const onSubmitForm = async (data: UserSetupAccount) => {
    const refinedData = {
      firstname: data.firstname,
      lastname: data.firstname,
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
        className="mt-10 space-y-3"
      >
        <div>
          <FormField
            name="firstname"
            control={form.control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Firstname</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Lastname</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <FormLabel>Month</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl className="rounded-lg h-11">
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {MONTHS.map(({ label, value }) => (
                          <SelectItem key={label} value={value}>
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
                  <FormLabel>Year</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl className="rounded-lg h-11">
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[300px]">
                      <SelectGroup>
                        {years.map(({ label, value }) => (
                          <SelectItem key={label} value={value}>
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
                <FormLabel>Present Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <div className="pt-10">
          <Button
            className="w-full"
            size={"lg"}
            disabled={isUserSetupAccountLoading || isUserSetupAccountSuccess}
          >
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
