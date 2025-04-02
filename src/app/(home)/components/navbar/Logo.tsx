import React from "react";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
  return <h2 className={`text-2xl font-semibold ${className}`}>Nirbhor</h2>;
};

export default Logo;
