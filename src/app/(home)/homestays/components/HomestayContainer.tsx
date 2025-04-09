'use client';

import useSearch from "../hooks/use-search";
import HomestayCard from "./HomestayCard";

interface Homestay {
    _id: string;
    title: string;
    description: string;
    homestaysType: string;
    homeowner: string;
    location: {
        address: string;
        city: string;
        country: string;
    };
    pricePerNight: number;
    bedrooms: number;
    maxGuests: number;
    amenities: string[];
    images: string[];
    availability: boolean;
    bookingCount: number;
    createdAt: string;
    updatedAt: string;

}

const HomestayContainer = () => {
    const {
        homestays,
    } = useSearch();
    return (
        <div className="space-y-3">
            {
                homestays.length
                    ?
                    homestays.map((item: Homestay) => <HomestayCard key={item._id} homestay={item} />)
                    :
                    <h5>Loading</h5>
            }
        </div>
    );
}

export default HomestayContainer;
