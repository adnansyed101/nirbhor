import Link from "next/link";
import Logo from "./Logo";
import { navigation } from "@/constant";

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
            {/* <Button /> */}
            <button>Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
