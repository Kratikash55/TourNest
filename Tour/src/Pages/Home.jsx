import React from "react";
import { Carousel } from "flowbite-react";
import { FaWifi, FaParking, FaBroom } from "react-icons/fa";
import { MdAirportShuttle, MdChair } from "react-icons/md";

const amenities = [
  { icon: <FaWifi className="text-blue-600 text-4xl" />, label: "Free WiFi" },
  { icon: <MdChair className="text-blue-600 text-4xl" />, label: "Fully Furnished" },
  { icon: <FaParking className="text-blue-600 text-4xl" />, label: "Free Parking" },
  { icon: <MdAirportShuttle className="text-blue-600 text-4xl" />, label: "Airport Transfers" },
  { icon: <FaBroom className="text-blue-600 text-4xl" />, label: "Cleaning Services" },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Slideshow Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] xl:h-[90vh] mt-10">
        <Carousel slideInterval={4000} indicators={false} className="h-full">
          <img
            src="https://www.brahmandtour.com/img/slider01.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.WMDcu-h4es85nIae0CxrfAHaDL?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://www.onthegotours.com/repository/GT-and-Kerala-790291659010970.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </Carousel>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Welcome to TripNest
          </h1>
          <p className="text-gray-100 font-semibold text-lg md:text-xl mb-6">
            Enjoy the space , privacy, and comfort of furnished apartments
          </p>
          <p className="text-gray-100 font-semibold text-lg md:text-xl mb-8">
            Book your perfect stay today!
          </p>
          <button className="px-6 py-3 bg-gray-300 text-black rounded-lg shadow hover:bg-gray-700 hover:text-white transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Amenities We Offer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="mb-3">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Why Book With Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Left: Text */}
          <div>
           

            <h2 className="text-3xl font-semibold text-gray-800 mb-5">Why book with us</h2>
            <ul className="space-y-3">
              {[
                "Prime Location: Situated in the vibrant Loft City area, our rentals provide easy access to top attractions, dining, and entertainment.",
                "Modern Amenities: Enjoy high-speed WiFi, fully furnished spaces, and all the comforts of home.",
                "Exceptional Service: Our dedicated team is here to ensure your stay is seamless and enjoyable.",
                "Competitive Rates: Experience luxury living without breaking the bank.",
                "Flexible Booking: We offer convenient booking options to suit your travel plans."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>


        {/* Right: Map */}
          <div className="rounded-xl overflow-hidden shadow border border-gray-200">
            <iframe
              title="Loft City Map"
              className="w-full h-[360px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.340898575654!2d-122.410576!3d37.788040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c173d7e3b%3A0x38c7f2d2d6f7f3e!2sUnion%20Square!5e0!3m2!1sen!2sus!4v1732640000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
      </div>
      </section>

      {/* Testimonials Section */}
<section className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-10">
      What Our Guests Say..!!
    </h2>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      {[
        {
          quote:
           "TripNest made my vacation planning effortless. The booking process was smooth and the stay exceeded expectations!",
          name: "Aarav Mehta",
        },
        {
          quote:
            "I loved how easy it was to find curated stays that matched my vibe. TripNest is my go-to travel buddy!",
          name: "Sneha Kapoor",
        },
        {
          quote:
            "From airport transfers to cozy rooms, TripNest nailed every detail. Highly recommended for stress-free holidays.",
          name: "Rohan Verma",
        },
      ].map((item, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <p className="text-gray-700 italic mb-4">“{item.quote}”</p>
          <p className="text-gray-900 font-semibold">— {item.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;