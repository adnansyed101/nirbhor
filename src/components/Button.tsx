import clsx from "clsx";

interface props {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  buttonProps?: object;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean | undefined;
  name?: string | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  variant?: "text" | "outline" | "filled"; // <<--- could be changed
}

const Button: React.FC<props> = ({
  children,
  variant,
  className,
  ...buttonProps
}) => {
  const classes = clsx(
    // default classes
    `px-3 py-1.5 rounded cursor-pointer font-medium transition-all duration-100  ${className} `,

    variant === "text" && "", // <-- work it later

    variant === "outline" && "border",

    variant === "filled" && "bg-white text-black"
  );
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
};

export default Button;
