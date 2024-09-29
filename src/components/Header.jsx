import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');
  const userRole = localStorage.getItem('userRole');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', null, {
        params: {
          username,
          password,
          role
        },
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      localStorage.setItem('jwtToken', response.data.token);
      localStorage.setItem('userRole', response.data.role);
      localStorage.setItem('fullName', response.data.fullName); // Store full name
      navigateToRoleBasedPage(response.data.role);
      closeModal();
    } catch (error) {
      console.error('Error logging in:', error.response ? {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      } : error.message);
      setError(error.response?.data?.message || 'Login failed, please check your credentials.');
    }
  };
  
  

  const navigateToRoleBasedPage = (role) => {
    switch (role.toLowerCase()) {
      case 'admin':
        navigate('/admin');
        break;
      case 'coach':
        navigate('/coach');
        break;
      case 'player':
        navigate('/player');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <>
      <header className="p-4 bg-white dark:bg-gray-900 dark:text-gray-300 shadow-md relative">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex items-center">
            <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
              <img src="/images/rachad.png" alt="الشعار" className="w-12 dark:text-violet-600" />
            </NavLink>
            {/* Desktop Menu */}
            <ul className="items-stretch hidden space-x-3 lg:flex">
              {[
                { to: '/', label: 'الصفحة الرئيسية' },
                { to: '/players', label: 'اللاعبين' },
                { to: '/new-player', label: 'طلب الانضمام' },
                { to: '/coaches', label: 'المدربين' },
                { to: '/announcements', label: 'المباريات' },
                { to: '/archive', label: 'الارشيف' },
                { to: '/membership', label: 'الانخراط' }
              ].map((item) => (
                <li key={item.to} className="flex">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `flex items-center px-4 py-2 border-b-2 border-transparent ${isActive ? 'border-teal-500 text-teal-600 dark:text-teal-500' : 'hover:border-teal-500 dark:hover:border-teal-500'}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center p-2 ml-auto text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div className={`fixed inset-0 top-16 left-0 z-40 w-full h-screen bg-white dark:bg-gray-900 dark:text-gray-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
            <div className="flex justify-end p-4">
              <button
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center space-y-4 mt-8">
              {[
                { to: '/', label: 'الصفحة الرئيسية' },
                { to: '/players', label: 'اللاعبين' },
                { to: '/new-player', label: 'طلب الانضمام' },
                { to: '/coaches', label: 'المدربين' },
                { to: '/announcements', label: 'الإعلانات' },
                { to: '/archive', label: 'الارشيف' },
                { to: '/membership', label: 'الانخراط' }
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `flex items-center px-4 py-2 border-b-2 border-transparent ${isActive ? 'border-teal-500 text-teal-600 dark:text-teal-500' : 'hover:border-teal-500 dark:hover:border-teal-500'}`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            {!token && (
              <button
                onClick={handleLoginClick}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
              >
                تسجيل الدخول
              </button>
            )}
          </div>
        </div>
      </header>

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">تسجيل الدخول</h2>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">اسم المستخدم</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">كلمة المرور</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">الدور</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                >
                  <option value="admin">الادارة</option>
                  <option value="coach">المدرب</option>
                  <option value="player">اللاعب</option>
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                >
                  تسجيل الدخول
                </button>
              </div>
            </form>
            <button
              onClick={closeModal}
              className="mt-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              إلغاء
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
