import React, { ComponentProps, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { LuPencil } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";

interface SettingsFieldProps extends ComponentProps<"input"> {
  label?: string;
  description?: string;
  errMessage?: string;
  editable?: boolean;
  buttonComponent?: JSX.Element;
  hasForm?: boolean;
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
      ...props
    },
    ref
  ) => {
    if (hasForm) {
      const {
        formState: { isSubmitting }
      } = useFormContext();

      useEffect(() => {
        setToEdit(false);
      }, [isSubmitting]);
    }

    const inputRef = useRef<HTMLInputElement>(null);
    const [toEdit, setToEdit] = useState<boolean>(false);

    const handleClickEdit: React.MouseEventHandler<HTMLButtonElement> = e => {
      e.preventDefault();

      setToEdit(prev => !prev);

      requestAnimationFrame(() => inputRef.current?.focus());
    };

    return (
      <div className="flex gap-3 justify-between">
        <div className="w-full">
          <div className="flex gap-3 items-center my-auto">
            {label && <h5 className="font-poppins-medium">{label}</h5>}

            <span className="text-destructive">{errMessage}</span>
          </div>

          <div className="py-2">
            <p>{description}</p>
          </div>

          <input
            ref={inputRef}
            disabled={toEdit ? false : true}
            className="font-poppins-medium text-md mt-3 text-foreground/60 outline-0 bg-transparent w-full fill-transparent autofill:shadow-[inset_0_0_0px_1000px_#FAFFFD] dark:autofill:shadow-[inset_0_0_0px_1000px_#1A1D1C]"
            autoComplete="off"
            {...props}
          />
        </div>

        {editable && (
          <button
            className="flex gap-2 items-center opacity-70 hover:opacity-100"
            onClick={handleClickEdit}
          >
            {toEdit ? <MdOutlineCancel size={16} /> : <LuPencil size={16} />}
            <span className="text-sm">{toEdit ? "Cancel" : "Edit"}</span>
          </button>
        )}

        {buttonComponent}
      </div>
    );
  }
);

export default SettingsField;
