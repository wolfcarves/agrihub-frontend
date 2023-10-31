import { BaseHeader, Typography } from "@packages/agrihub-ui";

export default function UserHeader() {
  return (
    <BaseHeader
      logo={
        <Typography.H1 label={"Agrihub"} size="md" className="text-black-1" />
      }
    />
  );
}
