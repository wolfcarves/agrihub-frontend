import { ComponentProps, ReactElement } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import withRequireAuth from "@higher-order/account/withRequireAuth";
import useAuth from "@hooks/useAuth";

interface QuestionCardDropdownProps {
  items?: {
    label: string;
    icon: ReactElement | JSX.Element;
    onClick: () => void;
  }[];
}

const DropdownMenuItem = ({ onClick, ...props }: ComponentProps<"button">) => {
  const user = useAuth();
  return (
    <button onClick={user.isAuthenticated ? onClick : () => {}} {...props} />
  );
};

const DropdownMenuItemAuth = withRequireAuth(DropdownMenuItem);

const QuestionCardDropdown = ({ items }: QuestionCardDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          className="text-xl p-1.5 rounded-md hover:bg-accent opacity-80 hover:opacity-100 cursor-pointer duration-200"
          onClick={e => {
            e.preventDefault();
          }}
        >
          <BsThreeDots />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex w-max" align="end">
        {items?.map(({ label, icon, onClick }) => (
          <DropdownMenuItemAuth
            className="flex flex-row w-full rounded-md cursor-pointer py-2.5 px-3 hover:bg-accent"
            onClick={onClick}
          >
            {icon}
            <span className="ps-2 font-poppins-semibold opacity-90">
              {label}
            </span>
          </DropdownMenuItemAuth>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default QuestionCardDropdown;
