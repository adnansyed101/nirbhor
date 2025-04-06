import { MapPin } from "lucide-react";
import Image from "next/image";

interface Homestay {
  _id: string;
  title: string;
  description: string;
  type: "apartment" | "house" | "cottage" | "cabin";
  homeowner: string;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: number[];
  };
  pricePerNight: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  amenities: string[];
  images: string[];
  availability: boolean;
  createdAt: string;
}

const HomestayCard: React.FC<{ homestay: Homestay }> = ({ homestay }) => {
  const { title, type, location, pricePerNight, amenities, images } = homestay;
  return (
    <div className="flex max-sm:flex-col justify-between bg-white shadow rounded-md p-2 lg:p-5 gap-5">
      <div className="w-1/4 grid grid-cols-3 gap-[2px] max-sm:w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "col-span-3 w-full h-48 sm:h-24 lg:h-32" : ""
            } ${index > 3 ? "hidden" : ""}`}
          >
            <Image
              width={100}
              height={100}
              src={image}
              className="w-full h-full object-cover rounded"
              alt={title}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-5 flex-1">
        <div className="sm:w-[48%] max-sm:flex-1 flex flex-col justify-between max-sm:w-full">
          <div className="flex flex-col justify-between sm:gap-3">
            <div className="sm:space-y-2">
              <h2 className="text-lg sm:text-lg lg:text-xl font-bold">
                {title}
              </h2>
              <p className="font-mono font-bold text-primary uppercase max-lg:text-xs">
                {type}
              </p>
            </div>
            <h4 className="flex gap-1 items-center text-gray-600 max-lg:text-xs">
              <MapPin className="w-3 text-primary" />
              {`${location.address}, ${location.city}`}
            </h4>
          </div>
          <div>
            <h3 className="font-bold max-lg:text-xs">
              Amenities:{" "}
              {amenities.map((item, index) => (
                <span key={index} className="font-normal">
                  {" "}
                  {item}{" "}
                </span>
              ))}
            </h3>
          </div>
        </div>
        <div className="w-1/4 text-end sm:flex flex-col justify-between max-sm:space-y-5">
          {/* static data for card design, will modify */}
          <div className="space-y-[2px]">
            <h4 className="font-medium text-primary max-lg:text-xs">
              Excellent
            </h4>
            <div className="flex justify-end">
              <h3 className="lg:text-xl font-medium px-3 py-[2px] rounded-md bg-gray-200">
                4.2
              </h3>
            </div>
            <p className="text-gray-600 text-xs">(100 Ratings)</p>
          </div>
          <h3 className="sm:text-2xl lg:text-3xl font-bold">
            <span className=" text-primary">৳</span> {pricePerNight}
            <span className="text-[10px] lg:text-xs font-normal">
              /Per Night
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomestayCard;
