import { Outlet } from "react-router-dom";

const EventsLayout = () => {
  return (
    <div className="flex flex-col">
      <Outlet />
    </div>
  );
};

export default EventsLayout;
