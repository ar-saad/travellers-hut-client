import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditBlog = () => {
    const { id } = useParams();
    const [blogInfo, setBlogInfo] = useState({});
    const history = useHistory();
    console.log(blogInfo);

    useEffect(() => {
        fetch(`https://tranquil-thicket-16665.herokuapp.com/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => setBlogInfo(data));
    }, [id]);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...blogInfo };
        newLoginData[field] = value;
        setBlogInfo(newLoginData);
    };

    const handleUpdateBlog = (id) => {
        const proceed = window.confirm("Are you sure you want to update?");
        if (proceed) {
            fetch(`https://tranquil-thicket-16665.herokuapp.com/blogs/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(blogInfo),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        alert("Blog updated successfully");
                        history.push("/home");
                    } else {
                        alert("Blog update unsuccessful");
                    }
                });
        }
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-medium my-3">Edit Blog</h2>
            <form onSubmit={() => handleUpdateBlog(id)}>
                <p className="text-lg font-bold">Blog Title:</p>
                <input
                    required
                    type="text"
                    name="blogTitle"
                    defaultValue={blogInfo.blogTitle}
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter a title"
                />
                <p className="text-lg font-bold mt-4">Blog Image URL:</p>
                <input
                    required
                    type="text"
                    name="blogImg"
                    defaultValue={blogInfo.blogImg}
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter image URL"
                />
                <p className="text-lg font-bold mt-4">Traveller</p>
                <input
                    required
                    type="text"
                    name="traveller"
                    defaultValue={blogInfo.traveller}
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Write the traveller name"
                />

                <p className="text-lg font-bold mt-4">Total Cost:</p>
                <input
                    required
                    type="number"
                    name="cost"
                    defaultValue={blogInfo.cost}
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Total cost"
                />
                <p className="text-lg font-bold mt-4">Category:</p>
                <input
                    required
                    type="text"
                    name="category"
                    defaultValue={blogInfo.category}
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter a category"
                />
                <p className="text-lg font-bold mt-4">Location:</p>
                <input
                    required
                    type="text"
                    name="location"
                    defaultValue={blogInfo.location}
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter location of travel"
                />
                <p className="text-lg font-bold mt-4">Description:</p>
                <textarea
                    required
                    type="text"
                    name="description"
                    defaultValue={blogInfo.description}
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Write a description"
                />
                <input
                    className="font-bold bg-green-300 py-2 px-4 rounded-lg block my-4 cursor-pointer"
                    type="submit"
                    value="Confirm Edit"
                />
            </form>
        </div>
    );
};

export default EditBlog;
