import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time) => {
    const newReadingTome = readingTime + time;
    setReadingTime(newReadingTome);
  }

  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
