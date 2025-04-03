'use client';

import Container from "@/components/container";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { useState } from "react";
import HomestayCard from "./components/HomestayCard";

interface Homestay {
    _id: string,
    title: string,
    description: string,
    type: "apartment" | "house" | "cottage" | "cabin",
    homeowner: string,
    location: {
        address: string,
        city: string,
        country: string,
        coordinates: number[],
    },
    pricePerNight: number,
    bedrooms: number,
    bathrooms: number,
    maxGuests: number,
    amenities: string[],
    images: string[],
    availability: boolean,
    createdAt: string,

}

const data: Homestay[] = [
    {
        "_id": "661d1a1f0a1b2c3d4e5f6789",
        "title": "Cozy Apartment in Dhaka",
        "description": "A comfortable apartment in the heart of the city.",
        "type": "apartment",
        "homeowner": "660a9f0b1a2c3d4e5f678901",
        "location": {
            "address": "123 Gulshan Ave",
            "city": "Dhaka",
            "country": "Bangladesh",
            "coordinates": [90.4125, 23.8103]
        },
        "pricePerNight": 2000,
        "bedrooms": 2,
        "bathrooms": 1,
        "maxGuests": 4,
        "amenities": ["WiFi", "Air Conditioning", "TV"],
        "images": [
            "https://www.kingliving.com.sg/pub/media/blog/indoor-outdoor-living/Hero.jpg",
            "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
            "https://houseandhome.com/wp-content/uploads/2024/08/Slice4_Feature-3.jpg",
            "https://houses.eyrc.com/hubfs/EYRC%20Architects%20Crescent%20Drive%20Residence%20Indoor%20Outdoor%20Home.jpg",
            "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639"
        ],
        "availability": true,
        "createdAt": "2025-04-01T10:00:00Z"
    },
    {
        "_id": "661d1a2b0a1b2c3d4e5f6790",
        "title": "Lakeview Cottage in Sylhet",
        "description": "A beautiful cottage with a scenic lake view.",
        "type": "cottage",
        "homeowner": "660a9f1b1a2c3d4e5f678902",
        "location": {
            "address": "Lakeside Rd, Sylhet",
            "city": "Sylhet",
            "country": "Bangladesh",
            "coordinates": [91.8690, 24.8949]
        },
        "pricePerNight": 1250,
        "bedrooms": 3,
        "bathrooms": 2,
        "maxGuests": 6,
        "amenities": ["Lake View", "BBQ", "WiFi"],
        "images": [
            "https://houseandhome.com/wp-content/uploads/2024/08/Slice4_Feature-3.jpg",
            "https://www.kingliving.com.sg/pub/media/blog/indoor-outdoor-living/Hero.jpg",
            "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
            "https://houses.eyrc.com/hubfs/EYRC%20Architects%20Crescent%20Drive%20Residence%20Indoor%20Outdoor%20Home.jpg",
            "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639"
        ],
        "availability": true,
        "createdAt": "2025-04-02T12:00:00Z"
    },
    {
        "_id": "661d1a3c0a1b2c3d4e5f6791",
        "title": "Mountain Cabin in Bandarban",
        "description": "A peaceful cabin surrounded by nature.",
        "type": "cabin",
        "homeowner": "660a9f2b1a2c3d4e5f678903",
        "location": {
            "address": "Hillside, Bandarban",
            "city": "Bandarban",
            "country": "Bangladesh",
            "coordinates": [92.2257, 21.8311]
        },
        "pricePerNight": 1500,
        "bedrooms": 2,
        "bathrooms": 1,
        "maxGuests": 5,
        "amenities": ["Mountain View", "Fireplace", "WiFi"],
        "images": [
            "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639",
            "https://houseandhome.com/wp-content/uploads/2024/08/Slice4_Feature-3.jpg",
            "https://www.kingliving.com.sg/pub/media/blog/indoor-outdoor-living/Hero.jpg",
            "https://houses.eyrc.com/hubfs/EYRC%20Architects%20Crescent%20Drive%20Residence%20Indoor%20Outdoor%20Home.jpg",
            "https://www.organicswings.com/cdn/shop/articles/Private-Residence-Anmore-BC-Innotech-Windows-Doors-11-web_1200x1200_crop_center.jpg?v=1623849639"
        ],
        "availability": true,
        "createdAt": "2025-04-03T14:00:00Z"
    }
];



const Page = () => {
    const [homestays, setHomestays] = useState<Homestay[]>(data);
    return (
        <Container>
            <div className="flex justify-between py-3 flex-col">
                <div className="mb-3 lg:mb-5">
                    <h3 className="text-primary text-2xl lg:text-4xl font-bold">All Homestays </h3>
                    <p className="text-lg font-medium">0 Homestays found</p>
                </div>
                <div className="flex justify-between">
                    <div className="max-sm:hidden w-1/5">
                        <SideBar />
                    </div>
                    <div className="w-full sm:w-[79%] space-y-3">
                        <div className="bg-white shadow rounded-md p-2 lg:p-5">
                            <TopBar />
                        </div>
                        <div className="space-y-3">
                            {
                                homestays.length
                                    ?
                                    homestays.map(item => <HomestayCard key={item._id} homestay={item} />)
                                    :
                                    <h5>Loading</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Page;
