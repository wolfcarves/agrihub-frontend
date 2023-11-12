import {
  useId,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef
} from "react";

type BaseInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputProps extends BaseInputProps {
  $label?: string;
  $errorMessage?: string;
}

const Input = (
  { $label, $errorMessage, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputId = useId();

  return (
    <div className="mt-2">
      <label htmlFor={inputId}>{$label}</label>

      <input
        ref={ref}
        id={inputId}
        className={`${
          $errorMessage && "border border-red-500"
        } text-base rounded-xl border border-gray-1 w-full mt-2 h-[55px] px-4 placeholder:text-sm  focus:outline-primary-3 focus:shadow-md`}
        {...props}
      />
      <div className="h-5 ">
        <span className="text-red-500">${$errorMessage}</span>
      </div>
    </div>
  );
};

export default forwardRef(Input);
