import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search: React.FC = () => {
    return (
        <div className="w-full">
            <SearchIcon className="text-gray-500 w-4 absolute top-[6px] sm:top-[14px] lg:top-8 left-4 lg:left-8" />
            <Input type="text" className="pl-8 sm:pl-8 lg:pl-12 text-sm lg:h-12" placeholder="Area/Property" />
        </div>
    );
}

export default Search;
