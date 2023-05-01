import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";
import './Cafe.css';

const Cafe = () => {
    const [blogs, setCafe] = useState([]);
    const [time, setTime] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    useEffect(() => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setCafe(data))
    },[])

    const handleReading = (blog) => {
        const newTiming = time + blog.readTime;
        setTime(newTiming);
    }

    const handleBookmark = (eachBlog) => {
        const newBlog = [...bookmark, eachBlog];
        setBookmark(newBlog);
    }
    return (
        <div className="cafe-container">
            <div className="blogs">
                {
                    blogs.map(blog => <Blogs 
                        key={blog._id}
                        blog = {blog}
                        handleReading={handleReading}
                        handleBookmark={handleBookmark}
                    ></Blogs>)
                }
            </div>
            <div className="blogs-cart">
                <div className="timeSpent">
                    <h2 style={{color:"#6047EC"}}>Spent time on read: {time.length} min</h2>
                </div>
                <div className="bookmark">
                    <Bookmarks bookmark={bookmark}></Bookmarks>
                </div>
            </div>
        </div>
    );
};
 export default Cafe;