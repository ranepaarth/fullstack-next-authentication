"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  // console.log(pathname)
  return (
    <nav className="px-4 py-2 sm:px-8 md:px-12 flex items-center justify-between bg-neutral-900">
      <div></div>
      <div className="flex items-center gap-x-3 font-semibold">
        <Link href={"/"} className={pathname==='/'?"active":"nav-link"}>
          <span>Home</span>
        </Link>
        <Link href={"/login"} className={pathname==='/login'?"active":"nav-link"}>
          <span>Login</span>
        </Link>
        <Link href={"/register"} className={pathname==='/register'?"active":"nav-link"}>
          <span>Register</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
