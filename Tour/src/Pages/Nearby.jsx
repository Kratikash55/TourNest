import React from "react";

const Nearby = () => {
  return (
    <div>
      {/* Nearby Attractions Section */}
      <section className="min-h-screen bg-gray-50 py-16 mt-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nearby Attractions
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Description */}
          <div>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              Discover the vibrant neighborhoods surrounding Loft City. From the
              trendy boutiques of Hayes Valley to the cultural richness of the
              Mission District, there's something for everyone. Explore historic
              landmarks, indulge in diverse culinary delights, and experience
              the lively arts scene just minutes away.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Hayes Valley</li>
              <li>• Mission District</li>
              <li>• Civic Center</li>
              <li>• Union Square</li>
              <li>• Japantown</li>
            </ul>
          </div>

          {/* Right: Map */}
          <div className="rounded-xl overflow-hidden shadow border border-gray-200">
            <iframe
              title="Loft City Location"
              className="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.340898575654!2d-122.420576!3d37.775040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c173d7e3b%3A0x38c7f2d2d6f7f3e!2sHayes%20Valley!5e0!3m2!1sen!2sus!4v1732640000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Mission Dolores Park Section */}
      <section className="py-11 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Image + Map */}
          <div className="space-y-6">
            <img
              src="https://www.californiabeaches.com/wp-content/uploads/2017/03/Dolores-Park-1000x609.jpg"
              alt="Mission Dolores Park"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          {/* Right: Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Mission Dolores Park
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click 'Edit Text' or double click me to add your own
              content and make changes to the font.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </section>

      {/* The Castro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              The Castro
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>

          {/* Right: Image */}
          <div>
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.bwDJnPbbK8zVzAUNbLg6PAHaE6?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="The Castro neighborhood"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Haight & Ashbury Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.cigAYdRVNhlN3IJA82oZMwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Haight & Ashbury"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Haight & Ashbury
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              This is a great space to bring long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </section>

      {/* Golden Gate Bridge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Golden Gate Bridge
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click 'Edit Text' or double click me to add your own
              content and make changes to the font.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>

          {/* Right: Image */}
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1280px-GoldenGateBridge-001.jpg"
              alt="Golden Gate Bridge"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chinatown Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/orzmcyeb65hwjbhcnad7/DiscovertheSecretofChinatownWalkingTour%E2%80%932Hours.jpg"
              alt="Chinatown San Francisco"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Chinatown</h2>
            <p className="text-base leading-relaxed text-gray-700 mb-4">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              This is a great space to bring long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nearby;
