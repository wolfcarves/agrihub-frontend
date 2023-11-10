import { Button, Input, Typography } from "@components-ui";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-router-dom";
import { UserSetupAccount, userSetupAcountSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputSelect from "@components/ui/Input/InputSelect";
import { getAllowedYears } from "./constant/years";
import useUserSetupAccount from "@hooks/api/post/useUserSetupAccount";
import { UserCompletionSchema } from "@api/openapi";
import { MONTHS } from "./constant/months";
import { useQueryClient } from "@tanstack/react-query";
import { GET_USER_KEY } from "@hooks/api/get/useGetMyProfileQuery";

export default function UserSetupAccountForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<UserSetupAccount>({
    resolver: zodResolver(userSetupAcountSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const {
    mutateAsync: userSetupAccountMutate,
    isLoading: isUserSetupAccountLoading
  } = useUserSetupAccount();

  const onSubmitForm = async (data: UserSetupAccount) => {
    const refinedData = {
      firstname: data.firstname,
      lastname: data.firstname,
      birthdate: `${data.year}-${
        data.month < 10 ? "0" + data.month : data.month
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

  return (
    <Form className="mt-30" onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        type="text"
        $label="First Name"
        {...register("firstname")}
        $errorMessage={errors.firstname?.message}
      />

      <Input
        type="text"
        $label="Last Name"
        {...register("lastname")}
        $errorMessage={errors.lastname?.message}
      />

      <div className="mb-3">
        <Typography.Span $title={"Date of Birth"} $weight="normal" />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-7">
        <Controller
          name="month"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="col-span-2">
                <InputSelect
                  $label="Month"
                  $options={MONTHS}
                  placeholder=""
                  value={MONTHS.find(m => m.value === value)}
                  onChange={(e: any) => onChange(e.value)}
                  $errorMessage={errors.month?.message}
                />
              </div>
            );
          }}
        />

        <Controller
          name="year"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <div className="col-span-1">
                <InputSelect
                  $label="Year"
                  $options={getAllowedYears()}
                  placeholder=""
                  value={getAllowedYears().find(y => y.value === value)}
                  onChange={(e: any) => onChange(e.value)}
                  $errorMessage={errors.year?.message}
                />
              </div>
            );
          }}
        />
      </div>

      <Input
        type="text"
        $label="Present Address"
        {...register("presentAddress")}
        $errorMessage={errors.presentAddress?.message}
      />

      <div className="mt-8 pb-10">
        <Button
          $title="Continue"
          $variant="primary"
          $size="lg"
          $fullWidth
          $isLoading={isUserSetupAccountLoading}
          $disabled={isUserSetupAccountLoading}
        />
      </div>
    </Form>
  );
}
