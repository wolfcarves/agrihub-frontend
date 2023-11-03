import React, {
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
  label?: string;
  errorMessage?: string;
}

const Input = (
  { label, errorMessage, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>
        <Typography.H6 $label={label} $weight="600" />
      </label>

      <input
        {...props}
        {...{ ref }}
        id={inputId}
        className="rounded-xl border border-gray-1 w-full mt-2 h-[55px] px-4 placeholder:text-sm"
      />
      {errorMessage && <Typography.H1 $label={errorMessage} />}
    </div>
  );
};

export default forwardRef(Input);
