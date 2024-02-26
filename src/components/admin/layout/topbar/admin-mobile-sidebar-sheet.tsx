import React, { ComponentProps, useState } from "react";
import { UserSidebar, UserSidebarNavLink } from "@components/ui/custom";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/ui/accordion";
import { adminNavigation } from "../sidebar/admin-menu";

type AdminMobileSidebarSheetProps = ComponentProps<"div"> & {
  onLinkClick?: () => void;
};
const AdminMobileSidebarSheet = ({
  className,
  onLinkClick,
  ...props
}: AdminMobileSidebarSheetProps) => {
  const pathname = useLocation().pathname;

  const handleEventClick = () => {
    onLinkClick && onLinkClick();
  };

  const [clickedItem, setClickedItem] = useState<string | null>(null); // Initialize state as null

  const handleClick = (itemName: string) => {
    setClickedItem(prevItem => (prevItem === itemName ? null : itemName)); // Toggle clicked item
  };

  return (
    <UserSidebar
      className={`block sm:hidden overflow-y-auto no-scrollbar ${className}`}
      {...props}
    >
      <Accordion type="single" collapsible className="w-full border-none mb-16">
        {adminNavigation.map((item, idx) => (
          <AccordionItem value={`item-${idx}`} key={idx}>
            <AccordionTrigger
              className="flex justify-between py-4 text-md transition-all no-underline"
              onClick={() => handleClick(item.name)}
            >
              {item.icon}
              {item.name}
            </AccordionTrigger>
            <AccordionContent>
              {clickedItem === item.name &&
                item.nav.map((navItem, navIdx) => (
                  <>
                    <h6 className="font-bold text-gray-800">{navItem.title}</h6>
                    <UserSidebarNavLink
                      key={`${idx}-${navIdx}`}
                      to={navItem.href}
                      title={navItem.name}
                      logo
                      end={pathname === navItem.href}
                      onClick={handleEventClick}
                    />
                  </>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </UserSidebar>
  );
};

export default AdminMobileSidebarSheet;
