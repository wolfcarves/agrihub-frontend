import React from "react";

import { cn } from "@components/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@components/ui/navigation-menu";
import { Link, NavLink } from "react-router-dom";

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];

const UserHeaderNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-poppins-medium"
                : "text-neutral-700 font-poppins-medium"
            }
          >
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <span>Home</span>
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink
            to="/forum"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-poppins-medium"
                : "text-neutral-700 font-poppins-medium"
            }
          >
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <span>Forum</span>
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className={` font-poppins-medium`}>Communtiy</span>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <span className="mb-2 mt-4 text-md font-poppins-semibold">
                      Farm Communities
                    </span>
                    <p className="text-sm leading-tight text-muted-foreground font-poppins-medium">
                      Being part of a community farm means enjoying shared
                      resources, learning from others, fostering social
                      connections, and reaping the benefits of collective
                      farming efforts.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>

              <ListItem
                href="/docs"
                title="My Farm"
                className="font-poppins-regular"
              >
                <span>Manage, contribute to your joined farm</span>
              </ListItem>

              <ListItem
                href="/docs"
                title="Farm Communites"
                className="font-poppins-regular"
              >
                Here you will see the list of available farms you can join
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <span className="font-poppins-medium">Resources</span>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map(component => (
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

const ListItem = ({ className, title, children, ...props }: AnchorProps) => {
  return (
    <Link to="/sample">
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
