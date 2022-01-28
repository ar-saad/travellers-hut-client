import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBlog = () => {
    const [blogInfo, setBlogInfo] = useState({});
    const history = useHistory();

    const handleAddBlog = (e) => {
        e.preventDefault();

        fetch("https://tranquil-thicket-16665.herokuapp.com/blogs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(blogInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Blog submitted successfully");
                    history.push("/home");
                }
            });
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        blogInfo.status = "pending";
        const newLoginData = { ...blogInfo };
        newLoginData[field] = value;
        setBlogInfo(newLoginData);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-medium my-3">Write Blog</h2>
            <form onSubmit={handleAddBlog}>
                <p className="text-lg font-bold">Blog Title:</p>
                <input
                    required
                    type="text"
                    name="blogTitle"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter a title"
                />
                <p className="text-lg font-bold mt-4">Blog Image URL:</p>
                <input
                    required
                    type="text"
                    name="blogImg"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter image URL"
                />
                <p className="text-lg font-bold mt-4">Traveller</p>
                <input
                    required
                    type="text"
                    name="traveller"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Write the traveller name"
                />

                <p className="text-lg font-bold mt-4">Total Cost:</p>
                <input
                    required
                    type="number"
                    name="cost"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Total cost"
                />
                <p className="text-lg font-bold mt-4">Category:</p>
                <input
                    required
                    type="text"
                    name="category"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter a category"
                />
                <p className="text-lg font-bold mt-4">Location:</p>
                <input
                    required
                    type="text"
                    name="location"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter location of travel"
                />
                <p className="text-lg font-bold mt-4">Description:</p>
                <textarea
                    required
                    type="text"
                    name="description"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Write a description"
                />
                <input
                    className="font-bold bg-green-300 py-2 px-4 rounded-lg block my-4 cursor-pointer"
                    type="submit"
                    value="Submit Blog"
                />
            </form>
        </div>
    );
};

export default AddBlog;
