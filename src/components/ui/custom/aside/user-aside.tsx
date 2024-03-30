import type { ComponentProps } from "react";

const UserAsideItemContent = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div {...props} className={`${className}`}>
      {children}
    </div>
  );
};

const UserAsideItem = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={`${className} flex text-sm items-center justify-between py-1.5 hover:opacity-80`}
    >
      {children}
    </div>
  );
};

const UserAsideTitle = ({ className, ...props }: ComponentProps<"h6">) => {
  return <h6 {...props} className={`${className} font-poppins-medium`} />;
};

const UserAside = ({ children, className }: ComponentProps<"div">) => {
  return (
    <div
      className={`${className} sticky top-20 flex flex-col border-l h-[calc(100vh-3.5rem)] min-w-[16rem] max-w-[16rem] py-10 px-2`}
    >
      <div className="relative overflow-auto h-full scroll-smooth custom-scroll pr-3">
        {children}
      </div>
    </div>
  );
};

export { UserAside, UserAsideItem, UserAsideTitle, UserAsideItemContent };
