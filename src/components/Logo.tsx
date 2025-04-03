import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC<{ className?: string; variant: "white" | "black" }> = ({
  className,
  variant,
}) => {
  return (
    <Link href="/" className={clsx(className, " flex items-center")}>
      <Image
        src={variant === "white" ? "/assets/brand2.png" : "/assets/brand1.png"}
        alt="brand logo"
        width={120}
        height={100}
      />
    </Link>
  );
};

export default Logo;
