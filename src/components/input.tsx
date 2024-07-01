import { ComponentProps } from "react";

export default function InputComponent({
  label,
  type,
  className,
  height,
  width,
  hasError,
  messageError,
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1 ${width} ${height}`}>
      <div className="flex gap-2 items-center flex-shrink-0">
        <label className="whitespace-nowrap" htmlFor={`input-${label}`}>
          {label}
        </label>
        {hasError && <p className="text-red-400 text-xs">* {messageError}</p>}
      </div>
      <input
        id={`input-${label}`}
        type={type}
        className={`rounded-sm py-1 px-2 bg-primary placeholder-gray-600 ${className}`}
        {...props}
      />
    </div>
  );
}

type InputProps = ComponentProps<"input"> & {
  label: string;
  type: string;
  className?: string;
  width?: string;
  height?: string;
  hasError?: string | boolean | undefined;
  messageError?: string | undefined;
};
