import Image from "next/image";
import Link from "next/link";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  return (
    <div className="flex max-w-full items-center justify-items-stretch rounded-2xl bg-bar px-6 py-4 shadow">
      <div className="flex grow items-center justify-between">
        <Link
          className="flex items-center gap-2 hover:backdrop-brightness-200 rounded-2xl p-2"
          href={"/event/criarEvento"}
        >
          <FaPlus />
          Criar Evento
        </Link>
        <Link href={"/"} className="mx-auto">
          <Image
            src={"logo.svg"}
            width={156}
            height={64}
            alt="image"
            priority={true}
          />
        </Link>
        <Link
          href={"/checkout"}
          className="min-h-6 min-w-6 grow-0 items-center"
        >
          <div className="w-10 h-10 bg-white rounded-[50%] flex justify-center items-center">
            <BsFillCartCheckFill className="text-black" size={18} />
          </div>
        </Link>
      </div>
    </div>
  );
}
