import { timeAgo } from "@components/lib/utils";
import { Link } from "react-router-dom";
import { Badge } from "@components/ui/badge";
interface QuestionUserProfileButtonProps {
  userId?: string;
  avatarSrc?: string;
  username?: string;
  role?: string;
  createdAt?: string;
}

//Papalitan ko pa to pero di pa ko sure
const QuestionUserProfileButton = ({
  userId,
  avatarSrc,
  username,
  role,
  createdAt
}: QuestionUserProfileButtonProps) => {
  return (
    <div className="flex gap-4">
      <Link to={`/users/${userId}/${username}`}>
        <img
          src={avatarSrc}
          className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg select-none"
        />
      </Link>

      <div>
        <Link to={`/users/${userId}/${username}`}>
          <h6 className="font-inter-medium hover:opacity-80">
            {username}{" "}
            <Badge variant="outline" className="ms-1">
              <span className="font-poppins-regular">{role}</span>
            </Badge>
          </h6>
        </Link>
        <p className="text-gray-400 text-sm">
          {timeAgo(createdAt?.slice(0, -3) + "Z" || "")}
        </p>
      </div>
    </div>
  );
};

export default QuestionUserProfileButton;
