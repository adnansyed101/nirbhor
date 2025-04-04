
import * as React from "react";
import {
  Star,
  Award,
  Building,
  Sprout,
  HandCoins,
  MoveRight,
} from "lucide-react";
import aboutUsBannerImage from "../../../public/assets/about_us_banner.jpg";
import aboutUsContact from "../../../public/assets/aboutUs_contact.jpg";
import AboutUs1 from "../../../public/assets/aboutus01.jpg";
import AboutUs2 from "../../../public/assets/about02.jpg";
import AboutUs3 from "../../../public/assets/about03.jpg";
import AboutUs4 from "../../../public/assets/about04.jpg";

// Carousel imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <section>
      <section>
        {/* about us banner section */}
        <div
          className="bg-cover bg-center h-84 flex flex-col justify-center items-center text-white"
          style={{ backgroundImage: `url(${aboutUsBannerImage.src})` }}
        >
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider">
            About Us
          </h2>
          <h3 className="text-xl mt-2">
            <a href="#">Nirbhor</a>
          </h3>
        </div>

        {/* welcome home section with some image and text */}
        <div className="container mx-auto md:grid md:grid-cols-2 md:gap-6 mt-24 px-4 xl:px-0">
          {/* welcome home left side */}
          <div>
            <h1 className="uppercase text-xl md:text-5xl tracking-wide">
              Welcome Home
            </h1>
            <h3 className="text-lg uppercase tracking-widest mt-2 text-orange-800 font-semibold">
              some word about us
            </h3>

            <h2 className="text-sm md:text-lg font-semibold py-8 md:w-10/12">
              Ami Homestay is located in seclusion amidst three hills in Coorg
              in the State of Karnataka.
            </h2>

            <p>
              Escape from the hustle and hassle of your everyday routine and
              come away to the Ami Homestay, where a serene world awaits you.
              Throw off all your worries and slip into the scenic, relaxed
              atmosphere and be pampered and rejuvenated..
            </p>

            {/* Guest satisfaction section */}
            <div className="mt-8">
              <p className="flex items-center gap-3">
                <span>
                  <Award size={50} />
                </span>
                <span className="text-sm md:text-lg font-semibold">
                  Top Ranked Value Homestay in Dhaka, Bangladesh
                </span>
              </p>

              <p className="flex items-center gap-3 mt-8">
                <span>
                  <Star size={50} />
                </span>
                <span className="text-sm md:text-lg font-semibold">
                  Consistently High Guest Satisfaction Since 2025
                </span>
              </p>

              {/* ABOUT us image gallery */}
              <div className="container mx-auto relative">
                <div className="flex mt-8 ">
                  <img
                    src={AboutUs2.src}
                    alt="about us image"
                    className="h-80 "
                  />
                  <div className="mt-18 -ml-24 absolute top-20 left-60">
                    <img
                      src={AboutUs3.src}
                      alt="about us image"
                      className="h-80 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* welcome home right side */}
          <div className="mt-5 md:mt-0">
            <img
              src={AboutUs1.src}
              alt="about us image"
              className="h-140 w-full"
            />

            {/* about us more image for right side */}

            <div className="-mt-32">
              <img src={AboutUs4.src} alt="about us image" className="h-80 " />
            </div>
          </div>
        </div>

        {/* why choose us section*/}
        <div className="container mx-auto md:mt-56">
          {/* why choose us head */}
          <div className="text-center mt-18">
            <h2 className="text-xl md:text-4xl uppercase tracking-wider">
              Why Choose us
            </h2>
            <p className="text-sm font-semibold uppercase mt-2 text-orange-800">
              top reasons to choose our homestay
            </p>
          </div>

          {/* why choose use card   */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-16">
            {/* individual card */}
            <div className="flex flex-col items-center justify-center border-r-2 py-14">
              {/* icon */}
              <div className="hover:text-orange-800 transition-all duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-center items-center">
                <p>
                  <Building size={40}></Building>
                </p>
                <h2 className="text-lg md:text-xl uppercase font-semibold py-6 ">
                  Heritage Homestay
                </h2>
              </div>
              <p className="text-[16px] text-gray-500 text-center">
                Experience the charm of Kerala heritage that have been preserved
                throughout the ages.
              </p>
            </div>

            {/* individual card */}
            <div className="flex flex-col items-center justify-center border-r-2 py-14">
              {/* icon */}
              <div className="hover:text-orange-800 transition-all duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-center items-center">
                <p>
                  <Sprout size={40} />
                </p>
                <h2 className="text-lg md:text-xl uppercase font-semibold py-6 ">
                  Live Amidst Nature
                </h2>
              </div>
              <p className="text-[16px] text-gray-500 text-center">
                Feel and experience nature in its fullest glory to refresh
                yourself.
              </p>
            </div>

            {/* individual card */}
            <div className="flex flex-col items-center justify-center border-r-2 py-14">
              {/* icon */}
              <div className="hover:text-orange-800 transition-all duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-center items-center">
                <p>
                  <HandCoins size={40} />
                </p>
                <h2 className="text-lg md:text-xl uppercase font-semibold py-6 ">
                  Family Friendly
                </h2>
              </div>
              <p className="text-[16px] text-gray-500 text-center">
                The calm and comfortable environment will make your family feel
                at home.
              </p>
            </div>
          </div>

          {/* users review */}
          <div className="container mx-auto mt-24 px-4">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-4xl uppercase tracking-wider">Guest Reviews</h2>
              <p className="text-sm font-semibold uppercase mt-2 text-orange-800">
                What our guests say about us
              </p>
            </div>  

            <div className="flex justify-center">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl"
              >
                <CarouselContent>
                  {[
                    {
                      name: "Sarah Johnson",
                      image: "https://shorturl.at/MxmCU",
                      rating: 5,
                      comment: "Absolutely stunning location! The homestay was clean, comfortable, and the hosts were incredibly welcoming."
                    },
                    {
                      name: "Michael Chen",
                      image: "https://shorturl.at/MxmCU",
                      rating: 4,
                      comment: "Great experience overall. The nature views were breathtaking and the food was delicious."
                    },
                    {
                      name: "Priya Patel",
                      image: "https://shorturl.at/MxmCU",
                      rating: 5,
                      comment: "This was the perfect family getaway. Our kids loved the open spaces and we appreciated the peaceful environment."
                    },
                    {
                      name: "David Wilson",
                      image: "https://shorturl.at/MxmCU",
                      rating: 5,
                      comment: "The heritage charm of this place is unmatched. Felt like stepping back in time but with all modern comforts."
                    } 
                  ].map((review, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <Card className="h-full">
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                            <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={20} 
                                  className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                                />
                              ))}
                            </div>
                            <div className="py-8">
                            <img src={review.image}  alt="image" className="w-25 h-25 rounded-full "/>
                            </div>
                          
                            <p className="text-lg font-semibold mb-2">{review.name}</p>
                            <p className="text-gray-600 text-center">"{review.comment}"</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </div>

        {/* contact use section */}

        <div className="mt-24">
          <div
            className="h-110 flex justify-center items-center overflow-hidden transition-all duration-500 ease-in-out relative group"
            style={{
              backgroundImage: `url(${aboutUsContact.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Background overlay that will scale on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{
                backgroundImage: `url(${aboutUsContact.src})`,
              }}
            ></div>

            {/* Content that stays unaffected by the scale */}
            <div className="relative z-10 flex flex-col items-center justify-center py-12 text-white">
              <h2 className="uppercase text-xl md:text-6xl">
                Book Your Stay Now!
              </h2>
              <h3 className="uppercase text-lg md:text-xl font-semibold mt-2 py-2">
                Call us at
              </h3>
              <h2 className="py-2 text-xl">+(880) 15*********</h2>
              <a
                href="#"
                className="flex items-center justify-center bg-orange-600 opacity-70 text-white p-3 w-fit rounded-md px-8 mt-4"
              >
                Contact us
                <span>
                  <MoveRight size={18} className="ml-2 mt-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}