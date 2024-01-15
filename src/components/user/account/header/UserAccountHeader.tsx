import AgrihubLogo from "@icons/AgrihubLogo";
import { useNavigate } from "react-router-dom";

const UserAccountHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 h-20 flex items-center">
      <div
        className="w-max cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <AgrihubLogo size="base" />
      </div>
    </div>
  );
};

export default UserAccountHeader;
