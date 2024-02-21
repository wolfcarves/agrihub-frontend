import { useId, forwardRef, ForwardedRef } from "react";
import {
  Input as ShadInput,
  InputProps as ShadInputProps
} from "@components/ui/input";

interface InputProps extends ShadInputProps {
  $label?: string;
  $errorMessage?: string;
  $isError?: boolean;
}

const Input = (
  { $label, $errorMessage, className, $isError, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputId = useId();

  return (
    <div className="mt-2">
      <label htmlFor={inputId}>{$label}</label>

      <ShadInput
        ref={ref}
        id={inputId}
        className={`${className} ${
          $isError
            ? "border border-red-500"
            : $errorMessage && "border border-red-500"
        } bg-white rounded-2xl text-base border shadow-sm`}
        {...props}
      />

      {$errorMessage && (
        <div className="h-5">
          <span className="text-red-500">{$errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Input);
