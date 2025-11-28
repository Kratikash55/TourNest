import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-semibold text-black mb-8 mt-6">About</h2>
        <p className="text-3xl text-gray-800 font-medium mb-4">
          There’s a new way to stay in a city: live like a local.
        </p>
        <p className="text-2xl leading-relaxed text-gray-700">
          We provide fully furnished, high-end, affordable homes ranging from one bedroom to as large as eight bedrooms.
          You can rely on us to find you a perfect place to call home during your stay in San Francisco. Our goal is to
          provide you with an unforgettable living experience.
        </p>
      </div>

{/* Bay Bridge Full-Width Section */}
<section className="w-full mt-12 font-serif">
  <img
    src="https://www.tripsavvy.com/thmb/uxYL73pXSdRCuPeSXQScskAyGaU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20080511_0021-1000x1500-5706e2873df78c7d9e9ec8b8.jpg"
    alt="San Francisco–Oakland Bay Bridge"
    className="w-full h-[60vh] object-cover"
  />
</section>

    </section>

    
  );
};

export default About;