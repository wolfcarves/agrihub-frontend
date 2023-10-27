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
        <Typography.H1
          {...{ label }}
          size="base"
          weight={500}
          className="text-black-100"
        />
      </label>

      <input
        {...props}
        {...{ ref }}
        id={inputId}
        className="rounded-xl border-2 border-gray-100 w-full mt-2 h-[55px] px-4 placeholder:text-sm"
      />
    </div>
  );
};

export default forwardRef(Input);
