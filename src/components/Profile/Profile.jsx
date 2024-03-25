import React from "react";
import classes from './Profile.module.css';
import  MyPosts from "./MyPosts/MyPosts.jsx";
import PostInfo from "./PostInfo/PostInfo.jsx";

const Profile = () => {
    return (
    <div className={classes.profile}>
        <PostInfo />
        <MyPosts />
    </div>
    );
}

export default Profile