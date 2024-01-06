import AgrihubLogo from "@icons/AgrihubLogo";
import { Link } from "react-router-dom";

const UserAccountHeader = () => {
  return (
    <div className="fixed top-0 h-20 flex items-center">
      <Link to="/">
        <AgrihubLogo size="base" />
      </Link>
    </div>
  );
};

export default UserAccountHeader;
