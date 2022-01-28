import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState({});

    useEffect(() => {
        fetch(`https://tranquil-thicket-16665.herokuapp.com/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => setBlogDetail(data));
    }, [id]);

    return (
        <div className="container mb-10">
            <h1 className="text-center text-5xl my-10 font-bold">Blog</h1>
            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <img src={blogDetail.blogImg} alt="" className="w-full" />
                    <div>
                        <h1 className="text-2xl font-medium mt-3">
                            {blogDetail.blogTitle}
                        </h1>
                        <h1 className="text-lg font-medium mb-3">
                            <span className="font-bold">Traveller:</span>{" "}
                            {blogDetail.traveller}
                        </h1>
                        <h1 className="text-md font-medium">
                            <span className="font-bold">Location:</span>{" "}
                            {blogDetail.location}
                        </h1>
                        <h1 className="text-md font-medium">
                            <span className="font-bold">category:</span>{" "}
                            {blogDetail.category}
                        </h1>
                        <h1 className="text-md font-medium">
                            <span className="font-bold">
                                Travelling expense:{" "}
                            </span>
                            ${blogDetail.cost}
                        </h1>
                    </div>
                    <div className="mt-5">
                        <p>{blogDetail.description}</p>
                    </div>
                </div>
                <div className="col-span-4">
                    <h1 className="text-2xl text-center font-bold">
                        More blogs
                    </h1>
                    <h4 className="text-lg text-center font-medium mt-10">
                        Coming Soon
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
