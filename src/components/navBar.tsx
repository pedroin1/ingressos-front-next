import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex max-w-full items-center justify-items-stretch rounded-2xl bg-bar px-6 py-2 shadow">
      <div className="flex grow items-center justify-between">
        <Link href={"/"} className="mx-auto">
          <Image
            src={"logo.svg"}
            width={156}
            height={48}
            alt="image"
            className="max-h-[48px]"
          />
        </Link>
        <Link
          href={"/checkout"}
          className="min-h-6 min-w-6 grow-0 items-center"
        >
          <Image src={"logo.svg"} width={24} height={24} alt="carrinho" />
        </Link>
      </div>
    </div>
  );
}
