import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmarks,handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:w-2/3 lg:pr-4 px-3 lg:px-0">
      <h1 className="text-2xl lg:text-3xl font-semibold pt-8 text-center">
        Numbers of Blog: {blogs.length}
      </h1>
      
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime} />
      ))}
    </div>
  );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
