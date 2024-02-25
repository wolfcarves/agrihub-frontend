import { useId, forwardRef, ForwardedRef, useState } from "react";
import {
  Input as ShadInput,
  InputProps as ShadInputProps
} from "@components/ui/input";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

interface InputProps extends ShadInputProps {
  $label?: string;
  $errorMessage?: string;
  $isError?: boolean;
}

const Input = (
  { $label, $errorMessage, className, $isError, type, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputId = useId();
  const [showText, setShowText] = useState<boolean>(false);

  return (
    <div className="relative mt-2">
      <label htmlFor={inputId}>{$label}</label>

      <ShadInput
        ref={ref}
        id={inputId}
        type={showText ? "text" : type}
        className={`${className} ${
          $isError
            ? "border border-red-500"
            : $errorMessage && "border border-red-500"
        } bg-white rounded-2xl text-base border shadow-sm`}
        {...props}
      />

      {type === "password" && (
        <button
          className="absolute bottom-0 top-0 end-3 text-lg text-gray-400"
          onClick={() => setShowText(prev => !prev)}
        >
          {showText ? <PiEyeSlash /> : <PiEyeLight />}
        </button>
      )}

      {$errorMessage && (
        <div className="h-5">
          <span className="text-red-500">{$errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default forwardRef(Input);
