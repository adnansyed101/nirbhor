"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

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
interface Filterby {
  [key: string]: string;
}

interface SearchData {
  sortedBy: string;
  setSortedBy: React.Dispatch<React.SetStateAction<string>>;
  searchKey: string;
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
  homestays: Homestay[];
  setHomestays: React.Dispatch<React.SetStateAction<Homestay[]>>;
  selectedFilters: Filterby[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<Filterby[]>>;
  setQueryString: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SearchData | null>(null);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [sortedBy, setSortedBy] = useState<string>("recent");
  const [searchKey, setSearchKey] = useState<string>("");
  const [homestays, setHomestays] = useState<Homestay[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Filterby[]>([]);
  const [queryString, setQueryString] = useState<string>("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/homestays`)
      .then((res) => res.json())
      .then((data) => {
        console.log({ data, logged: "line no 55" });
        setHomestays(data);
      });
  }, [queryString]);

  useEffect(() => {
    let filterQuery = "";
    selectedFilters.map((item, index) => {
      filterQuery = filterQuery
        .concat(Object.keys(item)[0])
        .concat("=")
        .concat(Object.values(item)[0]);
      if (index < selectedFilters.length - 1) {
        filterQuery = filterQuery.concat("&");
      }
    });
    setQueryString(
      `?search=${searchKey}&sort=${sortedBy}${
        filterQuery ? "&".concat(filterQuery) : ""
      }`
    );
  }, [searchKey, sortedBy, selectedFilters]);

  const searchData: SearchData = {
    sortedBy,
    setSortedBy,
    searchKey,
    setSearchKey,
    homestays,
    setHomestays,
    selectedFilters,
    setSelectedFilters,
    setQueryString,
  };

  console.log(queryString);

  return (
    <SearchContext.Provider value={searchData}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
