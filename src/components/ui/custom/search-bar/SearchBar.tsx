import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

const SearchBar = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`h-10 md:h-12 w-72 font-poppins-regular rounded-lg focus:border focus:border-input bg-accent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default SearchBar;
