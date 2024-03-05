import React from "react";

const UserSettingsTitle = ({ title }: { title?: string }) => {
  return (
    <>
      <h4 className="font-poppins-medium mt-10">{title}</h4>
    </>
  );
};

export default UserSettingsTitle;
