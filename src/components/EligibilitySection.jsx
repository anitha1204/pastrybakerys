


// import React from 'react';
// import img from "../assets/Beginner.jpeg"; // Replace with actual image paths
// import img1 from "../assets/Home Bakers.jpeg";
// import img2 from "../assets/Entrepreneurs.jpeg";

// const EligibilitySection = () => {
//     const levels = [
//         {
//             image: img, // Direct image reference
//             title: "Beginners",
//             description: "Passionate about baking and desserts."
//         },
//         {
//             image: img1,
//             title: "Home Bakers",
//             description: "Looking to fine-tune their patisserie skills."
//         },
//         {
//             image: img2,
//             title: "Entrepreneurs",
//             description: "Seeking to build a career in the F&B sector."
//         }
//     ];
    
//     return (
//         <div className="px-4 py-8 md:px-16 lg:px-24 ">
//             {/* Eligibility Section */}
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-[-10] text-center">Eligibility</h2>

//             {/* Eligibility Levels Display */}
//             <div className="flex justify-center items-center">
//                 <div className="grid grid-cols-1 md:grid-cols-3">
//                     {levels.map((level, index) => (
//                         <div key={index} className="text-center">
//                             {/* Center the image horizontally */}
//                             <img 
//                                 src={level.image} 
//                                 alt={level.title} 
//                                 className="w-[250px] h-48 object-cover rounded-xl mx-auto" 
//                             />
//                             {/* Title and Description */}
//                             <div className="p-4">
//                                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-butler mb-2 md:mb-4">{level.title}</h2>
//                                 <p className="text-gray-600 text-sm font-nunito">{level.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Course Details Section */}
//             <div className="lg:max-w-[90%] mx-auto p-12 rounded-[50px] shadow-md text-white bg-primary mt-6">
//                 <p className="text-center font-nunito">
//                     Course Timing <span className=" lg:text-2xl">10 AM - 5:30 PM, 4 days a week</span>
//                 </p>
//                 <p className="text-center mt-4 font-nunito">
//                     Fees <span className="font-semibold lg:text-2xl ">Rs 2,00,000 (inclusive of GST, Exam fee, and Kits)</span>
//                 </p>

//                 {/* Study Materials Section */}
//                 <div className="mt-6 text-center font-nunito">
//                     <p className="text-lg">
//                         <span className="font-semibold text-xl">Kits Study Materials:</span> Includes journals, recipe notes, and ingredients.
//                     </p>
//                     <ul className="list-disc list-inside mt-4">
//                         <li>
//                             <span className="font-semibold text-xl">Uniform:</span> Chef coat, apron, and caps.
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Certification Section */}
//                 <div className="mt-6 text-center font-nunito">
//                     <ul className="list-disc list-inside mt-4">
//                         <li>
//                             <span className="font-semibold text-xl">Certification:</span> Upon successful completion of the course, students will be awarded a Certification
//                         </li>
//                         <span> affiliated with City & Guilds, London.</span>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EligibilitySection;






import React from 'react';
// import img from "../assets/Beginner.jpeg"; // Replace with actual image paths
// import img1 from "../assets/Home Bakers.jpeg";
// import img2 from "../assets/Entrepreneurs.jpeg";

const EligibilitySection = () => {
    const levels = [
        {
            
            title: "Beginners",
            description: "Passionate about baking and desserts."
        },
        {
        
            title: "Home Bakers",
            description: "Looking to fine-tune their patisserie skills."
        },
        {
        
            title: "Entrepreneurs",
            description: "Seeking to build a career in the F&B sector."
        }
    ];
    
    return (
        <div className="px-4 py-8 md:px-16 lg:px-24 ">
            {/* Eligibility Section */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-[-10] text-center">Eligibility</h2>

            {/* Eligibility Levels Display */}
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {levels.map((level, index) => (
                        <div key={index} className="text-center">
                            {/* Center the image horizontally */}
                            <img 
                                src={level.image} 
                                alt={level.title} 
                                className="w-[250px] h-48 object-cover rounded-xl mx-auto" 
                            />
                            {/* Title and Description */}
                            <div className="p-4">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-butler mb-2 md:mb-4">{level.title}</h2>
                                <p className="text-gray-600 text-sm font-nunito">{level.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Course Details Section */}
            <div className="lg:max-w-[90%] mx-auto p-12 rounded-[50px] shadow-md text-white bg-primary mt-6">
                <p className="text-center font-nunito">
                    Course Timing <span className=" lg:text-2xl">10 AM - 5:30 PM, 4 days a week</span>
                </p>
                <p className="text-center mt-4 font-nunito">
                    Fees <span className="font-semibold lg:text-2xl ">Rs 2,00,000 (inclusive of GST, Exam fee, and Kits)</span>
                </p>

                {/* Study Materials Section */}
                <div className="mt-6 text-center font-nunito">
                    <p className="text-lg">
                        <span className="font-semibold text-xl">Kits Study Materials:</span> Includes journals, recipe notes, and ingredients.
                    </p>
                    <ul className="list-disc list-inside mt-4">
                        <li>
                            <span className="font-semibold text-xl">Uniform:</span> Chef coat, apron, and caps.
                        </li>
                    </ul>
                </div>

                {/* Certification Section */}
                <div className="mt-6 text-center font-nunito">
                    <ul className="list-disc list-inside mt-4">
                        <li>
                            <span className="font-semibold text-xl">Certification:</span> Upon successful completion of the course, students will be awarded a Certification
                        </li>
                        <span> affiliated with City & Guilds, London.</span>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EligibilitySection;
