import React from 'react';
import img1 from "../assets/IMG_1895.JPG"; 
import img2 from "../assets/LAN01568.JPG"; 

const Home = () => {
    return (
        <>
           <section className="container mx-auto p-4 mt-6" >
                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="md:w-[59%]"> 
                        <img
                            src={img1}
                            alt="Sliced bread"
                            className="h-[350px] w-full lg:rounded-tr-[150px] shadow-lg object-cover  lg:-ml-[111px] "
                        />
                    </div>

                    <div className="md:w-[40%] md:pl-8 mt-4 md:mt-0"> 
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6">Online Classes</h2>
                        <p className=" mb-4 font-nunito text-lg">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <button className="bg-gray-300 text-black px-4 py-1 font-nunito"
                           
                        >
                            Enquiry Now
                        </button>
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col-reverse md:flex-row items-center mt-8 md:-mt-12">
                    <div className="md:w-[40%] md:pr-8 mt-4 md:mt-0"> 
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6">Live Classes</h2>
                        <p className=" mb-4  font-nunito text-lg ">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <button className="bg-gray-300 text-black px-4 py-1 font-nunito"
                            onClick={() => {
                                roomsRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Enquiry Now
                        </button>
                    </div>

                    <div className="md:w-[59%]"> 
                        <img
                            src={img2}
                            alt="Sliced bread"
                            className="h-[350px] w-full lg:rounded-bl-[150px] shadow-lg object-cover lg:ml-[125px]"
                        />
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Home;
