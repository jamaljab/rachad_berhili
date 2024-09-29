import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8534777f-f00e-4af1-8d5e-1a865b5b5acf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "نجاح",
        text: "تم إرسال الرسالة بنجاح",
        icon: "success"
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label dir="rtl" htmlFor="fullName" className="block text-lg font-medium text-gray-700 mb-1">الاسم الكامل</label>
        <input
          id="fullName"
          type="text"
          placeholder="أدخل اسمك الكامل"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          name='name'
        />
      </div>
      <div>
        <label dir="rtl" htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
        <input
          id="email"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          required
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          name='email'
        />
      </div>
      <div>
        <label dir="rtl" htmlFor="message" className="block text-lg font-medium text-gray-700 mb-1">رسالتك</label>
        <textarea
          id="message"
          placeholder="أدخل رسالتك"
          required
          className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          name='message'
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        إرسال الرسالة
      </button>
    </form>
  );
};

export default ContactUs;
