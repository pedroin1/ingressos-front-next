import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaPlus } from "react-icons/fa6";

export default function NavBar() {
  return (
    <div className="flex max-w-full items-center justify-items-stretch rounded-2xl bg-bar px-6 py-4 shadow">
      <div className="flex grow items-center justify-between">
        <Link
          className="flex items-center gap-2 hover:bg-secondary rounded-xl p-2"
          href={"/event/criarEvento"}
        >
          <FaPlus />
          Criar Evento
        </Link>
        <Link href={"/"} className="mx-auto">
          <img src={"logo.svg"} className="w-56 min-w-32" alt="image-logo" />
        </Link>
        <Link
          href={"/checkout"}
          className="min-h-6 min-w-6 grow-0 items-center"
        >
          <div className="px-2 py-2 rounded-xl hover:bg-secondary">
            <FaCartShopping className="text-[#c1c1c1]" size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
}
