import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://travonika.com/wp-content/uploads/2023/02/international-tour-packages-768x576.jpg"
        alt="International tour packages"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Your <span className="text-gray-900">Global Home</span> Awaits
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Book comfort, not just a room
        </p>
        <Link
          to="/home"
          className="inline-block bg-gray-200 text-black px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-gray-600 hover:text-white hover:scale-105 transform transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;