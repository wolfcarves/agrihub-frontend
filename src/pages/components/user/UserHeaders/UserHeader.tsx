import { Typography, BaseHeader } from "@components-ui";

export default function UserHeader() {
  return (
    <BaseHeader logo={<Typography.H4 $label={"Agrihub"} $weight="600" />} />
  );
}
