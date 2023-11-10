import {
  useId,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef
} from "react";
import Typography from "../Typography/Typography";

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
      <label htmlFor={inputId}>
        <Typography.Span $title={$label} />
      </label>

      <input
        ref={ref}
        id={inputId}
        className={`${
          $errorMessage && "border border-red-500"
        } text-base rounded-xl border border-gray-1 w-full mt-2 h-[55px] px-4 placeholder:text-sm  focus:outline-primary-3 focus:shadow-md`}
        {...props}
      />
      <div className="h-5 ">
        <Typography.Span
          $title={$errorMessage}
          $size="base"
          className="text-red-500"
        />
      </div>
    </div>
  );
};

export default forwardRef(Input);
