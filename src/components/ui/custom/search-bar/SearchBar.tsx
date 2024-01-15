import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

const SearchBar = (props: InputProps) => {
  return (
    <div className="hidden sm:flex items-center h-full py-3">
      <input
        className="flex h-12 w-72  font-poppins-regular rounded-lg focus:border focus:border-input bg-accent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  );
};

export default SearchBar;
