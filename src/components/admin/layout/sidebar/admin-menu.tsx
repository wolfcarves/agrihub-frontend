import { MdOutlineViewComfy } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineSource } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";

export const adminNavigation = [
  {
    href: "/admin/dashboard",
    name: "Overview",
    icon: <MdOutlineViewComfy size={24} />,
    nav: [
      {
        title: "",
        name: "Dashboard",
        href: "/admin/dashboard"
      }
    ]
  },

  {
    href: "/admin/analytics",
    name: "Analytics",
    icon: <IoAnalyticsSharp size={24} />,
    nav: [
      {
        title: "",
        name: "",
        href: "/admin/analytics"
      }
    ]
  },

  {
    href: "/admin/farm",
    name: "Farm Management",
    icon: <GiFarmTractor size={24} />,
    nav: [
      {
        title: "",
        name: "Overview",
        href: "/admin/farm"
      },
      {
        title: "Farmers",
        name: "Farmers",
        href: "/admin/farm/farmers"
      },
      {
        title: "",
        name: "Reported Accounts",
        href: "/admin/farm/accounts-reported"
      },
      {
        title: "",
        name: "Banned Accounts",
        href: "/admin/farm/accounts-banned"
      },
      {
        title: "Farm Requests",
        name: "Farms",
        href: "/admin/farm/farm-approved"
      },
      {
        title: "",
        name: "Pending",
        href: "/admin/farm/farm-request"
      },

      {
        title: "",
        name: "Rejected",
        href: "/admin/farm/farm-rejected"
      }
    ]
  },

  {
    href: "/admin/resources",
    name: "Resources Management",
    icon: <MdOutlineSource size={24} />,
    nav: [
      {
        title: "",
        name: "Overview",
        href: "/admin/resources"
      },
      {
        title: "Blogs",
        name: "All Blogs",
        href: "/admin/resource/blogs"
      },
      {
        title: "",
        name: "Draft",
        href: "/admin/resource/blogs-drafts"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/resource/blogs-archives"
      },
      {
        title: "Events",
        name: "All Events",
        href: "/admin/resource/events"
      },
      {
        title: "",
        name: "Draft",
        href: "/admin/resource/events-draft"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/resource/events-archives"
      },
      {
        title: "Learning Materials",
        name: "All Learning Materials",
        href: "/admin/resource/learnings"
      },
      {
        title: "",
        name: "Draft",
        href: "/admin/resource/learnings-draft"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/resource/learnings-archives"
      },

      {
        title: "Articles",
        name: "All Articles",
        href: "/admin/resource/articles"
      },
      {
        title: "",
        name: "Draft",
        href: "/admin/resource/articles-draft"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/resource/articles-archives"
      }
    ]
  },

  {
    href: "/admin/forum",
    name: "Forum Management",
    icon: <MdOutlineForum size={24} />,
    nav: [
      {
        title: "",
        name: "Overview",
        href: "/admin/forum"
      },
      {
        title: "Questions",
        name: "All Questions",
        href: "/admin/forum/questions"
      },
      {
        title: "",
        name: "Reported",
        href: "/admin/forum/question-reported"
      },
      {
        title: "",
        name: "Archive",
        href: "/admin/forum/question-archive"
      },
      {
        title: "Tags",
        name: "All Tags",
        href: "/admin/forum/tags"
      }
    ]
  },

  {
    href: "/admin/record/users",
    name: "Users Management",
    icon: <FaRegUser size={24} />,
    nav: [
      {
        title: "Records",
        name: "Users",
        href: "/admin/record/users"
      },
      {
        title: "",
        name: "Reported Accounts",
        href: "/admin/record/user-reported"
      },
      {
        title: "",
        name: "Banned Accounts",
        href: "/admin/record/user-banned"
      }
    ]
  },

  {
    href: "/admin/record/admins",
    name: "Admin Management",
    icon: <MdOutlineAdminPanelSettings size={24} />,
    nav: [
      {
        title: "Records",
        name: "Admins",
        href: "/admin/record/admins"
      },
      {
        title: "",
        name: "Disabled Accounts",
        href: "/admin/record/admin-disabled"
      }
    ]
  },
  {
    href: "/admin/record/activity-logs",
    name: "Activity Logs",
    icon: <RxActivityLog size={24} />,
    nav: [
      {
        title: "Records",
        name: "Arcivities",
        href: "/admin/record/activity-logs"
      }
    ]
  }
];
