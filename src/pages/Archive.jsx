import React, { useState, useEffect } from 'react';

const Archive = () => {
  const presidents = [
    "الحاج ميلود غويبة: الرئيس الأول والمؤسس",
    "مولاي محمد ايت مولاي الحاج: الرئيس الثاني",
    "عبد الله اميس: الرئيس الثالث",
    "حميد البهجة: الرئيس الرابع",
    "عزيز البهجة: الرئيس الخامس",
    "ابراهيم ايت مبارك: الرئيس السادس",
    "مصطفى الكدالي: الرئيس السابع",
    "حسن زهير: الرئيس الثامن",
    "سعيد المحمدي: الرئيس التاسع",
  ];

  const [currentPresident, setCurrentPresident] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPresident((prevPresident) =>
        prevPresident === presidents.length - 1 ? 0 : prevPresident + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [presidents.length]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-green-500 text-white">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-7xl font-extrabold text-white tracking-wide drop-shadow-lg shadow-black">
          أرشيف نادي الرشاد البرحيلي
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Club History Section */}
        <section className="w-full p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-xl border border-white border-opacity-30">
          <h2 className="text-4xl font-bold mb-6 text-white">تاريخ نادي الرشاد البرحيلي</h2>
          <ul className="list-decimal list-inside space-y-3 text-xl text-gray-200">
            <li>تأسيس نادي الرشاد البرحيلي سنة 1990.</li>
            <li>الصعود في أول موسم من القسم الرابع للقسم الثالث.</li>
            <li>لعب مباراة السد سنة 1992 للصعود للقسم الثاني.</li>
            <li>الصعود للقسم الثاني سنة 1996 بعد لعب مباراة السد ضد نجاح سوس.</li>
            <li>السقوط للقسم الثالث سنة 2007 مع نهاية الجيل القديم من اللاعبين.</li>
            <li>الفريق في القسم الممتاز بعد إعادة هيكلة العصبة للمنافسات حيث سقط مرة واحدة من القسم الممتاز إلى القسم الثالث سنة 2014.</li>
            <li>الصعود إلى القسم الممتاز في عهد الرئيس مصطفى الكدالي.</li>
          </ul>
        </section>

        {/* Presidents Section */}
        <section className="w-full p-8 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-xl border border-white border-opacity-30">
          <h2 className="text-4xl font-bold mb-6 text-white">قائمة الرؤساء القدامى للفريق</h2>
          <div className="text-2xl text-gray-200 text-center">
            <p className="opacity-100 transition-opacity duration-1000">
              {presidents[currentPresident]}
            </p>
          </div>
        </section>
      </main>   
    </div>
  );
};

export default Archive;
