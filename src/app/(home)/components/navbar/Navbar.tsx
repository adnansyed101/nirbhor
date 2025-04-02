"use client";

import Link from "next/link";
import Logo from "./Logo";
import { navigation } from "@/constant";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Container from "@/components/container";

const Navbar = () => {
  const path = usePathname();

  if (
    path.includes("/dashboard") ||
    path.includes("/login") ||
    path.includes("/register")
  ) {
    return <></>;
  }

  return (
    <>
      <nav className="w-full h-20 bg-emerald-800 sticky top-0">
        <Container className=" h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              {navigation.map((navItem) => (
                <li key={navItem.id}>
                  <Link href={navItem.path}>
                    <p>{navItem.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <Link href={"register"}>
                <Button
                  variant="link"
                  className="cursor-pointer text-white hover:text-white"
                >
                  Create
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button className="bg-white text-black  hover:bg-white/95 cursor-pointer">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
