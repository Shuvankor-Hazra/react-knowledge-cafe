import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime }) => {
  return (
    <div className="lg:w-1/3 bg-[#1111110D]">
      <div className="py-9 flex items-center justify-center bg-[#6047EC2A]">
        <h1 className="text-2xl font-bold text-[#6047EC]">
          Spend time on read: <span className="px-3 py-1 bg-[#6047EC1A] ">{readingTime}</span> min
        </h1>
      </div>
      <div className=" p-6">
        <h1 className="text-3xl font-semibold text-center mb-5">
          Bookmarked Blogs: {bookmarks.length}{" "}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} idx={idx} bookmark={bookmark} readingTime={readingTime} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
};

export default Bookmarks;
