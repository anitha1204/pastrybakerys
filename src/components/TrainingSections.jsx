import React from 'react';

const TrainingSections = () => {
    return (
        <>
            {/* Horizontal Divider */}
            <div className="border border-gray-400 mb-6 w-full max-w-7xl mx-auto"></div>

            <div className="px-4 py-8 md:px-16 lg:px-24">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {/* Emphasis on Theory */}
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-butler text-primary mb-2 md:mb-4">Emphasis on Theory</h3>
                        <strong className="mt-2">
                            Understanding the science behind each baking step is crucial.
                        </strong>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                            <li>
                                <strong>Scientific Knowledge:</strong> Chef Despal stresses the importance of theoretical knowledge, integrating it with practical sessions.
                            </li>
                            <li>
                                <strong>Regular Assessments:</strong> Learners are quizzed and assessed routinely to ensure they have a thorough understanding of each module.
                            </li>
                        </ul>
                    </div>
                    {/* State-of-the-Art Kitchen */}
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-butler text-primary mb-2 md:mb-4">State-of-the-Art Kitchen</h3>
                        <strong className="mt-2">
                            Our kitchen is equipped with the best tools and technology in the baking industry.
                        </strong>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                            <li>
                                <strong>Modern Facilities:</strong> Spacious workstations with individual fridges and lockers are available for learners.
                            </li>
                            <li>
                                <strong>Special Accommodations:</strong> Separate workstations for vegetarian learners are available upon request.
                            </li>
                        </ul>
                    </div>
                    {/* Elaborate Modules */}
                    <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-butler text-primary mb-2 md:mb-4">Elaborate Modules</h3>
                        <strong className="mt-2">
                            Our curriculum covers a wide range of recipes and techniques from around the world.
                        </strong>
                        <ul className="mt-4 space-y-2 list-disc list-inside">
                            <li>
                                <strong>Global Recipes:</strong> Learn to craft classic and trendy, in-demand recipes from a broad base.
                            </li>
                            <li>
                                <strong>Adaptive Skills:</strong> The curriculum is designed to help bakers adapt to the ever-changing patisserie industry.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex justify-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                        {/* Business Acumen */}
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-butler text-primary mb-2 md:mb-4">Business Acumen</h3>
                            <strong className="mt-2">
                                Gain the confidence to start your own venture with adequate business knowledge.
                            </strong>
                            <ul className="mt-4 space-y-2 list-disc list-inside">
                                <li>
                                    <strong>Financial Management:</strong> Learn budgeting, managing finances, vendor management, food math, and pricing.
                                </li>
                                <li>
                                    <strong>Entrepreneurial Skills:</strong> The course prepares you to build and manage a successful food business.
                                </li>
                            </ul>
                        </div>
                        {/* Post-Course Support */}
                        <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-butler text-primary mb-2 md:mb-4">Post-Course Support</h3>
                            <strong className="mt-2">
                                We provide active post-course support to assist learners in their professional journeys.
                            </strong>
                            <ul className="mt-4 space-y-2 list-disc list-inside">
                                <li>
                                    <strong>WhatsApp Support:</strong> Maintain contact with our team for guidance in starting your food business.
                                </li>
                                <li>
                                    <strong>Entrepreneurial Encouragement:</strong> We encourage learners to become entrepreneurs in the F&B industry.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border border-gray-400  w-full max-w-7xl mx-auto"></div>
        </>
    );
};

export default TrainingSections;
