import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(timestamp: string) {
  const currentDate: any = new Date();
  const previousDate: any = new Date(timestamp);

  const seconds = Math.floor((currentDate - previousDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  let result;

  switch (true) {
    case seconds < 60:
      result = seconds + " seconds ago";
      break;
    case minutes === 1:
      result = "a minute ago";
      break;
    case minutes < 60:
      result = minutes + " minutes ago";
      break;
    case hours === 1:
      result = "an hour ago";
      break;
    case hours < 24:
      result = hours + " hours ago";
      break;
    case days === 1:
      result = "a day ago";
      break;
    case days < 30:
      result = days + " days ago";
      break;
    case months === 1:
      result = "a month ago";
      break;
    case months < 12:
      result = months + " months ago";
      break;
    case years === 1:
      result = "a year ago";
      break;
    default:
      result = years + " years ago";
      break;
  }

  return result;
}

export function timeAgo2(timestamp: string) {
  const currentDate: any = new Date();

  // Truncate microseconds and parse the date
  const parsedTimestamp = timestamp.substring(0, 19);
  const previousDate: any = new Date(
    Date.parse(parsedTimestamp.replace(" ", "T") + "Z")
  );

  const seconds = Math.floor((currentDate - previousDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  let result;

  switch (true) {
    case seconds < 60:
      result = seconds + " seconds ago";
      break;
    case minutes === 1:
      result = "a minute ago";
      break;
    case minutes < 60:
      result = minutes + " minutes ago";
      break;
    case hours === 1:
      result = "an hour ago";
      break;
    case hours < 24:
      result = hours + " hours ago";
      break;
    case days === 1:
      result = "a day ago";
      break;
    case days < 30:
      result = days + " days ago";
      break;
    case months === 1:
      result = "a month ago";
      break;
    case months < 12:
      result = months + " months ago";
      break;
    case years === 1:
      result = "a year ago";
      break;
    default:
      result = years + " years ago";
      break;
  }

  return result;
}

export function formatDateTime(dateTimeString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC"
  };
  const eventStartDate = new Date(dateTimeString);
  const formattedDateTime = `${eventStartDate.toLocaleDateString(
    "en-US",
    options
  )}`;
  return formattedDateTime;
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const eventStartDate = new Date(dateString);
  const formattedDate = `${eventStartDate.toLocaleDateString(
    "en-US",
    options
  )}`;
  return formattedDate;
}

export function formatRoles(role: string) {
  let formatedRole;

  switch (role) {
    case "member":
      formatedRole = "Member";
      break;
    case "asst_admin":
      formatedRole = "Assistant Admin";
      break;
    case "admin":
      formatedRole = "Admin";
      break;
    case "farm_head":
      formatedRole = "Farm Head";
      break;
    case "farmer":
      formatedRole = "Farmer";
      break;
    default:
      formatedRole = "Undefined";
  }
  return formatedRole;
}

export const convertToEmbedLink = (link: string) => {
  const regex =
    /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = link.match(regex);
  const videoId = match ? match[1] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    return link;
  }
};

export function formatDateString(inputDate: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date = new Date(inputDate);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Function to add ordinal suffix to the day
  const addOrdinalSuffix = (day: number) => {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  };

  const formattedDate = `${month} ${addOrdinalSuffix(day)}, ${year}`;
  return formattedDate;
}

export function formatImage(img: string) {
  const formattedImg = `${import.meta.env.VITE_S3_BUCKET_BASEURL}${img}`;
  return formattedImg;
}

export const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

export function getLastParameter(urlString: string) {
  // Create a new URL object
  const url = new URL(urlString);

  const pathname = url.pathname;
  const segments = pathname.split("/");
  const lastParameter = segments[segments.length - 1];

  return lastParameter;
}

export function parseValidString(item: string) {
  if (isValidUrl(item)) {
    return getLastParameter(item);
  }

  return item;
}

export function concatPresentTime(dateString: string) {
  const presentTime = new Date().toLocaleTimeString("en-US", { hour12: false });
  return `${dateString}T${presentTime}`;
}

export function removeTimeFromDate(dateString: string) {
  const parts = dateString.split("T");
  return parts[0];
}

export function formatMonth(monthNumber: string): string | null {
  // Parse the monthNumber to integer
  const monthNum = parseInt(monthNumber);

  // Array containing month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Check if the input is a valid month number
  if (monthNum >= 1 && monthNum <= 12) {
    return months[monthNum - 1];
  } else {
    return null;
  }
}

export function formatNumberWithCommas(number: number) {
  // Convert number to string
  let numberString = number.toString();

  // Split the string into parts if it has a decimal
  let parts = numberString.split(".");

  // Get the whole number part
  let wholeNumber = parts[0];

  // Add commas to separate thousands
  let formattedNumber = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Add back the decimal part if it exists
  if (parts.length > 1) {
    formattedNumber += "." + parts[1];
  }

  return formattedNumber;
}
