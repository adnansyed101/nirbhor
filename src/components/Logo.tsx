import clsx from "clsx";
import Link from "next/link";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return <Link href="/" className={clsx(className, 'text-4xl text-primary font-bold')} >Nirbhor</Link>
}

export default Logo;
