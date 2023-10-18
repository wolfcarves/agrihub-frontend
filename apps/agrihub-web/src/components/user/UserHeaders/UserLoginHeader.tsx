import { Typography } from "@packages/agrihub-ui";

import AgrihubLogo from "@icons/agrihub-logo.svg";
import Leaves from "@icons/leaves.svg";

export default function UserLoginHeader() {
  return (
    <div className="flex gap-5 py-12 flex-col justify-center items-center">
      <div className="flex gap-2">
        <img src={AgrihubLogo} alt="agrihub-logo" className="w-6" />

        <Typography.Medium label={"AgriHub"} size="lg" />
      </div>

      <div className="relative">
        <Typography.P label={"Making the world better"} size="base" />

        <img
          src={Leaves}
          alt="agrihub-logo"
          className="absolute -right-5 -top-3 w-10"
        />
      </div>
    </div>
  );
}
