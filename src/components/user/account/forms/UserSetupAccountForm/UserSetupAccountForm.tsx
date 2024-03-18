import { useForm } from "react-hook-form";
import { UserSetupAccount, userSetupAcountSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserSetupAccount from "@hooks/api/post/useUserSetupAccount";
import { UserCompletionSchema } from "@api/openapi";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@components/ui/popover";
import { Input } from "@components/ui/custom";
import { Button } from "@components/ui/button";
import useDeleteAuthMutate from "@hooks/api/delete/useDeleteAuthMutate";
import { Calendar } from "@components/ui/calendar";
import { LuCalendar } from "react-icons/lu";
import "react-day-picker/dist/style.css";

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
      birthdate: data?.dob.toISOString(),
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

        <div>
          <FormField
            name="dob"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="w-full h-11">
                        <Button variant="outline">
                          {field.value ? (
                            <span className="font-poppins-regular text-base">
                              {format(field.value, "LLLL d, yyyy")}
                            </span>
                          ) : (
                            <span className="font-poppins-regular text-base text-foreground/70">
                              Birth Date
                            </span>
                          )}
                          <LuCalendar className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        classNames={{
                          caption_label:
                            "flex items-center text-sm font-medium",
                          dropdown: "rdp-dropdown",
                          dropdown_icon: "ml-2",
                          dropdown_year: "rdp-dropdown_year ml-3",
                          button: "",
                          button_reset: ""
                        }}
                        fromYear={1900}
                        toYear={new Date().getFullYear() - 19}
                        captionLayout="dropdown-buttons"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
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
