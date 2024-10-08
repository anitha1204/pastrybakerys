
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        title: "I'M HAPPY TO TALK ABOUT MY ACADEMY EXPERIENCE.",
        text: `I recently attended a 2-month patisserie certification course from DeepaliS Academy and I got exactly what I was looking for my passion.
        I am basically different from background, I am in the automobile sector and baking is not my cup of tea. But now I have confidence and I am very happy and grateful that I did the course.
        Chef Deepali is knowledgeable, experienced, and passionate. Her way of teaching us the theory of baking science was so easy to grasp and understand. She makes sure that all her students get one-on-one attention. 
        She timely clears all our doubts and teaches us all the tips, latest trends, and advice we need. The best part is the freedom each individual gets to try different variations and experiment.
        Once again, thanks to Deepali mam and their team for being such enthusiastic and helpful. I am very happy to be part of her academy.`,
        author: "RAMESH"
    },
    {
        title: "THANK YOU FOR BEING SUCH A WONDERFUL TEACHER.",
        text: `I wanted to take a moment to thank you for being such a wonderful teacher. Your baking class has been an amazing experience for me, and I have learned so much from you about eggless baking in the 2-month course.
        Your passion for baking is contagious, and your enthusiasm for teaching is truly inspiring. I feel more confident in the kitchen thanks to your guidance. Thank you for sharing your knowledge and passion for baking with us.`,
        author: "DIVYA JAIN"
    },
    {
        title: "I'M HAPPY TO TALK ABOUT MY ACADEMY EXPERIENCE.",
        text: `I finished this academy's two-month patisserie course. Chef Deepali is incredibly knowledgeable and competent. There is a friendly atmosphere at this academy. 
        I had the best educational experience here, and I now have the self-assurance to start a successful profession. I express my gratitude to Chef Deepali and her team for their affection and encouragement. I heartily suggest this institution to anyone with a passion for baking.`,
        author: "AMRUTHA"
    }
];

const TestimonialsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6 text-center mt-10">
                Testimonials
            </h3>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-center p-6">
                        <h4 className="text-lg md:text-xl lg:text-[27px] mb-4 text-gold-500  font-butler">
                            {testimonial.title}
                        </h4>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-nunito">
                            {testimonial.text}
                        </p>
                        <p className="text-lg md:text-xl lg:text-3xl text-gold-500  font-butler">
                            - {testimonial.author}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialsCarousel;
