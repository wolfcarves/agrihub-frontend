import { useParams } from "react-router-dom";
import useAuth from "../useAuth";

const useCommunityAutorization = (roles: string[] = []) => {
  const { id } = useParams();
  const { data: UserData } = useAuth();
  const allowedRoles = ["farm_head", ...roles];
  const isAllowed = allowedRoles.includes(UserData?.role || "");
  const isMember = id === UserData?.farm_id;

  return { isAllowed, isMember };
};

export default useCommunityAutorization;
