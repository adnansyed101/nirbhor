import aboutUsBannerImage from "../../../public/assets/about_us_banner.jpg";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      {/* contact us main section */}

      <section>
        {/* contact us banner section */}
        {/* this banner section and about us banner section both are same
        need to use here reusable component for more less code.
        */}
        <div
          className="bg-cover bg-center h-84 flex flex-col justify-center items-center text-white"
          style={{ backgroundImage: `url(${aboutUsBannerImage.src})` }}
        >
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider">
            Contact Us
          </h2>
          <h3 className="text-xl mt-2">
            <a href="#">Nirbhor</a>
          </h3>
        </div>

        {/* how find us section
        different way to find use section
        this card and about us why choose use section are same
        also need to use reusable component here for more less code.
        */}

        <div className="container mx-auto">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-light opacity-65 mt-24 uppercase">
            How Find Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-16">
            {/* individual card */}
            <div className="flex flex-col items-center justify-center border-r-2 py-14">
              {/* icon */}
              <div className="hover:text-orange-800 transition-all duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-center items-center">
                <p>
                  <MapPin size={40} />
                </p>
                <h2 className="text-lg md:text-xl uppercase font-semibold py-6 ">
                  Location
                </h2>
              </div>
              <p className="text-[16px] text-gray-500 text-center">
                House 23, Road 7, Block C, Banani, Dhaka 1213, Bangladesh
              </p>
            </div>

            {/* individual card */}
            <div className="flex flex-col items-center justify-center border-r-2 py-14">
              {/* icon */}
              <div className="hover:text-orange-800 transition-all duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-center items-center">
                <p>
                  <Phone size={40} />
                </p>
                <h2 className="text-lg md:text-xl uppercase font-semibold py-6 ">
                  Phone Us
                </h2>
              </div>
              <p className="text-[16px] text-gray-500 text-center flex flex-col space-y-2">
                <span> +(880)15**********</span>
                <span> +(880)15**********</span>
              </p>
            </div>

            {/* individual card */}
            <div className="flex flex-col items-center justify-center border-r-2 py-14">
              {/* icon */}
              <div className="hover:text-orange-800 transition-all duration-300 ease-in-out transform hover:scale-110 flex flex-col justify-center items-center">
                <p>
                  <Mail size={40} />
                </p>
                <h2 className="text-lg md:text-xl uppercase font-semibold py-6 ">
                  Email Us
                </h2>
              </div>
              <p className="text-[16px] text-gray-500 text-center flex flex-col space-y-2">
                <span> demo@gmail.com</span>
                <span> homestay.service@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* our live locaiton 
          find use with live location.
        */}
        <div className="w-full h-[400px] overflow-hidden mt-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.818841796004!2d90.41251887588294!3d23.78956377865771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b7ef27b12f%3A0xa6f6c4d22b6b196!2sGulshan%202%20Circle!5e0!3m2!1sen!2sbd!4v1712220000000!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 
                if you have any question then send us your questin and opinion
                using email
            */}

        <div>
          {/* have any question forms head */}
          <div className="text-center mt-24">
            <h2 className="text-xl md:text-4xl lg:text-6xl font-light uppercase opacity-65">
              Have any questions?
            </h2>
            <p className="tracking-wider md:w-6/12 mx-auto mt-8 opacity-65">
              Subscribe to our newsletters, call us to book a meetup or send us
              emails to request for service consultation.
            </p>
          </div>

          {/* submite message form */}

          <div className="mt-16">
            <form className="max-w-3xl mx-auto p-6 rounded-xl space-y-6">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g. +8801234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subject"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message*
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Row 4: Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="w-full uppercase py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
