import React from 'react';

const fullName = localStorage.getItem('fullName');

const handleLogout = () => {
  localStorage.clear(); // Clear local storage or just remove specific items if needed
  window.location.href = '/login'; // Redirect to login page
};

const HeaderAdmin = () => (
  <header className="bg-white text-gray-900 p-6 shadow-md border-b border-gray-200">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src="/images/rachad.png" 
          alt="Logo" 
          className="h-16 w-16 rounded-full border-2 border-gray-300 shadow-sm" 
        />
        <h1 
          className="ml-4 text-2xl font-bold"
          style={{
            animation: 'slideIn 20s ease-in-out infinite',
          }}
        >
          أهلاً بعودتك، {fullName}!
        </h1>
      </div>
      <button 
        onClick={handleLogout}
        className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
      >
        تسجيل الخروج
      </button>
    </div>
    <style>{`
      @keyframes slideIn {
        0% { 
          opacity: 1; 
          transform: translateX(0%);
        }
        20% { 
          opacity: 1; 
          transform: translateX(135%); 
        }50% { 
          opacity: 1; 
          transform: translateX(260%);
        }
        75% { 
          opacity: 1; 
          transform: translateX(135%); 
        }
          100% { 
          opacity: 1; 
          transform: translateX(0%); 
        }
      }
    `}</style>
  </header>
);

export default HeaderAdmin;
