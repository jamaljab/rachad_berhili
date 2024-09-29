import React from 'react';
import ContactUs from '../pages/ContactUs';

const Footer = () => (
  <footer className="bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="flex flex-col items-center md:items-start">
        <img src="/images/rachad.png" alt="Logo" className="w-20 h-20 mb-4 App-logo" />
        <p className="text-sm text-center md:text-left">&copy; 2024 الرشاد البرحيلي لكرة القدم</p>
        <p dir="rtl" className="text-sm text-center md:text-left">جميع الحقوق محفوظة</p>
      </div>

      <div className="flex flex-col items-center">
        <h2 dir="rtl" className="text-xl font-semibold mb-4">تابعنا على:</h2>
        <div className="flex gap-6">
          <a href="https://web.facebook.com/profile.php?id=100063791092899" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8 transition-transform transform hover:scale-110" />
          </a>
          <a href="https://whatsapp.com/channel/0029VaW6cag0wajtr7img80r" target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsap.png" alt="WhatsApp" className="w-8 h-8 transition-transform transform hover:scale-110" />
          </a>
          <a href="tel:+212607781703" target="_blank" rel="noopener noreferrer">
            <img src="/images/phone.png" alt="Phone" className="w-8 h-8 transition-transform transform hover:scale-110" />
          </a>
          <a href="mailto:jabbourjamal27@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/email.png" alt="Email" className="w-8 h-8 transition-transform transform hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h2 dir="rtl" className="text-xl font-semibold mb-4">للتواصل معنا :</h2>
        <ContactUs />
      </div>
    </div>

    {/* Description du club */}
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-600">
        نادي مرجعي في سوس ماسة يلعب في منافسات القسم الشرفي الأول لعصبة سوس لكرة القدم. 
        يتكون من عدة فئات: الكبار، الشبان، الصغار، والفريق النسوي.
      </p>
    </div>
  </footer>
);

export default Footer;
