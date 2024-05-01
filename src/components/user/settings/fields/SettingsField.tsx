import React, { ComponentProps, useRef } from "react";

interface SettingsFieldProps extends ComponentProps<"input"> {
  label?: string;
  description?: string;
  errMessage?: string;
  editable?: boolean;
  buttonComponent?: JSX.Element;
  hasForm?: boolean;
  renderInput?: () => React.ReactNode;
}

const SettingsField = React.forwardRef<HTMLInputElement, SettingsFieldProps>(
  (
    {
      label,
      description,
      errMessage,
      editable = true,
      disabled,
      buttonComponent,
      hasForm = true,
      renderInput,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div className="flex gap-3 items-start justify-between">
        <div className="w-full">
          <div className="flex gap-3 items-center my-auto">
            {label && <h5 className="font-poppins-medium">{label}</h5>}

            <span className="text-destructive">{errMessage}</span>
          </div>

          <div className="py-2">
            <p>{description}</p>
          </div>

          {(renderInput && (
            <div onClick={e => e.preventDefault()}>{renderInput()}</div>
          )) ?? (
            <input
              ref={inputRef}
              disabled={editable ? false : true}
              className={`font-poppins-regular text-md mt-3 text-foreground  /80 outline-0 bg-transparent w-full fill-transparent autofill:shadow-[inset_0_0_0px_1000px_#FAFFFD] dark:autofill:shadow-[inset_0_0_0px_1000px_#1A1D1C] ${
                !editable && "text-foreground/30"
              }`}
              autoComplete="off"
              {...props}
            />
          )}
        </div>

        {buttonComponent}
      </div>
    );
  }
);

export default SettingsField;
