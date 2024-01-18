import { timeAgo } from "@components/lib/utils";
import { Link } from "react-router-dom";

interface QuestionUserProfileButtonProps {
  avatarSrc?: string;
  username?: string;
  createdAt?: string;
}

//Papalitan ko pa to pero di pa ko sure
const QuestionUserProfileButton = ({
  avatarSrc,
  username,
  createdAt
}: QuestionUserProfileButtonProps) => {
  return (
    <div className="flex gap-4">
      <img
        src={avatarSrc}
        className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg select-none"
      />

      <div>
        <Link to="/">
          <h6 className="font-poppins-medium hover:opacity-80">{username}</h6>
        </Link>
        <p className="text-gray-400 text-sm">{timeAgo(createdAt || "")}</p>
      </div>
    </div>
  );
};

export default QuestionUserProfileButton;
