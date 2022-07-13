import React from "react";
import s from './FeedBlog.module.css';
import FeedBlogComment from "./FeedBlogComment/FeedBlogComment";
import FeedBlogAction from "./FeedBlogAction/FeedBlogAction";
import FeedBlogPost from "./FeedBlogPost/FeedBlogPost";
import FeedBlogHeader from "./FeedBlogHeader/FeedBlogHeader";
import FeedBlogCommentContainer from "./FeedBlogComment/FeedBlogCommentContainer";


const FeedBlog = (props) => {

    return (
        <div>
            <p className="titleName">Feed</p>
            <div className={s.feedBlog}>
                <FeedBlogHeader/>
                <FeedBlogPost/>
                <FeedBlogAction/>
                <FeedBlogCommentContainer/>
            </div>
        </div>
    )
}

export default FeedBlog;