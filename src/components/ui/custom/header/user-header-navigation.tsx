import { cn } from "@components/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@components/ui/navigation-menu";
import { Link, NavLink, useMatch } from "react-router-dom";

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Articles",
    href: "/article",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Blogs",
    href: "/blog",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Events",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "About",
    href: "/about",
    description: "Visually or semantically separates content."
  }
];

const UserHeaderNavigation = () => {
  return (
    <NavigationMenu delayDuration={0} className="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem className="flex h-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-full font-poppins-medium text-primary text-sm px-8 hover:bg-slate-100/50 border-b-[2px] border-b-primary duration-200"
                : "flex items-center h-full font-poppins-medium text-foreground text-sm px-8 hover:bg-slate-100/50 duration-200"
            }
          >
            <span>Home</span>
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="flex h-20">
          <NavLink
            to="/forum"
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-full font-poppins-medium text-primary text-sm px-8 hover:bg-slate-100/50 border-b-[2px] border-b-primary duration-200"
                : "flex items-center h-full font-poppins-medium text-foreground text-sm px-8 hover:bg-slate-100/50 duration-200"
            }
          >
            <span>Forum</span>
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="flex h-20">
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive
                ? "flex items-center h-full font-poppins-medium text-primary text-sm px-8 hover:bg-slate-100/50 border-b-[2px] border-b-primary duration-200"
                : "flex items-center h-full font-poppins-medium text-foreground text-sm px-8 hover:bg-slate-100/50 duration-200"
            }
          >
            <span>Community</span>
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${
              useMatch("/resources")
                ? "flex items-center h-20 font-poppins-medium text-primary text-sm px-8 hover:bg-slate-100/50 border-b-[2px] border-b-primary rounded-none duration-200"
                : "flex items-center h-20 rounded-none font-poppins-medium text-foreground text-sm px-8 bg-transparent hover:bg-slate-100/50 duration-200"
            }`}
          >
            <span className={`font-poppins-medium`}>Resources</span>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] list-none">
              {resources.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: AnchorProps) => {
  return (
    <Link to={href as string}>
      <li>
        <NavigationMenuLink asChild>
          <span
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <span className="text-sm font-poppins-medium leading-none">
              {title}
            </span>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground font-poppins-regular">
              {children}
            </p>
          </span>
        </NavigationMenuLink>
      </li>
    </Link>
  );
};

ListItem.displayName = "ListItem";

export default UserHeaderNavigation;
