import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";

const EventsHead = () => {
  const { id } = useParams();
  const { data } = useAuth();
  const allowedRoles = ["farm_head"];
  const isAllowed = allowedRoles.includes(data?.role || "");
  const isMember = id === data?.farm_id;
  return (
    <div className="flex md:flex-row flex-col items-center justify-between">
      <h3 className=" font-poppins-medium">Events</h3>

      <div className="flex items-center gap-2"></div>
    </div>
  );
};

export default EventsHead;
