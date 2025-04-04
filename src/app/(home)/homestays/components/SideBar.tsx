import Filters from "./Filters";
import Search from "./Search";

const SideBar: React.FC<{setSearchKey: React.Dispatch<React.SetStateAction<string>>}> = ({setSearchKey}) => {
    return (
        <aside className="relative space-y-3 lg:space-y-5 bg-white p-2 lg:p-5 rounded-md shadow">
            <Search setSearchKey={setSearchKey} />
            <Filters />
        </aside>
    );
}

export default SideBar;
