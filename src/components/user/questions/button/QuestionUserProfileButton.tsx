import { timeAgo } from "@components/lib/utils";

interface QuestionUserProfileButtonProps {
  avatarSrc?: string;
  username?: string;
  createdAt?: string;
}

const QuestionUserProfileButton = ({
  avatarSrc,
  username,
  createdAt
}: QuestionUserProfileButtonProps) => {
  return (
    <div className="flex gap-4">
      <img
        src={avatarSrc}
        className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg"
      />

      <div>
        <h6 className="font-poppins-medium ">{username}</h6>
        <p className="text-gray-400 text-sm">{timeAgo(createdAt || "")}</p>
      </div>
    </div>
  );
};

export default QuestionUserProfileButton;
