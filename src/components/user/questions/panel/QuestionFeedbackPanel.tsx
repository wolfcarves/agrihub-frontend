import React, { ComponentProps } from "react";
import withRequireAuth from "@higher-order/account/withRequireAuth";
import useAuth from "@hooks/useAuth";

interface QuestionFeedbackPanelProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

const QuestionFeedbackPanel = ({
  children,
  className
}: QuestionFeedbackPanelProps) => {
  return (
    <div className={`flex gap-1.5 items-center mt-1 ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement<QuestionFeedbackPanelItemProps>(child)) {
          const props = child.props;

          return React.cloneElement(child, {
            ...props
          });
        }

        return child;
      })}
    </div>
  );
};

interface QuestionFeedbackPanelItemProps extends ComponentProps<"button"> {
  children?: React.ReactNode;
  icon?: () => React.ReactNode;
  title?: string;
}

const QuestionFeedbackPanelItem = ({
  children,
  icon,
  title,
  ...props
}: QuestionFeedbackPanelItemProps) => {
  return (
    <button
      className="flex items-center my-auto gap-2 px-2 py-1.5 rounded-lg hover:bg-accent duration-200 bg-white dark:bg-background border"
      {...props}
    >
      <>
        {children ?? (
          <>
            <div className="text-md sm:text-lg">{icon && icon()}</div>

            {title && (
              <span className="text-xs sm:text-sm font-poppins-semibold text-foreground whitespace-nowrap">
                {title}
              </span>
            )}
          </>
        )}
      </>
    </button>
  );
};

QuestionFeedbackPanel.Item = QuestionFeedbackPanelItem;

const QuestionFeedbackPanelItemWithAuth = ({
  children,
  icon,
  title,
  onClick,
  ...props
}: QuestionFeedbackPanelItemProps) => {
  const user = useAuth();

  return (
    <button
      className="flex items-center my-auto gap-1 px-2 py-1.5 rounded-lg hover:bg-accent duration-200 bg-white dark:bg-background border"
      onClick={user.isAuthenticated ? onClick : undefined}
      {...props}
    >
      <>
        {children ?? (
          <>
            <div className="text-md sm:text-lg">{icon && icon()}</div>

            {title && (
              <span className="text-sm font-poppins-semibold text-foreground whitespace-nowrap">
                {title}
              </span>
            )}
          </>
        )}
      </>
    </button>
  );
};

QuestionFeedbackPanel.ItemWithAuth = withRequireAuth(
  QuestionFeedbackPanelItemWithAuth
);

export default QuestionFeedbackPanel;
