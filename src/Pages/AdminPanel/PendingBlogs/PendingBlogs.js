import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PendingBlogs = () => {
  const [blogsPending, setBlogsPending] = useState([]);
  const [pendingBlogsLoading, setPendingBlogsLoading] = useState(false);

  useEffect(() => {
    setPendingBlogsLoading(true);
    fetch("https://travellers-hut-server.vercel.app/pendingblogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogsPending(data);
        setPendingBlogsLoading(false);
      });
  }, []);

  const handleDeleteBtn = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (proceed) {
      fetch(`https://travellers-hut-server.vercel.app/blogs/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Blog deleted successfully");
          }
          const rest = blogsPending.filter((blog) => blog._id !== id);
          setBlogsPending(rest);
        });
    }
  };

  const handleApproveBtn = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to approve this blog?"
    );
    if (proceed) {
      fetch(`https://travellers-hut-server.vercel.app/blogs/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("The blog has been approved");
          }
          const rest = blogsPending.filter((blog) => blog._id !== id);
          setBlogsPending(rest);
        });
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="my-5 manage-blogs-page">
          <h1 className="text-3xl font-medium my-3">
            These are the blogs pending for approval
          </h1>
          {pendingBlogsLoading ? (
            <div style={{ minHeight: "600px" }}>
              <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            </div>
          ) : (
            <div>
              <table className="blogs-table">
                <thead>
                  <tr>
                    <th>Blog Title</th>
                    <th>Traveller</th>
                    <th>Location</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Approve</th>
                  </tr>
                </thead>
                <tbody>
                  {blogsPending.map((blog) => (
                    <tr key={blog._id}>
                      <td data-title="Blog Title">{blog.blogTitle}</td>
                      <td data-title="Traveller">{blog.traveller}</td>
                      <td data-title="Location">{blog.location}</td>
                      <td data-title="View">
                        <Link
                          className="bg-blue-500 rounded-lg border-2 border-gray-900 px-1"
                          to={`/blogDetail/${blog._id}`}
                        >
                          View
                        </Link>
                      </td>
                      <td data-title="Edit">
                        <Link
                          className="bg-yellow-500 rounded-lg border-2 border-gray-900 px-1"
                          to={`/editBlog/${blog._id}`}
                        >
                          Edit
                        </Link>
                      </td>
                      <td data-title="Delete">
                        <button
                          className="bg-red-600 rounded-lg border-2 border-gray-900 px-1"
                          onClick={() => handleDeleteBtn(blog._id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td data-title="Approve">
                        <button
                          className="bg-green-500 rounded-lg border-2 border-gray-900 px-1"
                          onClick={() => handleApproveBtn(blog._id)}
                        >
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingBlogs;
