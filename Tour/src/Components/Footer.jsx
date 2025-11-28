import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF ,FaTwitter ,FaLinkedinIn ,FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-gray-800 text-white py-6 px-4 z-50 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Contact Us</h3>
          <p>Email: <Link href="mailto:info@mysite.com" className="text-blue-400 hover:underline">MyTravel@gmail.com</Link></p>
          <p>Telephone: <Link href="tel:4252367639" className="text-blue-400 hover:underline">425-236-7639</Link></p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Address</h3>
          <p>500 Terry Francine Street</p>
          <p>Raja Park, Jaipur</p>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">We Accept</h3>
          <div className="flex space-x-4 mt-2">
            <img src="https://www.kredmo.com.au/wp-content/uploads/2019/01/Mastercard_logo-white.png" alt="MasterCard" className="h-6" />
            <img src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Pic.png" alt="Visa" className="h-5" />
            <img src="https://www.pngall.com/wp-content/uploads/9/American-Express-Logo-PNG-Photos.png" alt="American Express" className="h-6" />
            <img src="https://easydigitaldownloads.com/wp-content/uploads/edd/2021/07/paypal-featured-image.png" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-10 flex ms-24 space-x-6">
        <FaFacebookF className='hover:text-blue-500 cursor-pointer text-xl'/>
        <FaTwitter className='hover:text-blue-400 cursor-pointer text-xl'/>
        <FaLinkedinIn className='hover:text-blue-700 cursor-pointer text-xl'/>
        <FaInstagram className='hover:text-pink-500 cursor-pointer text-xl'/>
      </div>
    </footer>
  );
};

export default Footer;