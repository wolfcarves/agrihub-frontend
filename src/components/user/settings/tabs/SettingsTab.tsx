import { Button } from "@components/ui/button";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SettingsTab = () => {
  const pathname = useLocation().pathname;

  const links = [
    {
      id: 1,
      label: "Public Profile",
      href: "/settings/profile",
      isActive: pathname === "/settings/profile"
    },
    {
      id: 2,
      label: "Account Settings",
      href: "/settings/account",
      isActive: pathname === "/settings/account"
    },
    {
      id: 3,
      label: "Authentication",
      href: "/settings/authentication",
      isActive: pathname === "/settings/authentication"
    },
    {
      id: 4,
      label: "Appearance",
      href: "/settings/appearance",
      isActive: pathname === "/settings/appearance"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="border-b-2 lg:border-b-0 lg:border-r-2 w-full h-max lg:max-w-[17rem] py-10">
      <h4 className="font-merri-black text-3xl">Settings</h4>

      <div className="flex flex-row lg:flex-col flex-wrap lg:mt-10">
        {links.map(({ id, label, href, isActive }) => (
          <Link key={id} to={href} className="w-max mt-5">
            <Button
              variant={isActive ? "outline" : "ghost"}
              size="sm"
              className={`rounded-full font-poppins-semibold ${
                !isActive && "text-foreground/70"
              }`}
            >
              {label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsTab;
