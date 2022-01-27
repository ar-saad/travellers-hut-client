import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
    return (
        <div className="my-6">
            <div className="border-2 border-gray-400 p-3 rounded-lg grid grid-cols-1 lg:grid-cols-12 gap-3">
                <div className="lg:col-span-3">
                    <img className="w-full" src={blog.blogImg} alt="cover" />
                </div>
                <div className="lg:col-span-3">
                    <p className="text-lg mb-2">
                        <span className="font-medium">Traveller: </span>
                        {blog.traveller}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-medium">Location: </span>
                        {blog.location}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-medium">Total Expense: </span>$
                        {blog.cost}
                    </p>
                    <p className="text-lg">
                        <span className="font-medium">Category: </span>
                        {blog.category}
                    </p>
                </div>
                <div className="lg:col-span-6">
                    <h3 className="text-2xl font-medium mb-2">
                        {blog.blogTitle}
                    </h3>
                    <p>
                        {blog.description.slice(0, 300)}
                        {".......  "}
                        <Link
                            to={`/blogDetail/${blog._id}`}
                            className="font-medium inline-block text-blue-700"
                        >
                            read more
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
