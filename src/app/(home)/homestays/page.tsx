'use client';

import Container from "@/components/container";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import HomestayCard from "./components/HomestayCard";
import useSearch from "./hooks/use-search";

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

const Page = () => {
    const {
        sortedBy,
        searchKey,
        homestays,
        selectedFilters,
        setQueryString
    } = useSearch();
    let filterQuery = '';
    selectedFilters.map((item, index) => {
        filterQuery = filterQuery.concat(Object.keys(item)[0]).concat('=').concat(Object.values(item)[0])
        if(index < selectedFilters.length-1){
            filterQuery = filterQuery.concat('&')
        }
    });
    setQueryString(`?search=${searchKey}&sort=${sortedBy}${filterQuery ? '&'.concat(filterQuery) : ""}`);
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
                                    homestays.map((item: Homestay) => <HomestayCard key={item._id} homestay={item} />)
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
