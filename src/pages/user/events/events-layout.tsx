import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EventsLayout = () => {
  return (
    <>
      <Helmet>
        <title>Events | AgriHub</title>
      </Helmet>

      <div className="flex flex-col">
        <Outlet />
      </div>
    </>
  );
};

export default EventsLayout;
