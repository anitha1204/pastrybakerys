import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Who is fit for the course?",
      answer: " Aspiring Bakers and Pastry Chefs,Home Bakers,Culinary Enthusiasts,Career Changers "
    },
    { question: "How long is the course?", answer: "The course lasts for 2 months, offering a comprehensive learning experience. During this time, you'll receive hands-on training, expert guidance, and in-depth knowledge to help you master the necessary skills and earn your certification." },
    { question: "What do we provide?", answer: " Study materials & notes | Journals, Recipe notes & Ingredients, Chef coat, apron & caps" },
    { question: "What's the cost for this course?", answer: " Our 8 weeks Patisserie Certification course is priced at Rs 2,00,000/- ( inclusive of GST + Exam fee + Kits )" },
    { question: "Do we offer placements?", answer: " Yes, we offer placement assistance as part of the course. We have partnerships with various bakeries, restaurants, and culinary establishments, helping our graduates secure positions in the industry. While we do not guarantee placements, we provide support through resume building, interview preparation, and job referrals to maximize your chances of landing a great role." },
    { question: "Do we have internship offers?", answer: "Yes, we provide internship opportunities with partner companies." },
    { question: "Fee details?", answer: "The course fee includes all materials and resources. There are no hidden charges." }
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[90%] mx-auto p-6 sm:p-8 sm:ml-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6">F&Q</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <h3 className="font-nunito font-bold text-lg sm:text-2xl">{item.question}</h3>
              {openIndex === index ? (
                <HiChevronUp className="text-gray-500" />
              ) : (
                <HiChevronDown className="text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="font-nunito text-gray-600 mt-1 text-base sm:text-lg">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
