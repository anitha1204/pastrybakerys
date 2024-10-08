import React from 'react';
import img from "../assets/Rectangle 20.png"; // Ensure this path is correct
import { Link } from "react-router-dom";

const Imagepage = () => {
    return (
        <>
            <div className="relative w-full mt-8">
                {/* Background Image */}
                <img
                    src={img}
                    alt="Bakery"
                    className="absolute inset-0 h-[320px] w-full object-cover" // Updated width to w-full for responsiveness
                />

                {/* Overlay */}
                <div className="absolute inset-0  flex items-center justify-center p-4 md:p-8 h-[320px]">
                    <div className="p-6 md:p-12 max-w-[90%] md:max-w-[800px] mx-auto text-center">

                        {/* Content */}
                        <h2 className="text-white text-2xl md:text-5xl mt-4 lg:mb-6 font-butler">PASTRY & BAKERY</h2>
                        <p className="text-white text-base md:text-[22px] mb-2 font-nunito">
                            JOIN OUR 2-MONTH PROFESSIONAL COURSE IN PASTRY & BAKERY
                        </p>
                        <p className="text-white text-base md:text-2xl mb-6 font-nunito">
                            AND EARN YOUR CERTIFICATION.
                        </p>
                        <Link to="tel:+91 7204148070">
                            <button className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold hover:bg-yellow-600 text-lg">
                                Call Now
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Imagepage;
