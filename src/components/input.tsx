import { ComponentProps } from "react";

export default function InputComponent({
  label,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="w-fit" htmlFor={`input-${label}`}>
        {label}
      </label>
      <input
        id={`input-${label}`}
        className={`rounded-sm py-1 px-2 bg-primary placeholder-gray-600 ${className}`}
        {...props}
      />
    </div>
  );
}

type InputProps = ComponentProps<"input"> & {
  label: string;
  className?: string;
};
