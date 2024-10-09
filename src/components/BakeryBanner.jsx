// import React, { useRef, useState } from 'react';
// import img from "../assets/IMG_1895.JPG"; 

// import About from './About';
// import CourseCurriculum from './CourseCurriculum';
// import FAQSection from './FAQSection';
// import Imagepage from './Imagepage';
// import StudentTestimonials from './StudentTestimonials';
// import FooterComponent from './FooterComponent';
// import TestimonialsCarousel from './TestimonialsCarousel';

// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// import logo from '../assets/Asset 1@400x-8 11.png'
// import Training from './Training';
// import TrainingSections from './TrainingSections';
// import EligibilitySection from './EligibilitySection';



// const BakeryBanner = () => {
//     const navigate = useNavigate();
//     const roomsRef = useRef(null);
//     const [formData, setFormData] = useState({
//         fullName: '',
//         mobileNumber: '',
//         emailAddress: '',
//         message: '',
//         location: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('https://pastrybakery.onrender.com/api/submit-form', formData);
//             toast.success(response.data.message); 
//             setFormData({
//                 fullName: '',
//                 mobileNumber: '',
//                 emailAddress: '',
//                 message: '',
//                 location: ''
//             });

//             navigate('/thankyou');

//         } catch (error) {
//             console.error('Error submitting form:', error);
//             toast.error('Error submitting form. Please try again.'); 
//         }
//     };

//     return (
//         <>
//             <div className="relative h-screen w-full">
//                 {/* Background Image */}
//                 <img
//                     src={img}
//                     alt="Bakery"
//                     className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 font-sans">
//                     {/* Content */}
//                     <div className="bg-black bg-opacity-70 rounded-2xl p-6 md:p-8 max-w-[100%] md:max-w-[900px] mx-auto text-center lg:mt-40 lg:w-[100%]">
//                         {/* Logo */}
//                         <div className="absolute inset-x-0 top-0  md:left-1/2 md:transform md:-translate-x-1/2 md:mb-[637px] flex justify-center ">
//                         <div className="bg-secondary w-24 h-28 lg:w-44 lg:h-[200px] p-4 rounded-b-full flex items-center justify-center">
//                             <img src={logo} alt="logo" className="lg:w-[120px] lg:h-[150px]"/>
//                         </div>
//                     </div>

//                         {/* <img src={logo} alt="logo" className="absolute inset-x-0 top-0 mx-auto md:left-1/2 md:transform md:-translate-x-1/2 md:mb-[637px] w-24 h-28 lg:w-40 lg:h-[200px] rounded-b-full lg:ml-[-10px]" /> */}

//                         <h2 className="text-white text-2xl md:text-5xl mt-4 lg:mb-6 font-butler">PASTRY & BAKERY</h2>
//                         <p className="text-white text-base md:text-2xl mb-2">
//                             JOIN OUR 2-MONTH PROFESSIONAL COURSE IN PASTRY & BAKERY
//                         </p>
//                         <p className="text-white text-base md:text-2xl mb-6">
//                             AND EARN YOUR CERTIFICATION.
//                         </p>

//                         <button
//                             className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold hover:bg-yellow-600 text-lg"
//                             onClick={() => {
//                                 roomsRef.current?.scrollIntoView({
//                                     behavior: "smooth",
//                                 });
//                             }}
//                         >
//                             Enquiry Now
//                         </button>
//                         <p className="text-white text-base md:text-2xl mt-6">
//                             Don't miss out—it's time to take your skills to the next level!
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <About />
//              <Training/>
//              <TrainingSections/>
//              <CourseCurriculum />
//              <EligibilitySection/>
//             {/* <BreadClasses /> */}

//             <FAQSection />
//             <Imagepage />
//             <StudentTestimonials />
//             <TestimonialsCarousel />
//             <section className="flex justify-center items-center mt-16 " ref={roomsRef}>
//                 <form onSubmit={handleSubmit} className="bg-white p-6 rounded-[50px] w-full max-w-5xl border border-gray-500 ">
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//                         <input
//                             type="text"
//                             name="fullName"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             placeholder="Full Name"
//                             className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
//                             required
//                         />
//                         <input
//                             type="tel"
//                             name="mobileNumber"
//                             value={formData.mobileNumber}
//                             onChange={handleChange}
//                             placeholder="Mobile Number"
//                             className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="emailAddress"
//                             value={formData.emailAddress}
//                             onChange={handleChange}
//                             placeholder="Email Address"
//                             className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="location"
//                             value={formData.location}
//                             onChange={handleChange}
//                             placeholder="Location"
//                             className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
//                             required
//                         />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-[auto] gap-4 mb-4">
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Type your message"
//                             rows="3"
//                             className="p-8 rounded-xl bg-gray-200 focus:outline-none"
//                             required
//                         ></textarea>


//                     </div>
//                     <div className="flex justify-center">
//                         <button
//                             type="submit"
//                             className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-[100px] rounded-2xl focus:outline-none "
//                         >
//                             SUBMIT
//                         </button>
//                     </div>
//                 </form>
//                 <Toaster position="top-center" /> {/* Add this line to include the toast notifications */}
//             </section>
//             <FooterComponent />

