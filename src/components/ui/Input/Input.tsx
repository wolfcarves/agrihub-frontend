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
    <div>
      <label htmlFor={inputId}>
        <Typography.H6 $title={$label} $weight="600" />
      </label>

      <input
        {...props}
        {...{ ref }}
        id={inputId}
        className={`${
          $errorMessage && "border border-red-500"
        } rounded-xl border border-gray-1 w-full mt-2 h-[55px] px-4 placeholder:text-sm`}
      />
      <i>
        <Typography.Span
          $title={$errorMessage}
          $size="sm"
          className="text-red-500"
        />
      </i>
    </div>
  );
};

export default forwardRef(Input);
