export default function TitleComponent({ title }: Props) {
  return <h1 className="text-left text-[24px]">{title}</h1>;
}

interface Props {
  title: string;
}
