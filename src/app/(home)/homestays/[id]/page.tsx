import { Metadata } from "next";
import ImageCarousel from "./components/ImageCarousel";
import HomestayData from "./components/HomestayData";
import BottomBar from "./components/BottomBar";
import GoBack from "./components/GoBack";
import Image from "next/image";
import Container from "@/components/container";

const data = [
  {
    _id: "661d1a1f0a1b2c3d4e5f6789",
    title: "Cozy Apartment in Dhaka",
    description: "A comfortable apartment in the heart of the city.",
    homestaysType: "apartment",
    homeowner: "660a9f0b1a2c3d4e5f678901",
    location: {
      address: "123 Gulshan Ave",
      city: "Dhaka",
      country: "Bangladesh",
    },
    pricePerNight: 2000,
    bedrooms: 2,
    maxGuests: 4,
    amenities: ["WiFi", "Air Conditioning", "TV"],
    images: [
      "https://www.kingliving.com.sg/pub/media/blog/indoor-outdoor-living/Hero.jpg",
      "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
      "https://houseandhome.com/wp-content/uploads/2024/08/Slice4_Feature-3.jpg",
      "https://houses.eyrc.com/hubfs/EYRC%20Architects%20Crescent%20Drive%20Residence%20Indoor%20Outdoor%20Home.jpg",
      "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
    ],
    availability: true,
    createdAt: "2025-04-01T10:00:00Z",
    updatedAt: "2025-04-03T14:00:00Z",
    bookingCount: 0,
  },
  {
    _id: "661d1a2b0a1b2c3d4e5f6790",
    title: "Lakeview Cottage in Sylhet",
    description: "A beautiful cottage with a scenic lake view.",
    homestaysType: "cottage",
    homeowner: "660a9f1b1a2c3d4e5f678902",
    location: {
      address: "Lakeside Rd, Sylhet",
      city: "Sylhet",
      country: "Bangladesh",
    },
    pricePerNight: 1250,
    bedrooms: 3,
    maxGuests: 6,
    amenities: ["Lake View", "BBQ", "WiFi"],
    images: [
      "https://houseandhome.com/wp-content/uploads/2024/08/Slice4_Feature-3.jpg",
      "https://www.kingliving.com.sg/pub/media/blog/indoor-outdoor-living/Hero.jpg",
      "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
      "https://houses.eyrc.com/hubfs/EYRC%20Architects%20Crescent%20Drive%20Residence%20Indoor%20Outdoor%20Home.jpg",
      "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
    ],
    availability: true,
    createdAt: "2025-04-02T12:00:00Z",
    updatedAt: "2025-04-03T14:00:00Z",
    bookingCount: 0,
  },
  {
    _id: "661d1a3c0a1b2c3d4e5f6791",
    title: "Mountain Cabin in Bandarban",
    description: "A peaceful cabin surrounded by nature.",
    homestaysType: "cabin",
    homeowner: "660a9f2b1a2c3d4e5f678903",
    location: {
      address: "Hillside, Bandarban",
      city: "Bandarban",
      country: "Bangladesh",
    },
    pricePerNight: 1500,
    bedrooms: 2,
    maxGuests: 5,
    amenities: ["Mountain View", "Fireplace", "WiFi"],
    images: [
      "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
      "https://houseandhome.com/wp-content/uploads/2024/08/Slice4_Feature-3.jpg",
      "https://www.kingliving.com.sg/pub/media/blog/indoor-outdoor-living/Hero.jpg",
      "https://houses.eyrc.com/hubfs/EYRC%20Architects%20Crescent%20Drive%20Residence%20Indoor%20Outdoor%20Home.jpg",
      "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
    ],
    availability: true,
    createdAt: "2025-04-03T14:00:00Z",
    updatedAt: "2025-04-03T14:00:00Z",
    bookingCount: 0,
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

const getHomestay = async (id: string) => {
  const homestay = data.find((item) => item._id === id);
  return homestay;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const homestay = await getHomestay(id);
  return { title: homestay?.title };
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const homestay = await getHomestay(id);
  if (!homestay) {
    throw new Error("Homestay not found!");
  }
  const { _id, images, pricePerNight, maxGuests } = homestay;
  return (
    <div className="relative">
      <div className="">
        <div className="sm:hidden">
          <GoBack />
        </div>
        <div className="sm:hidden">
          <ImageCarousel images={images} />
        </div>
        <div className="hidden sm:block">
          <Container>
            <div className="grid grid-cols-4 gap-2 lg:gap-3">
              {images.map((img, index) => (
                <Image
                  key={_id}
                  src={img}
                  width={100}
                  height={100}
                  className={`w-full h-full object-cover rounded ${
                    index === 0 ? "row-span-2 col-span-2" : ""
                  }`}
                  alt="Homestay Image"
                />
              ))}
            </div>
          </Container>
        </div>
        <div className="sm:flex sm:w-11/12 lg:w-4/5 mx-auto gap-5">
          <div className="sm:w-3/4">
            <HomestayData homestay={homestay} />
          </div>
          <div className="flex-1 sm:my-5">
            <div className="max-sm:fixed bottom-0 z-10 w-full">
              <BottomBar pricePerNight={pricePerNight} maxGuests={maxGuests} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
