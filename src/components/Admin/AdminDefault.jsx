import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';
import NavBarAdmin from './NavBarAdmin';

const AdminDefault = () => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <HeaderAdmin />
    <div className="flex flex-1">
      <div className="w-full md:w-3/4 p-6 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">لوحة تحكم المدير</h1>
        <p className="text-lg text-gray-600">مرحبا بك في الصفحة الافتراضية للمدير. استخدم شريط التنقل على اليمين لإدارة المدربين واللاعبين والإعلانات وعرض الإحصائيات.</p>
      </div>
      <div className="w-full md:w-1/4 bg-blue-800 text-white">
        <NavBarAdmin />
      </div>
    </div>
    <FooterAdmin />
  </div>
);

export default AdminDefault;
