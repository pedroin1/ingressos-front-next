import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full h-12 bg-slate-500 flex align-baseline">
      <Link href={"/checkout"}>Checkout</Link>
    </div>
  );
}
