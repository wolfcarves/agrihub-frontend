import { MdOutlineViewComfy } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineSource } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { FaRegEdit, FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { ReactNode } from "react";
import { module_keys } from "../../../../higher-order/account/withAuthGuard";
import { RiCommunityLine } from "react-icons/ri";

interface NavItem {
  title: string;
  name: string;
  href: string;
  module: module_keys;
}

interface AdminNavigationItem {
  href: string;
  name: string;
  icon: ReactNode;
  module: module_keys;
  nav: NavItem[];
}

export const adminNavigation: AdminNavigationItem[] = [
  {
    href: "/admin/dashboard",
    name: "Overview",
    icon: <MdOutlineViewComfy size={24} />,
    module: "id",
    nav: [
      {
        title: "",
        name: "Dashboard",
        href: "/admin/dashboard",
        module: "id"
      }
    ]
  },

  {
    href: "/admin/analytics",
    name: "Analytics",
    icon: <IoAnalyticsSharp size={24} />,
    module: "id",
    nav: [
      {
        title: "",
        name: "Analytics",
        href: "/admin/analytics",
        module: "id"
      }
    ]
  },

  {
    href: "/admin/community",
    name: "Community Management",
    icon: <RiCommunityLine size={24} />,
    module: "farms",
    nav: [
      {
        title: "",
        name: "Farms",
        href: "/admin/community/farms",
        module: "farms"
      },
      {
        title: "",
        name: "Seedling Request",
        href: "/admin/community/seedling-request",
        module: "farms"
      },
      {
        title: "",
        name: "Problem List",
        href: "/admin/community/problems",
        module: "farms"
      }
    ]
  },

  {
    href: "/admin/resources",
    name: "Resources Management",
    icon: <MdOutlineSource size={24} />,
    module: "id",
    nav: [
      {
        title: "",
        name: "Blogs",
        href: "/admin/resource/blogs",
        module: "blog"
      },
      {
        title: "",
        name: "Events",
        href: "/admin/resource/events",
        module: "event"
      },
      {
        title: "",
        name: "Learning Materials",
        href: "/admin/resource/learnings",
        module: "learning"
      }
    ]
  },

  {
    href: "/admin/forum",
    name: "Forum Management",
    icon: <MdOutlineForum size={24} />,
    module: "forums",
    nav: [
      {
        title: "",
        name: "Questions",
        href: "/admin/forum/questions",
        module: "forums"
      },
      {
        title: "",
        name: "Tags",
        href: "/admin/forum/tags",
        module: "forums"
      }
    ]
  },

  {
    href: "/admin/record/users",
    name: "Users Management",
    icon: <FaRegUser size={24} />,
    module: "users",
    nav: [
      {
        title: "",
        name: "Users",
        href: "/admin/record/users",
        module: "id"
      }
    ]
  },

  {
    href: "/admin/record/admins",
    name: "Admin Management",
    icon: <MdOutlineAdminPanelSettings size={24} />,
    module: "admin",
    nav: [
      {
        title: "",
        name: "Admins",
        href: "/admin/record/admins",
        module: "admin"
      }
    ]
  },
  {
    href: "/admin/website/client-details",
    name: "Website Management",
    icon: <FaRegEdit size={24} />,
    module: "id",
    nav: [
      {
        title: "",
        name: "Center for Urban Agriculture and Innovation",
        href: "/admin/website/client-details",
        module: "cuai"
      },
      {
        title: "",
        name: "Home Page",
        href: "/admin/website/home",
        module: "home"
      },
      {
        title: "",
        name: "About Us",
        href: "/admin/website/about-us",
        module: "about"
      },
      {
        title: "",
        name: "Privacy Policy",
        href: "/admin/website/privacy-policy",
        module: "privacy_policy"
      },
      {
        title: "",
        name: "Terms and Conditions",
        href: "/admin/website/terms-conditions",
        module: "terms_and_conditions"
      },
      {
        title: "",
        name: "User Feedbacks",
        href: "/admin/website/user-feedback",
        module: "user_feedback"
      },
      {
        title: "",
        name: "Help Center",
        href: "/admin/website/help-center",
        module: "help_center"
      },
      {
        title: "",
        name: "Crops",
        href: "/admin/website/crops",
        module: "crops"
      }
    ]
  },
  {
    href: "/admin/record/activity-logs",
    name: "Activity Logs",
    icon: <RxActivityLog size={24} />,
    module: "id",
    nav: [
      {
        title: "Records",
        name: "Arcivities",
        href: "/admin/record/activity-logs",
        module: "id"
      }
    ]
  }
];
