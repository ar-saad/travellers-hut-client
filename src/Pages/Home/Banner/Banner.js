import { Link } from "react-router-dom";
import React from "react";

const Banner = () => {
    return (
        <div className="relative">
            <img
                className="w-full"
                src="https://i.ibb.co/SQ002zn/banner-image.jpg"
                alt="Home page banner"
            />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 absolute inset-y-1">
                    <div className="flex justify-center items-center">
                        <div className="mx-6">
                            <h2 className="text-xl xs:text-3xl md:text-5xl lg:text-7xl text-green-900 font-bold md:my-12">
                                Travellers Hut
                            </h2>
                            <p className="text-xs md:text-lg lg:text-xl text-green-700 font-bold">
                                Scroll through the various blogs to find the
                                destination of your next trip.
                            </p>
                            <Link
                                to="#"
                                className="text-sm inline-block sm:text-lg my-4 md:my-8 font-bold bg-green-300 py-1 px-2 sm:py-2 sm:px-4 rounded-lg"
                            >
                                View Blogs
                            </Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
