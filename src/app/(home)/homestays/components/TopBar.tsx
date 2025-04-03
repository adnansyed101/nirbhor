'use-client'

import { Button } from "@/components/ui/button";
import Search from "./Search";
import Dropdown from "./Dropdown";
import FilterDrawer from "./FilterDrawer";

const TopBar: React.FC = () => {
    return (
        <div className="flex justify-between lg:h-12 sm:border-2 rounded-lg relative gap-2">
            <div className="sm:hidden">
                <Search  />
            </div>
            <div className="sm:hidden">
                <Dropdown />
            </div>
            <div className="sm:hidden">
                <FilterDrawer />
            </div>
            <div className="hidden sm:flex w-full justify-between px-2">
                <div className="flex justify-between items-center w-20">
                    <h4 className="text-sm">Sort By</h4>
                </div>
                <div className="flex justify-between items-center flex-1">
                    <Button variant="secondary" className="bg-primary text-white">Recent</Button>
                    |
                    <Button variant="secondary">Popular</Button>
                    |
                    <Button variant="secondary">Price <span className="text-[10px]">(Highest first)</span></Button>
                    |
                    <Button variant="secondary">Price <span className="text-[10px]">(Lowest first)</span></Button>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
