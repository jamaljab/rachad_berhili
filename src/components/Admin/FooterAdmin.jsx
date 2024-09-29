import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterAdmin = () => (
  <footer className="bg-gray-100 text-gray-600 py-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} رشاد أولاد برحيل. جميع الحقوق محفوظة.
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterAdmin;
