import React from "react";
import { useState, useEffect } from "react";
import SingleBlog from "./../SingleBlog/SingleBlog";
import "./Blog.css";

const Blogs = () => {
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 10;

  useEffect(() => {
    setBlogsLoading(true);
    fetch(
      `https://travellers-hut-server.vercel.app/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setBlogsLoading(false);
      });
  }, [page]);

  return (
    <div className="container mx-auto my-16 relative">
      <h2 className="text-5xl font-bold text-center my-12">All blogs</h2>
      <div>
        {blogsLoading ? (
          <div style={{ minHeight: "250px" }}>
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          </div>
        ) : (
          blogs.map((blog) => <SingleBlog key={blog._id} blog={blog} />)
        )}

        {/* {blogs.map((blog) => (
                    <SingleBlog key={blog._id} blog={blog} />
                ))} */}

        <div className="pagination flex justify-center">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected" : ""}
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
