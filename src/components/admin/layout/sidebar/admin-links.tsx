import { MdAdminPanelSettings } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineSource } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { FaRegEdit, FaUserCog, FaUsers } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { ReactNode } from "react";
import { module_keys } from "../../../../higher-order/account/withAuthGuard";
import { RiCommunityLine, RiDashboardFill } from "react-icons/ri";
import { BsFillFolderSymlinkFill } from "react-icons/bs";

type DropdownItem = {
  icon: ReactNode;
  title: string;
  link: string;
  module: module_keys;
  end?: string[];
};

type NavigationItem = {
  link?: string;
  title: string;
  icon: ReactNode;
  module: module_keys;
  type: "drop" | "nav";
  items?: DropdownItem[];
};

export const adminNavigation: NavigationItem[] = [
  {
    link: "/admin/dashboard",
    title: "Overview",
    icon: <RiDashboardFill size={24} />,
    module: "id",
    type: "nav"
  },

  {
    link: "/admin/analytics",
    title: "Analytics",
    icon: <IoAnalyticsSharp size={24} />,
    module: "id",
    type: "nav"
  },
  // Test icon in items. just add random icons it will not display
  {
    title: "Community",
    icon: <FaUsers size={24} />,
    module: "farms",
    type: "drop",
    items: [
      {
        icon: <RiCommunityLine size={24} />,
        title: "Community Overview",
        link: "/admin/communities",
        module: "farms",
        end: [
          "/admin/community/farms",
          "/admin/community/farms-application",
          "/admin/community/seedling-request",
          "/admin/community/problems",
          "/admin/community/problems/view/:problemId"
        ]
      },
      {
        icon: <RiCommunityLine size={24} />,
        title: "Community Farms",
        link: "/admin/community/farms",
        module: "farms"
      },
      {
        icon: <RiCommunityLine size={24} />,
        title: "Farms Application",
        link: "/admin/community/farms-application",
        module: "farms"
      },
      {
        icon: <RiCommunityLine size={24} />,
        title: "Problem List",
        link: "/admin/community/problems",
        module: "farms"
      },
      {
        icon: <RiCommunityLine size={24} />,
        title: "Seedling Request",
        link: "/admin/community/seedling-request",
        module: "farms"
      },
      {
        icon: <RiCommunityLine size={24} />,
        title: "Tool Request",
        link: "/admin/community/tool-request",
        module: "farms"
      }
    ]
  },

  {
    title: "Resources",
    icon: <BsFillFolderSymlinkFill size={22} />,
    module: "id",
    type: "drop",
    items: [
      {
        icon: <MdOutlineSource size={24} />,
        title: "Resource Overview",
        link: "/admin/resources",
        module: "blog",
        end: [
          "/admin/resource/blogs",
          "/admin/resource/events",
          "/admin/resource/learnings"
        ]
      },
      {
        icon: <MdOutlineSource size={24} />,
        title: "Blogs",
        link: "/admin/resource/blogs",
        module: "blog"
      },
      {
        icon: <MdOutlineSource size={24} />,
        title: "Events",
        link: "/admin/resource/events",
        module: "event"
      },
      {
        icon: <MdOutlineSource size={24} />,
        title: "Learning Materials",
        link: "/admin/resource/learnings",
        module: "learning"
      },

      {
        icon: <FaRegEdit size={24} />,
        title: "Crops",
        link: "/admin/website/crops",
        module: "crops"
      }
    ]
  },

  {
    title: "Forum",
    icon: <MdOutlineForum size={24} />,
    module: "forums",
    type: "drop",
    items: [
      {
        icon: <MdOutlineForum size={24} />,
        title: "Forums Overview",
        link: "/admin/forum",
        module: "forums",
        end: ["/admin/forum/questions", "/admin/forum/tags"]
      },
      {
        icon: <MdOutlineForum size={24} />,
        title: "Questions",
        link: "/admin/forum/questions",
        module: "forums"
      },
      {
        icon: <MdOutlineForum size={24} />,
        title: "Tags",
        link: "/admin/forum/tags",
        module: "forums"
      }
    ]
  },

  {
    link: "/admin/record/users",
    title: "Users Management",
    icon: <FaUserCog size={23} />,
    module: "users",
    type: "nav"
  },

  {
    link: "/admin/record/admins",
    title: "Admin Management",
    icon: <MdAdminPanelSettings size={24} />,
    module: "admin",
    type: "nav"
  },
  {
    title: "Web Management",
    icon: <FaRegEdit size={20} />,
    module: "id",
    type: "drop",
    items: [
      {
        icon: <FaRegEdit size={24} />,
        title: "CUAI Details",
        link: "/admin/website/client-details",
        module: "cuai"
      },
      {
        icon: <FaRegEdit size={24} />,
        title: "Home Page",
        link: "/admin/website/home",
        module: "home"
      },
      {
        icon: <FaRegEdit size={24} />,
        title: "About Us",
        link: "/admin/website/about-us",
        module: "about"
      },
      {
        icon: <FaRegEdit size={24} />,
        title: "Privacy Policy",
        link: "/admin/website/privacy-policy",
        module: "privacy_policy"
      },
      {
        icon: <FaRegEdit size={24} />,
        title: "Terms and Conditions",
        link: "/admin/website/terms-conditions",
        module: "terms_and_conditions"
      },
      {
        icon: <FaRegEdit size={24} />,
        title: "User Feedbacks",
        link: "/admin/website/user-feedback",
        module: "user_feedback"
      }
    ]
  },
  {
    link: "/admin/record/activity-logs",
    title: "Activity Logs",
    icon: <RxActivityLog size={20} />,
    module: "id",
    type: "nav"
  }
];

// {
//   title: "",
//   name: "Help Center",
//   link: "/admin/website/help-center",
//   module: "help_center"
// }
type dropdownTypes = {
  community: string[];
  resources: string[];
  forum: string[];
  web: string[];
};
export const dropdownLinks: dropdownTypes = {
  community: [
    "/admin/community",
    "/admin/community/farms",
    "/admin/community/farms-application",
    "/admin/community/seedling-request",
    "/admin/community/problems"
  ],
  resources: [
    "/admin/resources",
    "/admin/resource/blogs",
    "/admin/resource/events",
    "/admin/resource/learnings"
  ],
  forum: ["/admin/forum", "/admin/forum/questions", "/admin/forum/tags"],
  web: [
    "/admin/website/client-details",
    "/admin/website/home",
    "/admin/website/about-us",
    "/admin/website/privacy-policy",
    "/admin/website/terms-conditions",
    "/admin/website/user-feedback",
    "/admin/website/crops"
  ]
};
