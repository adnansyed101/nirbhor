import Link from "next/link";
import Logo from "./Logo";
import { navigation } from "@/constant";
import Button from "@/components/Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
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
                <Button variant="text" className="text-white">
                  Create
                </Button>
              </Link>
              <Link href={"/login"}>
                <Button variant="filled">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
