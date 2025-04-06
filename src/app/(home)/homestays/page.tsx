import Container from "@/components/container";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import HomestayContainer from "./components/HomestayContainer";
import SearchProvider from "./providers/search-provider";

const Page = () => {
    return (
        <SearchProvider>
            <Container>
                <div className="flex justify-between py-3 flex-col">
                    <div className="mb-3 lg:mb-5">
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
                            <HomestayContainer />
                        </div>
                    </div>
                </div>
            </Container>
        </SearchProvider>
    );
}

export default Page;
