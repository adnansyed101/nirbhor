import Search from "./Search";
import CheckboxDemo from './Checkbox'

const SideBar = () => {
    return (
        <aside className="relative space-y-3 lg:space-y-5 bg-white p-2 lg:p-5 rounded-md shadow">
            <Search />
            <div className="space-y-2">
                <h4 className="text-lg font-medium">Location</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo keyword="Dhaka" />
                    <CheckboxDemo keyword="Chattagram" />
                    <CheckboxDemo keyword="Sylhet" />
                    <CheckboxDemo keyword="Khulna" />
                    <CheckboxDemo keyword="Barishal" />
                    <CheckboxDemo keyword="Rangpur" />
                    <CheckboxDemo keyword="Rajshahi" />
                    <CheckboxDemo keyword="Mymensing" />
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-medium">Price</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo keyword="৳ 0 - ৳ 1000" />
                    <CheckboxDemo keyword="৳ 1001 - ৳ 2000" />
                    <CheckboxDemo keyword="৳ 2001 - ৳ 3000" />
                    <CheckboxDemo keyword="৳ 3001 - More" />
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-medium">Property Type</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo keyword="Apartment" />
                    <CheckboxDemo keyword="House" />
                    <CheckboxDemo keyword="Cottage" />
                    <CheckboxDemo keyword="Cabin" />
                </div>
            </div>
            <div className="space-y-2">
                <h4 className="text-lg font-medium">User Rating</h4>
                <div className="space-y-[6px]">
                    <CheckboxDemo keyword="Excelent: 4.5+" />
                    <CheckboxDemo keyword="Very Good: 4.0+" />
                    <CheckboxDemo keyword="Good: 3.5+" />
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
