import { ComponentProps, ReactNode } from "react";
import useAuth from "@hooks/useAuth";

interface QuestionFeedBackPanelButtonProps extends ComponentProps<"span"> {
  title?: string;
  icon?: ReactNode;
}

//must remove ...props in order to make requireAuth work
const QuestionFeedBackPanelButtonWrapper = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  const user = useAuth();
  const isAuth = user.isAuthenticated;

  return (
    <span
      role="button"
      className="flex items-center my-auto gap-2 h-full px-2 rounded-lg hover:bg-accent duration-200"
      {...(isAuth ? { ...props } : {})}
    >
      {children}
    </span>
  );
};

const QuestionFeedBackPanelButton = ({
  title,
  icon,
  ...props
}: QuestionFeedBackPanelButtonProps) => {
  return (
    <QuestionFeedBackPanelButtonWrapper {...props}>
      <>
        {icon && <div className="text-lg">{icon}</div>}
        {title && (
          <span className="hidde sm:block font-poppins-semibold text-foreground text-sm whitespace-nowrap">
            {title}
          </span>
        )}
      </>
    </QuestionFeedBackPanelButtonWrapper>
  );
};

export default QuestionFeedBackPanelButton;
