import { Outlet, useLocation } from "react-router-dom";

const UserAccountLayout = () => {
  const pathname = useLocation().pathname;
  const routeWithImage = ["/account/login", "/account/signup"];

  return (
    <main className="flex h-screen min-h-[675px]">
      <div className="flex flex-1 justify-center items-center px-3">
        <div className="flex flex-col justify-center w-full max-w-[28rem] pb-20">
          <Outlet />
        </div>
      </div>

      {routeWithImage.includes(pathname) && (
        <div className="flex-1 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
      )}
    </main>
  );
};

export default UserAccountLayout;
