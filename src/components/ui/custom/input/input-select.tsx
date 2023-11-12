import Select, { Props as BaseInputSelectProps } from "react-select";
import { useId } from "react";

type Options = { value: number | number; label: string | number };

interface InputSelectProps extends BaseInputSelectProps {
  $label?: string;
  $options: Array<Options>;
  $errorMessage?: string;
}

const InputSelect = ({
  $label,
  $options,
  $errorMessage,
  ...props
}: InputSelectProps) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId} className="m-0">
        <span className="font-medium">{$label}</span>
      </label>

      <Select
        components={{
          IndicatorSeparator: () => null
        }}
        classNames={{
          control: state =>
            state.isFocused
              ? "rounded-xl border border-gray-1 w-full mt-2 h-[55px] px-4 placeholder:text-sm shadow-none"
              : `rounded-xl border border-gray-1 w-full mt-2 h-[55px] px-4 placeholder:text-sm ${
                  $errorMessage && "border border-red-500"
                }`
        }}
        options={$options}
        inputId={selectId}
        isClearable={false}
        isSearchable={false}
        {...props}
      />
      <i>
        <span className="text-red-500">{$errorMessage}</span>
      </i>
    </div>
  );
};

export default InputSelect;
