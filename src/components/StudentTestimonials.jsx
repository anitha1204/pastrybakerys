import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import the images
import image1 from "../assets/0A5A3906.JPG";
import image2 from "../assets/0A5A3941.JPG";
import image3 from "../assets/0A5A5545.JPG";
import image4 from "../assets/0A5A8504.JPG";
import image5 from "../assets/IMG_1090.JPG";
import image7 from "../assets/IMG_20220414_174331.jpg";
import image8 from "../assets/IMG_4217.JPG";
import image9 from "../assets/IMG_9831.JPG";
import image10 from "../assets/IMG-20220331-WA0023.jpg";

const StudentTestimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on larger screens
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024, // For medium screens like tablets
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768, // For small screens like phones
        settings: {
          slidesToShow: 1, // Show only 1 slide on small screens
          centerMode: false, // Disable center mode for better appearance
        },
      },
    ],
  };

  return (
    <>
      <div className="carousel-container max-w-6xl mx-auto my-8 p-4 mt-[350px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6 text-center mt-10">
          Our Students Say
        </h2>
        <Slider {...settings}>
          {[image1, image2, image3, image4,image5,image7,image8,image9,image10].map((image, index) => (
            <div
              key={index}
              className={`px-2 transition-transform duration-500 ${
                index === activeSlide
                  ? "transform scale-105 opacity-100"
                  : "transform scale-90 opacity-50"
              }`}
            >
              <img
                src={image}
                alt={`Testimonial ${index + 1}`}
                className="mx-auto rounded-[30px] h-64 "
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default StudentTestimonials;
