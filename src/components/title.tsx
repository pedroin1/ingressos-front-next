import { ComponentProps } from "react";

export default function TitleComponent({
  title,
  className,
  ...props
}: H1Props) {
  return (
    <h1 className={`text-left font-bold text-[24px] ${className}`} {...props}>
      {title}
    </h1>
  );
}

type H1Props = ComponentProps<"h1"> & {
  title: string;
  className?: String;
};
