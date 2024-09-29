import React, { useState } from 'react';

const teams = [
  { name: 'اولمبيك الكردان', image: '/images/one.png' },
  { name: 'اتحاد اولوز', image: '/images/two.png' },
  { name: 'شباب سيدي بيبي', image: '/images/three.png' },
  { name: 'شباب اكلو', image: '/images/four.png' },
  { name: 'شباب تغازوت', image: '/images/five.png' },
  { name: 'اتحاد بوركان', image: '/images/six.png' },
  { name: 'امل التمسية', image: '/images/seven.png' },
  { name: 'النادي البلدي فم الحصن', image: '/images/eight.png' },
  { name: 'اتران تزنيت', image: '/images/nine.png' },
  { name: 'ابطال القليعة', image: '/images/ten.png' },
  { name: 'مؤسسة الاعمال الاجتماعية للتعليم', image: '/images/eleven.png' },
];

const Announcements = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleButtonClick = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-500 p-4 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">إعلانات المباريات</h2>
      <p className="text-lg text-center mb-6">قائمة المباريات القادمة.</p>

      <div className="grid grid-cols-2 gap-4 my-4">
        {teams.map((team, index) => (
          <button
            key={index}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            onClick={() => handleButtonClick(team)}
          >
            {`جولة ${index + 1}`}
          </button>
        ))}
      </div>

      {selectedTeam && (
        <div className="mt-6 text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-4 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">{selectedTeam.name}</h3>
          <img src={selectedTeam.image} alt={selectedTeam.name} className="mx-auto w-1/2 h-auto rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default Announcements;
