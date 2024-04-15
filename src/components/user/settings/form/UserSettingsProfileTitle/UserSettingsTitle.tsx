import { LuPencil } from "react-icons/lu";

const UserSettingsTitle = ({ title }: { title?: string }) => {
  return (
    <>
      <h3 className="font-poppins-semibold">{title}</h3>
    </>
  );
};

export default UserSettingsTitle;
