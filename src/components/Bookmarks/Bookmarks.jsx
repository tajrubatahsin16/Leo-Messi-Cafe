import React from "react";
import './Bookmarks.css';
import '../Cafe/Cafe.css';

const Bookmarks = ({bookmark}) => {
    return (
        <div className="selectBookmark ">
            <h3 style={{paddingLeft: "25px", paddingTop: "30px"}}>Bookmarked Blogs: {bookmark.length}</h3>
        </div>
    );
};

export default Bookmarks;