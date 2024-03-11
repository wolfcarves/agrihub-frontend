import { Link, useLocation } from "react-router-dom";

const SettingsTab = () => {
  const pathname = useLocation().pathname;

  const links = [
    {
      id: 1,
      label: "Account",
      href: "/settings/account",
      isActive: pathname === "/settings/account"
    },
    {
      id: 2,
      label: "Profile",
      href: "/settings/profile",
      isActive: pathname === "/settings/profile"
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

  return (
    <div className="flex mt-5 border-b w-full overflow-x-auto">
      {links.map(({ id, label, href, isActive }) => (
        <Link
          key={id}
          to={href}
          className={`${
            isActive
              ? "border-b-[3px] border-b-foreground"
              : "text-foreground/60 hover:text-foreground"
          } font-poppins-bold px-4 py-2`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default SettingsTab;
