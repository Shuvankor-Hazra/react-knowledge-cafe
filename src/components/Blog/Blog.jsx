import { FaBookBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";

const Blog = ({ blog,handleAddToBookmarks,handleReadingTime }) => {
  console.log(blog);

  const {
    cover,
    title,
    author,
    author_img,
    post_date,
    reading_time,
    hashtags,
  } = blog;

  //   const [has1, has2, has3] = blog.hashtags;

  return (
    <div className="border-b-2">
      <div className="min-h-[500px] mt-5 py-4 ">
        <img className="w-full h-full rounded-lg" src={cover} alt="" />
        <div className="flex justify-between items-center py-8">
          <div className="flex gap-3 lg:gap-6 items-center">
            <img className="w-14 h-14 lg:w-16 lg:h-16 rounded-full" src={author_img} alt="" />
            <div>
              <h3 className="lg:text-2xl font-bold"> {author} </h3>
              <p className="lg:font-semibold text-[#11111199]"> {post_date} </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg lg:text-xl font-medium"> {reading_time} min read</p>
            <button onClick={()=>handleAddToBookmarks(blog)} className="btn rounded-lg text-lg lg:text-2xl">
              <FaBookBookmark />
            </button>
          </div>
        </div>
        <h1 className="text-2xl lg:text-4xl font-medium"> {title} </h1>
      </div>
      <div className="flex gap-4 py-4 lg:text-xl font-medium text-[#11111199] ">
        {hashtags.map((hash, idx) => (
          <p key={idx}> #{hash}</p>
        ))}

        {/* <p> #{has1} </p>
        <p> #{has2} </p>
        <p> #{has3} </p> */}
      </div>
      <button onClick={()=>handleReadingTime(reading_time)} className="text-primary lg:text-xl font-semibold underline mb-8">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired
};

export default Blog;
