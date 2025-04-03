import Container from "@/components/container";
import NoHomestay from "./components/no-homestay";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

const Page = () => {
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
                    <div className="w-full sm:w-[79%] bg-white shadow rounded-md p-2 lg:p-5">
                        <TopBar />
                        <NoHomestay />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Page;
