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
        }  bg-white dark:bg-transparent font-poppins-regular rounded-lg text-base border shadow-sm`}
        {...props}
      />

      {type === "password" && (
        <span
          className="absolute top-[0.75rem] end-3 cursor-pointer text-lg text-gray-400"
          onClick={() => setShowText(prev => !prev)}
        >
          {showText ? <PiEyeSlash /> : <PiEyeLight />}
        </span>
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
