"use client";

import Link from "next/link";
import { navigation } from "@/constant";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Container from "@/components/container";
import Logo from "@/components/Logo";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const path = usePathname();
  const session = useSession();

  console.log(session.data?.user);

  if (
    path.includes("/dashboard") ||
    path.includes("/login") ||
    path.includes("/register")
  ) {
    return <></>;
  }

  return (
    <>
      <nav className="w-full h-20">
        <Container className=" h-full">
          <div className="flex justify-between items-center h-full">
            <Logo variant="black" />
            <ul className="hidden md:flex gap-x-6 ">
              {navigation.map((navItem) => (
                <li
                  key={navItem.id}
                  className="hover:text-primary transition-all duration-150  text-sm font-medium"
                >
                  <Link href={navItem.path}>
                    <p>{navItem.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
            {session?.data?.user ? (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ) : (
              <div>
                <Link href={"register"}>
                  <Button variant="link" className="cursor-pointer text-back">
                    Create
                  </Button>
                </Link>
                <Link href={"/login"}>
                  <Button>Login</Button>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
