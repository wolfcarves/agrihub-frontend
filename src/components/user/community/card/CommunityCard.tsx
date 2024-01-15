import withRequireAuth from "@higher-order/account/withRequireAuth";
import useAuth from "@hooks/useAuth";
import { Link } from "react-router-dom";

interface CommunityCardProps {
  id?: string;
  title?: string;
  description?: string;
}

const CommunityCardTitle = withRequireAuth(({ title }: { title?: string }) => {
  const user = useAuth();

  if (!user.isAuthenticated) {
    return <span className="text-blue-500 hover:text-blue-700">{title}</span>;
  }

  return (
    <Link to="/" className="text-blue-500 hover:text-blue-700">
      {title}
    </Link>
  );
});

const CommunityCard = ({ id, title, description }: CommunityCardProps) => {
  return (
    <div className="flex flex-col w-full h-44 border rounded-md p-4 shadow-md">
      <div className="flex gap-3">
        <img
          src="https://yt3.googleusercontent.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s900-c-k-c0x00ffffff-no-rj"
          className="w-10 h-10 rounded-lg bg-slate-500 object-center object-cover"
        />
        <div className="flex flex-col">
          <CommunityCardTitle title="Kuya Rodel's Farm" />
          <span className="text-sm">11k members </span>
        </div>
      </div>
      <p className="text-sm my-auto line-clamp-3">{description}</p>
    </div>
  );
};

export default CommunityCard;
