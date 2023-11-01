import { BaseHeader, Typography } from "@packages/agrihub-ui";

export default function UserHeader() {
  return (
    <BaseHeader logo={<Typography.H5 $label={"Agrihub"} $weight="500" />} />
  );
}
