import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserAlt, FaBullhorn, FaChartLine } from 'react-icons/fa';

const NavBarAdmin = () => {
  return (
    <nav className="bg-white h-full p-6 shadow-md border border-gray-200">
      <div className="text-gray-800 text-2xl font-bold mb-8">لوحة تحكم المدير</div>
      <ul className="space-y-6">
        <li className="flex items-center space-x-4 hover:bg-gray-50 p-2">
          <FaChalkboardTeacher className="text-gray-600 text-2xl" />
          <Link to="" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            إدارة المدربين
          </Link>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-50 p-2">
          <FaUserAlt className="text-gray-600 text-2xl" />
          <Link to="" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            إدارة اللاعبين
          </Link>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-50 p-2">
          <FaBullhorn className="text-gray-600 text-2xl" />
          <Link to="" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            إضافة إعلانات
          </Link>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-50 p-2">
          <FaChartLine className="text-gray-600 text-2xl" />
          <Link to="" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            إحصائيات اللاعبين
          </Link>
        </li>
        <li className="flex items-center space-x-4 hover:bg-gray-50 p-2">
          <FaChartLine className="text-gray-600 text-2xl" />
          <Link to="" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
            إحصائيات المدربين
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarAdmin;
