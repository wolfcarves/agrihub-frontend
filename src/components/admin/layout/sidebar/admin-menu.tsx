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
    href: "/admin/farm",
    name: "Farm Management",
    icon: <GiFarmTractor size={24} />,
    module: "farms",
    nav: [
      {
        title: "",
        name: "Overview",
        href: "/admin/farm",
        module: "id"
      },
      // {
      //   title: "Farmers",
      //   name: "Farmers",
      //   href: "/admin/farm/farmers"
      // },
      // {
      //   title: "",
      //   name: "Reported Accounts",
      //   href: "/admin/farm/accounts-reported"
      // },
      // {
      //   title: "",
      //   name: "Banned Accounts",
      //   href: "/admin/farm/accounts-banned"
      // },
      {
        title: "Farms",
        name: "Farms",
        href: "/admin/farm/farm-approved",
        module: "farms"
      },
      {
        title: "",
        name: "Farm Request",
        href: "/admin/farm/farm-request",
        module: "farms"
      },
      {
        title: "",
        name: "Rejected Request",
        href: "/admin/farm/farm-rejected",
        module: "farms"
      },
      {
        title: "Seedling Request",
        name: "Pending",
        href: "/admin/farm/seedling-pending",
        module: "farms"
      },
      {
        title: "",
        name: "Accepted",
        href: "/admin/farm/seedling-accepted",
        module: "farms"
      },
      {
        title: "",
        name: "Rejected",
        href: "/admin/farm/seedling-rejected",
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
        name: "Overview",
        href: "/admin/resources",
        module: "id"
      },
      {
        title: "Blogs",
        name: "All Blogs",
        href: "/admin/resource/blogs",
        module: "blog"
      },
      {
        title: "",
        name: "Draft",
        href: "/admin/resource/blogs-drafts",
        module: "blog"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/resource/blogs-archives",
        module: "blog"
      },
      {
        title: "Events",
        name: "All Events",
        href: "/admin/resource/events",
        module: "event"
      },
      {
        title: "",
        name: "Draft",
        href: "/admin/resource/events-draft",
        module: "event"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/resource/events-archives",
        module: "event"
      },
      {
        title: "Learning Materials",
        name: "All Learning Materials",
        href: "/admin/resource/learnings",
        module: "learning"
      },
      {
        title: "",
        name: "Draft",
        href: "/admin/resource/learnings-draft",
        module: "learning"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/resource/learnings-archives",
        module: "learning"
      }

      // {
      //   title: "Articles",
      //   name: "All Articles",
      //   href: "/admin/resource/articles"
      // },
      // {
      //   title: "",
      //   name: "Draft",
      //   href: "/admin/resource/articles-draft"
      // },
      // {
      //   title: "",
      //   name: "Archive",
      //   href: "/admin/resource/articles-archives"
      // }
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
        name: "Overview",
        href: "/admin/forum",
        module: "forums"
      },
      {
        title: "Questions",
        name: "All Questions",
        href: "/admin/forum/questions",
        module: "forums"
      },
      {
        title: "",
        name: "Reported",
        href: "/admin/forum/question-reported",
        module: "forums"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/forum/question-archive",
        module: "forums"
      },
      {
        title: "Tags",
        name: "All Tags",
        href: "/admin/forum/tags",
        module: "forums"
      }
    ]
  },

  {
    href: "/admin/record/users",
    name: "Users Management",
    icon: <FaRegUser size={24} />,
    module: "id",
    nav: [
      {
        title: "Records",
        name: "Users",
        href: "/admin/record/users",
        module: "id"
      },
      {
        title: "",
        name: "Reported Accounts",
        href: "/admin/record/user-reported",
        module: "id"
      },
      {
        title: "",
        name: "Banned Accounts",
        href: "/admin/record/user-banned",
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
        title: "Records",
        name: "Admins",
        href: "/admin/record/admins",
        module: "admin"
      },
      {
        title: "",
        name: "Disabled Accounts",
        href: "/admin/record/admin-disabled",
        module: "admin"
      }
    ]
  },
  {
    href: "/admin/website",
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
