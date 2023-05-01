import React from "react";
import './Blogs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    const {blogCover, authorImage, authorName, publishDate, readTime, blogTitle} = props.blog;
    const handleReading = props.handleReading;
    const handleBookmark = props.handleBookmark;

    return (
        <div className="eachBlog">
            <img src={blogCover} alt="" />
            <div className="twoFlex">
                <div className="firstFlex">
                    <img src={authorImage} alt="" />
                    <div className="des">
                        <h2>{authorName}</h2>
                        <h3 style={{color:"rgba(17, 17, 17, 0.6)"}}>{publishDate}</h3>
                    </div>
                </div>
                <h4 style={{color:"rgba(17, 17, 17, 0.6)"}}>{readTime} <FontAwesomeIcon icon={faBookmark}  onClick={() => handleBookmark(props.eachBlog)}/></h4>
            </div>
            <h1 style={{color:"#111111"}}>{blogTitle}</h1>
            <h4 style={{color:"rgba(17, 17, 17, 0.6)"}}>#beginners #programming</h4>
            <button onClick={() => handleReading(props.blog)} style={{color:"#6047EC", textDecoration:"underline"}} className="btn-text">Mark as read</button>
        </div>
    );
};

export default Blogs;