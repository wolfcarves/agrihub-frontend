import { Button, Input, Typography } from "@components-ui";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-router-dom";
import { UserSetupAccount, userSetupAcountSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputSelect from "@components/ui/Input/InputSelect";
import { getAllowedYears } from "./constant/years";
import useUserProfileCompletion from "@hooks/api/post/useUserProfileCompletion";
import { UserCompletionSchema } from "@api/openapi";
import { MONTHS } from "./constant/months";

export default function UserSetupAccountForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<UserSetupAccount>({
    resolver: zodResolver(userSetupAcountSchema),
    mode: "onChange",
    reValidateMode: "onSubmit"
  });

  const {
    mutateAsync: userSubmitProfile,
    isLoading: isUserSubmitProfileLoading
  } = useUserProfileCompletion();

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
      zipcode: "1118"
    } as UserCompletionSchema;

    try {
      await userSubmitProfile(refinedData);
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Form className="mt-30" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="flex flex-col gap-3">
        <div className="mb-2">
          <Input
            type="text"
            $label="First Name"
            {...register("firstname")}
            $errorMessage={errors.firstname?.message}
          />
        </div>

        <div className="mb-2">
          <Input
            type="text"
            $label="Last Name"
            {...register("lastname")}
            $errorMessage={errors.lastname?.message}
          />
        </div>

        <div>
          <Typography.Span $title={"Date of Birth"} $weight="600" />
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          <Controller
            name="month"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <div className="col-span-4">
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
                <div className="col-span-3">
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

        <div className="mb-2">
          <Input
            type="text"
            $label="Present Address"
            {...register("presentAddress")}
            $errorMessage={errors.presentAddress?.message}
          />
        </div>
      </div>

      <div className="mt-8 pb-10">
        <Button
          $title="Continue"
          $variant="primary"
          $size="lg"
          $fullWidth
          $disabled={isUserSubmitProfileLoading}
          type="submit"
        />
      </div>
    </Form>
  );
}
