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
}

const Input = (
  { label, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>
        <Typography.Light {...{ label }} size="base" />
      </label>

      <input
        {...props}
        {...{ ref }}
        id={inputId}
        className="rounded-full border w-full mt-2 py-2.5 px-4 placeholder:text-sm text-sm focus:outline-2 focus:outline-green-500"
      />
    </div>
  );
};

export default forwardRef(Input);
