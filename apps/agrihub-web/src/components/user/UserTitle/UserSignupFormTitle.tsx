import { Typography } from "@packages/agrihub-ui";

export default function UserSignupFormTitle() {
  return (
    <div className="mb-10">
      <Typography.H1
        label="Create an account"
        size="2xl"
        weight={500}
        className="text-black-100 tracking-tight"
      />
    </div>
  );
}
