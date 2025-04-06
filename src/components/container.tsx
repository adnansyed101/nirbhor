import clsx from "clsx";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={clsx(
        className,
        `2xl:w-7xl 2xl:px-5  xl:px-12 lg:px-10 mx-auto mx:px-8 px-3`
      )}
    >
      {children}
    </section>
  );
};

export default Container;
