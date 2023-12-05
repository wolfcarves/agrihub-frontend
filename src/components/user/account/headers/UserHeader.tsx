import { BaseHeader } from "@components/ui/custom";
import AgrihubLogo from "@icons/agrihub-logo.svg";
import { Link } from "react-router-dom";

export default function UserHeader() {
  return (
    <BaseHeader
      logo={
        <Link to={"/"}>
          <img src={AgrihubLogo} />
        </Link>
      }
    />
  );
}
