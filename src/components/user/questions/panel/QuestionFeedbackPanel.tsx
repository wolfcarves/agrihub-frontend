import React, { Fragment, ReactElement } from "react";
import QuestionFeedBackPanelButton from "../button/QuestionFeedBackPanelButton";
import withRequireAuth from "@higher-order/account/withRequireAuth";

interface QuestionFeedbackPanelProps {
  items?: {
    label?: string;
    icon?: JSX.Element | ReactElement;
    requireAuth?: boolean;
    isVisible?: boolean;
    isButton?: boolean;
    onClick?: (e: React.MouseEvent) => void;
  }[];
}

const QuestionFeedBackPanelButtonAuth = withRequireAuth(
  QuestionFeedBackPanelButton
);

const QuestionFeedbackPanel = ({ items }: QuestionFeedbackPanelProps) => {
  return (
    <div className="flex gap-1.5 items-center mt-auto pt-3">
      {items?.map(
        (
          {
            label,
            icon,
            isButton = true,
            isVisible = true,
            requireAuth,
            onClick
          },
          idx
        ) =>
          !isVisible ? (
            <Fragment key={`${label} ${idx}`} />
          ) : !isButton ? (
            <span
              key={`${label} ${idx}`}
              className="px-1 font-poppins-semibold text-foreground text-sm whitespace-nowrap"
            >
              {label}
            </span>
          ) : requireAuth ? (
            <div
              key={`${label} ${idx}`}
              className="flex gap-3 h-8 border rounded-lg"
              onClick={onClick}
            >
              <QuestionFeedBackPanelButtonAuth title={label} icon={icon} />
            </div>
          ) : (
            <div
              key={`${label} ${idx}`}
              className="flex gap-3 h-8 border rounded-lg"
            >
              <QuestionFeedBackPanelButton
                title={label}
                icon={icon}
                onClick={onClick}
              />
            </div>
          )
      )}
    </div>
  );
};

export default QuestionFeedbackPanel;
