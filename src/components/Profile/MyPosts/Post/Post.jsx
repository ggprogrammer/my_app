import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
          <div className={classes.fp}>
            <img src={props.src}/>
            <h2>Post {props.num}</h2>
            <p>{props.message}</p>
          </div>
          <p>Likes {props.likes}</p>
        </div>
    );
}

export default Post