//         </>
//     );
// }

// export default BakeryBanner;





import React, { useRef, useState } from 'react';
// import img from "../assets/IMG_1895.JPG";

import About from './About';
import CourseCurriculum from './CourseCurriculum';
import FAQSection from './FAQSection';
import Imagepage from './Imagepage';
import StudentTestimonials from './StudentTestimonials';
import FooterComponent from './FooterComponent';
import TestimonialsCarousel from './TestimonialsCarousel';

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/Asset 1@400x-8 11.png'
import Training from './Training';
import TrainingSections from './TrainingSections';
import EligibilitySection from './EligibilitySection';

import Slider from "react-slick";
import img1 from "../assets/IMG_1895.JPG";  // Replace with your image paths
import img2 from "../assets/IMG_1054.JPG";  // Replace with your image paths
import img3 from "../assets/IMG_8882.JPG";  // Replace with your image paths
import img4 from "../assets/IMG_4760.JPG";  // Replace with your image paths
import img5 from "../assets/IMG_1102.JPG";  // Replace with your image paths
import img6 from "../assets/IMG_1074.JPG";  // Replace with your image paths
import img7 from "../assets/IMG_1341.JPG";  // Replace with your image paths
import img8 from "../assets/IMG_8497_1.jpg";  // Replace with your image paths
import img9 from "../assets/IMG_8601.JPG";  // Replace with your image paths



const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const BakeryBanner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const navigate = useNavigate();
    const roomsRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        message: '',
        location: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://pastrybakery.onrender.com/api/submit-form', formData);
            toast.success(response.data.message);
            setFormData({
                fullName: '',
                mobileNumber: '',
                emailAddress: '',
                message: '',
                location: ''
            });

            navigate('/thankyou');

        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form. Please try again.');
        }
    };

    return (
        <>
            <div className="relative w-full h-full overflow-hidden">
                {/* Background Image */}

                {/* <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[650px] md:h-[600px] lg:h-[700px] object-cover"
                            />
                        </div>
                    ))}
                </Slider> */}
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="
                                    w-full
                                    object-cover
                                    h-[653px]                   
                                    sm:h-[653px]                
                                    md:h-[600px]                
                                    lg:h-[700px]               
                                    xl:h-[775px]                
                                    2xl:h-[868px]               
                                    3xl:h-[996px]              
                                "
                            />
                          </div>
                       ))}
                  </Slider>



                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 font-sans">
                    {/* Content */}
                    <div className="bg-black bg-opacity-70 rounded-2xl p-6 md:p-8 max-w-[100%] md:max-w-[900px] mx-auto text-center lg:mt-40 lg:w-[100%]">
                        {/* Logo */}
                        <div className="absolute inset-x-0 top-0  md:left-1/2 md:transform md:-translate-x-1/2 md:mb-[637px] flex justify-center ">
                            <div className="bg-secondary w-24 h-28 lg:w-44 lg:h-[200px] p-4 rounded-b-full flex items-center justify-center">
                                <img src={logo} alt="logo" className="lg:w-[120px] lg:h-[150px]" />
                            </div>
                        </div>

                        {/* <img src={logo} alt="logo" className="absolute inset-x-0 top-0 mx-auto md:left-1/2 md:transform md:-translate-x-1/2 md:mb-[637px] w-24 h-28 lg:w-40 lg:h-[200px] rounded-b-full lg:ml-[-10px]" /> */}

                        <h2 className="text-white text-2xl md:text-5xl mt-4 lg:mb-6 font-butler">PASTRY & BAKERY</h2>
                        <p className="text-white text-base md:text-2xl mb-2">
                            JOIN OUR 2-MONTH PROFESSIONAL COURSE IN PASTRY & BAKERY
                        </p>
                        <p className="text-white text-base md:text-2xl mb-6">
                            AND ELEVATE YOUR SKILLS TO THE NEXT LEVEL.
                        </p>

                        <button
                            className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold hover:bg-yellow-600 text-lg"
                            onClick={() => {
                                roomsRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Enquiry Now
                        </button>
                        <p className="text-white text-base md:text-2xl mt-6">
                            Don't miss out—it's time to take your skills to the next level!
                        </p>
                    </div>
                </div>
            </div>
            <About />
            <Training />
            <TrainingSections />
            <CourseCurriculum />
            <EligibilitySection />

            {/* <BreadClasses /> */}

            <FAQSection />
            <Imagepage />
            <StudentTestimonials />
            <TestimonialsCarousel />
            <section className="flex justify-center items-center mt-16 " ref={roomsRef}>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-[50px] w-full max-w-5xl border border-gray-500 ">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
                            required
                        />
                        <input
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="p-3 rounded-2xl bg-gray-200 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[auto] gap-4 mb-4">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message"
                            rows="3"
                            className="p-8 rounded-xl bg-gray-200 focus:outline-none"
                            required
                        ></textarea>


                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-[100px] rounded-2xl focus:outline-none "
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
                <Toaster position="top-center" /> {/* Add this line to include the toast notifications */}
            </section>
            <FooterComponent />

        </>
    );
}

export default BakeryBanner;
