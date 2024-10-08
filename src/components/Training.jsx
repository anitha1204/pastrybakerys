



import React from 'react';

const Training = () => {
    return (
        <>
            <div className="flex flex-col items-center px-4 py-8 md:px-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-butler text-primary mb-4 md:mb-6 text-center lg:mt-2 ">Hands-on Training</h2>
                <p className="font-nunito font-semibold md:text-lg lg:text-lg">
                    Our academy emphasizes hands-on training to ensure that each learner masters the necessary skills.
                </p>
                <div className="mt-6 space-y-4 md:text-lg lg:text-lg">
                    <p className="text-gray-800 font-semibold">
                        Extensive Practice:
                        <span className="font-normal ml-2">
                            With 99% hands-on training, learners practice under the direct supervision of Chef Despal and our skilled faculty.
                        </span>
                    </p>
                    <p className="text-gray-800 font-semibold lg:text-center">
                        Skill Perfection:
                        <span className="font-normal ml-2">
                            This approach helps build confidence and fosters creativity and innovation in baking.
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Training;
