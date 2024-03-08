"use client";
import { Result } from "@/app/login/page";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter()
  // console.log(pathname)
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "GET",
        credentials: "include",
      });
      const json: Result = await response.json();
      if(json.success) router.push('/login')
      // console.log(json.success);
    } catch (error:any) {
      toast.error(error.message)
    }
  };
  return (
    <nav className="px-4 py-2 sm:px-8 md:px-12 flex items-center justify-between bg-neutral-900">
      <div></div>
      <div className="flex items-center gap-x-3 font-semibold">
        <Link href={"/"} className={pathname === "/" ? "active" : "nav-link"}>
          <span>Home</span>
        </Link>
        <Link href={"/profile"} className={pathname === "/profile" ? "active" : "nav-link"}>
          <span>Profile</span>
        </Link>
        <Link
          href={"/login"}
          className={pathname === "/login" ? "active" : "nav-link"}
        >
          <span>Login</span>
        </Link>
        <Link
          href={"/register"}
          className={pathname === "/register" ? "active" : "nav-link"}
        >
          <span>Register</span>
        </Link>
        <div>
          <button
            type="button"
            className="bg-white/80 px-2 py-1 text-black font-bold rounded-md hover:bg-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
