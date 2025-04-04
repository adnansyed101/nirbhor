"use client";

// no need to add container in footer section
import Container from "@/components/container";

import { usePathname } from "next/navigation";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const path = usePathname();

  if (
    path.includes("/dashboard") ||
    path.includes("/login") ||
    path.includes("/register")
  ) {
    return <></>;
  }

  // get current year for copyright section in the bottom
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-blue-500">
      {/* <Container className="w-full max-w-screen-xl mx-auto p-4 md:py-8"> */}
      {/* <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Nirbhor
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span> */}

      {/* this is main footer seciton */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  p-5 mt-12 text-gray-100">
        {/* this is newsletter section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold pb-2 text-white">
            Newsletter
          </h2>
          <p className="text-[15px]">
            Keep up on our always evolving services and offers. Enter to your
            email and to get speacial discount cupon.
          </p>

          {/* newsletter subscribe form */}
          {/* <div className="py-5">
              <form>
                <input
                  className="border-2 w-10/12 p-2"
                  type="email"
                  placeholder="Enter your email.."
                  required
                />
                <button
                  className="bg-blue-800 p-3 -ml-[43px] -pt-14 rounded-full text-sm"
                  type="submit"
                >
                  GO
                </button>
              </form>


            </div> */}

          <div className="py-5 flex justify-center">
            <form className="flex items-center space-x-2 w-full max-w-lg">
              <input
                className="border-2 border-gray-300 p-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email..."
                required
              />
              <button
                className="bg-blue-800 text-white p-3 rounded-lg -ml-15 hover:bg-blue-700 transition-colors duration-300 text-sm"
                type="submit"
              >
                GO
              </button>
            </form>
          </div>

          {/* room and subscribers */}
          <div className="flex justify-between">
            {/* room counted valu update dynamcally here.. */}
            <div className="text-center">
              <h2 className="text-xl md:text-3xl font-bold">
                450<span>+</span>
              </h2>
              <h2 className="text-lg md:text-xl ">Rooms</h2>
            </div>

            {/* subscribers count valu update dynamically here */}
            <div>
              <h2 className="text-xl md:text-3xl font-bold">
                1200<span>+</span>
              </h2>
              <h2 className="text-lg md:text-xl ">Subscribers</h2>
            </div>
          </div>
        </div>

        {/* this is working hours section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold pb-2 text-white">
            Workign Hours
          </h2>

          <p className="text-[15px] pb-10">
            Our working hours are 24/7, available anytime to assist you. Feel
            free to reach out at any hour for support or inquiries!
          </p>

          <p className="flex items-center gap-2">
            <Clock size={15} className="text-white" />{" "}
            <span className="text-[16px] md:text-lg">Sat-Thu: </span>{" "}
            <span className="text-[15px]">8:00am - 12:00pm</span>
          </p>
          <p className="flex items-center gap-2">
            <Clock size={15} className="text-white" />{" "}
            <span className="text-[16px] md:text-lg">Friday: </span>{" "}
            <span className="text-[15px]">10:00am - 12:00pm</span>
          </p>
        </div>

        {/* this is call us section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold pb-2 text-white">
            Call Us
          </h2>
          <p className="text-[15px] pb-3">
            Need assistance? Call us during working hours for quick support. Our
            team is ready to help with your inquiries. We look forward to
            assisting you!
          </p>

          {/* contact path */}
          <ul>
            <li className="flex items-center gap-2">
              <span>
                <MapPin size={18} className="text-white" />
              </span>
              <span className="text-[16px] md:text-lg">Address:</span>
              <span className="text-[15px]"> Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Phone size={18} className="text-white" />
              </span>
              <span className="text-[16px] md:text-lg">Phone:</span>
              <span className="text-[15px]"> +(880)17*******</span>
            </li>

            <li className="flex items-center gap-2">
              <span>
                <Mail size={18} className="text-white" />
              </span>
              <span className="text-[16px] md:text-lg">Email:</span>
              <span className="text-[15px]">homestay@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* this is about us seciton */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold pb-2 text-white">
            About Us
          </h2>
          <p className="text-[15px]">
            Welcome to our cozy homestay! Enjoy a comfortable stay with warm
            hospitality, modern amenities, and a home-like atmosphere. Your
            perfect getaway starts here—relax, unwind, and feel at home!
          </p>

          {/* follow us on social media */}
          <h2 className="mt-4 text-lg md:text-xl font-semibold">Follow Us</h2>
          {/* social media icons */}
          <ul className="flex items-center space-x-4 ">
            <li>
              <a className="p-4" href="https://facebook.com" target="_blank">
                <Facebook size={24} className="text-white" />
              </a>
            </li>
            <li>
              <a className="p-4" href="https://x.com" target="_blank">
                <Twitter size={24} className="text-white" />
              </a>
            </li>
            <li>
              <a className="p-4" href="https://linkedin.com" target="_blank">
                <Linkedin size={24} className="text-white" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* website copyright section */}
      <div className="h-[1px] bg-white w-full "></div>
      <p className="text-sm text-center text-white py-2">
        &copy; {currentYear} HomeStay. All copyright are reserved
      </p>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
