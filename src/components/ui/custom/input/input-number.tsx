import React, { forwardRef } from "react";
import { cn } from "@lib/utils";
import { NumericFormat } from "react-number-format";
interface InputNumberProps {
  className?: string; // Declare className as an optional string prop
  onChange?: (value: string) => void;
  suffix?: string;
}

const InputNumber = forwardRef(
  ({ className, onChange, suffix, ...rest }: InputNumberProps, ref) => {
    return (
      <NumericFormat
        {...rest}
        getInputRef={ref}
        allowLeadingZeros={false}
        suffix={suffix}
        thousandSeparator=","
        className={cn(
          "flex h-11 w-full bg-transparent rounded-lg border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onValueChange={values => {
          if (onChange) {
            onChange(values.value);
          }
        }}
      />
    );
  }
);

export default InputNumber;
