import React, { ComponentProps, useRef, useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";

interface SettingsFieldProps extends ComponentProps<"input"> {
  label?: string;
  errMessage?: string;
  editable?: boolean;
}

const SettingsField = React.forwardRef<HTMLInputElement, SettingsFieldProps>(
  ({ label, errMessage, editable = true, disabled, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [toEdit, setToEdit] = useState<boolean>(false);

    const handleClickEdit: React.MouseEventHandler<HTMLButtonElement> = e => {
      e.preventDefault();

      setToEdit(prev => !prev);

      requestAnimationFrame(() => inputRef.current?.focus());
    };

    return (
      <div className="flex gap-3 items-center justify-between ">
        <div className="w-full">
          <div className="flex gap-3 items-center">
            <h5 className="font-merri-black">{label}</h5>
            <span className="text-destructive">{errMessage}</span>
          </div>

          <input
            ref={inputRef}
            disabled={toEdit ? false : true}
            className="font-poppins-medium text-md mt-3 text-foreground/60 outline-0 bg-transparent w-full fill-transparent autofill:shadow-[inset_0_0_0px_1000px_#FAFFFD] dark:autofill:shadow-[inset_0_0_0px_1000px_#1A1D1C]"
            {...props}
          />
        </div>

        {editable && (
          <button
            className="opacity-70 hover:opacity-100"
            onClick={handleClickEdit}
          >
            {toEdit ? <MdOutlineCancel size={20} /> : <LuPencil size={18} />}
          </button>
        )}
      </div>
    );
  }
);

export default SettingsField;
