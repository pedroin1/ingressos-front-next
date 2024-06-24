export default function TitleComponent({ title }: Props) {
  return (
    <h1
      className="text-left font-bold
   text-[24px]"
    >
      {title}
    </h1>
  );
}

interface Props {
  title: string;
}
