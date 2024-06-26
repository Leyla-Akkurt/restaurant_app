import Login from "@/app/login/page";
import MobilMenu from "@/components/MobilMenu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        {" "}
        <MobilMenu />
      </div>
      <div className="hidden md:flex gap-4 justify-end items-center flex-1">
        <div className="md:absolute top-3 r-3 lg:static flex bg-orange-300 gap-2 cursor-pointer rounded-md px-1">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>123 45 67</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login </Link>
        ) : (
          <Link href={"/orders"}>Orders </Link>
        )}
        <Link href="/card">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
