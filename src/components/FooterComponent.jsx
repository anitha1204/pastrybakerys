import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import ds from '../assets/DS.png'

const FooterComponent = () => {
  const [qrCodeUrl, setQRCodeUrl] = useState(''); // Store the QR code URL
  const canvasRef = useRef(null);

  // URL to be opened when the QR code is clicked
  const urlToOpen = 'https://www.google.com/maps/place/Deepalis+Academy+of+Patisserie+%26+Culinary+Arts+-+Best+Pastry+School+in+India/@12.8990831,77.6764004,14.66z/data=!4m6!3m5!1s0x3bae13780478956f:0xe5cb7ba76f4800d3!8m2!3d12.9021212!4d77.6764743!16s%2Fg%2F11cfb98m0?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D';

  // Generate the QR Code once the component loads
  useEffect(() => {
    generateQRCode();
  }, [])

  const generateQRCode = async () => {
    try {
      // Generate QR code and save it as a data URL
      const qrUrl = await QRCode.toDataURL(urlToOpen, {
        width: 300, // Size of the QR code
      });
      setQRCodeUrl(qrUrl); // Set the QR code URL in the state
    } catch (error) {
      console.error('Error generating QR code: ', error);
    }
  };

  const handleQRCodeClick = () => {
    // Open the URL in a new tab when the QR code is clicked
    window.open(urlToOpen, '_blank');
  };
  return (
    <footer className="bg-black text-white py-10 px-6 rounded-t-[50px] mt-10 lg:w-[95%] lg:ml-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[140px_340px_340px_340px] gap-4">
        {/* Left Section: Company Logo and Contact Info */}
        <div>
          <img src={ds} alt="" />
        </div>
        <div className='text-lg'>

          <p className="mb-1">For Reach :</p>
          <p className="mb-1">+91 7204148070</p>
          <p className="mb-1">enquiry@deepalisawant.com</p>
          <a
            href="https://www.deepalisawant.com"
            className="text-gray-400 hover:text-yellow-500"
          >
            www.deepalisawant.com
          </a>
        </div>

        {/* Middle Section: Address */}
        <div>
          <h2 className="text-lg font-semibold mb-4">We are Here :</h2>
          <p className="mb-1">
            2nd Floor, Plot 607, 2nd Main Rd, opposite,
          </p>
          <p className="mb-1">Hello Kids School, Sarjapur, Kasavanahalli,</p>
          <p className="mb-1">Bengaluru, Karnataka 560035</p>
        </div>

        {/* Right Section: QR Code and Social Media Links */}
        <div className="flex flex-col lg:items-end ">

          <div className="flex space-x-4">
            {qrCodeUrl && (
              <img
                src={qrCodeUrl}
                alt="QR Code"
                onClick={handleQRCodeClick}
                className="cursor-pointer"
                style={{ width: '100px', height: '100px' }} // Adjust size as needed
              />
            )}
            <a
              href="https://www.facebook.com"
              className="text-yellow-500 mt-10 "
              aria-label="Facebook"
            >
              <FaFacebookF size={24} className="h-7 w-7" />
            </a>
            <a
              href="https://www.instagram.com/deepalisacademy/"
              className="text-yellow-500 mt-10"
              aria-label="Instagram"
            >
              <FaInstagram size={24} className="h-7 w-7" />
            </a>
            <a
              href="https://www.youtube.com/@deepalisawant77"
              className="text-yellow-500 mt-10"
              aria-label="YouTube"
            >
              <FaYoutube size={24} className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;



