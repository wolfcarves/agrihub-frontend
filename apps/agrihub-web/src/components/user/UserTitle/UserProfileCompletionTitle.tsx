import { Typography } from "@packages/agrihub-ui";

export default function UserProfileCompletionTitle() {
  return (
    <div className="mb-10">
      <Typography.H1
        label="Complete Details"
        size="2xl"
        weight={500}
        className="text-black-100 tracking-tight"
      />
    </div>
  );
}
