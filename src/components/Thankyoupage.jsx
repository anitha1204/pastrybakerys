import React from 'react';

const Thankyoupage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <a href="https://www.deepalisawant.com/contact" className="text-blue-600 hover:underline mb-4 block">
        deepalisawant.com
        </a>
        <p className="text-gray-700 ">
        Thank you for reaching out to us!
        </p>
        <p className="text-gray-700">
        Our team will get in touch with you shortly.
        </p>
        <p className="text-gray-700 mt-6 mr-[200px]">
        Best Regards,<br />
        Deepalisawant
        </p>
       
      </div>
    </div>
  );
};

export default Thankyoupage;
