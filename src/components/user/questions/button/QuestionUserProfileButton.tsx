import { useNavigate } from "react-router-dom";
import { Badge } from "@components/ui/badge";
import useParseUserRole from "@hooks/utils/useParseUserRole";
import withRequireAuth from "@higher-order/account/withRequireAuth";
import useAuth from "@hooks/useAuth";
import { timeAgo } from "@components/lib/utils";

interface QuestionUserProfileButtonProps {
  userId?: string;
  avatarSrc?: string;
  username?: string;
  role?: string;
  createdAt?: string;
}

const QuestionUserProfileImage = withRequireAuth(
  ({
    userId,
    username,
    avatarSrc
  }: {
    userId?: string;
    avatarSrc?: string;
    username?: string;
  }) => {
    const navigate = useNavigate();
    const user = useAuth();

    return (
      <img
        src={avatarSrc}
        className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg select-none cursor-pointer"
        onClick={() => {
          user?.data ? navigate(`/users/${userId}/${username}`) : null;
        }}
      />
    );
  }
);

const QuestionUserProfileUsername = ({
  userId,
  username,
  role,
  createdAt
}: {
  userId?: string;
  username?: string;
  role?: string;
  createdAt?: string;
}) => {
  const navigate = useNavigate();
  const user = useAuth();

  const html = () => (
    <span
      className="cursor-pointer"
      onClick={() => {
        user?.data ? navigate(`/users/${userId}/${username}`) : null;
      }}
    >
      <h6 className="font-inter-medium hover:opacity-80">{username}</h6>
    </span>
  );

  const UsernameComponent = withRequireAuth(html);

  return (
    <div>
      <div className="flex">
        <UsernameComponent />

        {role && (
          <Badge variant="outline" className="ms-1.5">
            <span className="font-poppins-regular">
              {useParseUserRole(role)}
            </span>
          </Badge>
        )}
      </div>
      <span className="text-gray-400 text-sm">
        {timeAgo(createdAt?.slice(0, -3) + "Z" || "")}
      </span>
    </div>
  );
};

const QuestionUserProfileButton = ({
  userId,
  avatarSrc,
  username,
  role,
  createdAt
}: QuestionUserProfileButtonProps) => {
  return (
    <div className="flex gap-4">
      <QuestionUserProfileImage
        userId={userId}
        username={username}
        avatarSrc={avatarSrc}
      />

      <QuestionUserProfileUsername
        userId={userId}
        username={username}
        role={role}
        createdAt={createdAt}
      />
    </div>
  );
};

export default QuestionUserProfileButton;
