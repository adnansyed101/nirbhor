import Container from "@/components/container";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div className="h-[480px] rounded-sm p-3 bg-gray-300 relative">
        <Image
          src={"/assets/hero-image.jpg"}
          alt="hero image"
          width={200}
          height={300}
          className="absolute top-0 left-0 w-full h-full"
        />
        hero
      </div>
    </Container>
  );
};

export default Hero;
