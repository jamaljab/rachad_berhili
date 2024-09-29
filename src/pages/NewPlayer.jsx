import React, { useState } from 'react';
import axios from 'axios';

const NewPlayer = () => {
  /*
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    address: '',
    phone: '',
    previousClubs: '',
    playingPosition: '',
    currentTeam: '',
    height: '',
    gamesLastYear: '',
    titles: '',
    individualTitles: '',
    footballStartYear: '',
    reason: '',
    photo: null,
    state: 0, // Default state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      photo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });

    try {
      const url = userType === 'player' ? '/api/players' : '/api/coaches';
      await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('تم إرسال الطلب بنجاح');
      setFormData({
        fullName: '',
        age: '',
        address: '',
        phone: '',
        previousClubs: '',
        playingPosition: '',
        currentTeam: '',
        height: '',
        gamesLastYear: '',
        titles: '',
        individualTitles: '',
        footballStartYear: '',
        reason: '',
        photo: null,
        state: 0,
      });
      setUserType('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ أثناء إرسال الطلب');
    }
  };

  const playerFields = (
    <>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الاسم الكامل:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">العمر:</label>
        <input
          dir="rtl"
          type="number"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">العنوان:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الهاتف:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الأندية السابقة (مفصولة بفواصل):</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">مركز اللعب:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الفريق الحالي (إذا لم يكن هناك، اتركه فارغاً):</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الطول:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">عدد المباريات التي لعبتها العام الماضي:</label>
        <input
          dir="rtl"
          type="number"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الألقاب (مفصولة بفواصل):</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الألقاب الفردية:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">سنة بدء ممارسة كرة القدم:</label>
        <input
          dir="rtl"
          type="number"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">لماذا يجب علينا قبولك؟</label>
        <textarea
          dir="rtl"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          rows="4"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الصور الشخصية:</label>
        <input
          dir="rtl"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        />
      </div>
    </>
  );

  const coachFields = (
    <>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الاسم الكامل:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">العمر:</label>
        <input
          dir="rtl"
          type="number"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">العنوان:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الهاتف:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الأندية السابقة (مفصولة بفواصل):</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">التخصص:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الفريق الحالي (إذا لم يكن هناك، اتركه فارغاً):</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">عدد المباريات التي قدتها العام الماضي:</label>
        <input
          dir="rtl"
          type="number"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الألقاب (مفصولة بفواصل):</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الألقاب الفردية:</label>
        <input
          dir="rtl"
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">لماذا يجب علينا قبولك؟</label>
        <textarea
          dir="rtl"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          rows="4"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-lg font-semibold">الصور الشخصية:</label>
        <input
          dir="rtl"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        />
      </div>
      
    </>
  );

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg transition-shadow hover:shadow-2xl" dir="rtl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">طلب الانضمام كلاعب جديد/مدرب جديد</h2>
      <p className="text-center text-gray-600 mb-6">سيتم العودة لطلبات الانضمام في فترة الانتقالات و في حالة وجود خصاص في المدربين</p>
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">أنا:</label>
        <div className="flex justify-center">
          <label className="inline-flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              name="userType"
              value="player"
              checked={userType === 'player'}
              onChange={() => setUserType('player')}
              className="hidden"
              required
            />
            <div className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 ${userType === 'player' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} transition-colors duration-300`}>
              {userType === 'player' && (
                <div className="w-3 h-3 rounded-full bg-white" />
              )}
            </div>
            <span className="text-lg">لاعب</span>
          </label>
          <label className="inline-flex items-center space-x-4 cursor-pointer">
            <input
              type="radio"
              name="userType"
              value="coach"
              checked={userType === 'coach'}
              onChange={() => setUserType('coach')}
              className="hidden"
              required
            />
            <div className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 ${userType === 'coach' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} transition-colors duration-300`}>
              {userType === 'coach' && (
                <div className="w-3 h-3 rounded-full bg-white" />
              )}
            </div>
            <span className="text-lg">مدرب</span>
          </label>
        </div>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {userType === 'player' && playerFields}
        {userType === 'coach' && coachFields}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          إرسال
        </button>
      </form>
    </div>
  );
  */
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">غير متوفرة الآن</h1>
    </div>
  );
  
};

export default NewPlayer;
