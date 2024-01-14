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
      className="flex items-center gap-5 h-11 px-3 rounded-lg hover:bg-accent opacity-80 hover:opacity-100 duration-200"
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
      {icon && <div className="text-lg">{icon}</div>}
      {title && (
        <span className="hidden md:block font-poppins-bold text-foreground">
          {title}
        </span>
      )}
    </QuestionFeedBackPanelButtonWrapper>
  );
};

export default QuestionFeedBackPanelButton;
