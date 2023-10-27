import { Typography } from "@packages/agrihub-ui";

export default function UserLoginHeader() {
  return (
    <div className="mb-10">
      <Typography.H1
        label="Sign in"
        size="2xl"
        weight={500}
        className="text-black-100"
      />
    </div>
  );
}
