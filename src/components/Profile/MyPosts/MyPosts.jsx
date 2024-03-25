import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

    let PostData = [
      {id: '1', message: 'Дарова боровы', src: 'https://chpic.su/_data/stickers/m/mellborov/mellborov_037.webp', likes: '12'},
      {id: '2', message: 'Всем ку!', src: 'https://cybersport.metaratings.ru/storage/images/db/c6/dbc6c8b8c8dd7205c7eadd5330a50ba4.jpg', likes: '17'}
    ]

    let postItems = PostData.map(postItem => <Post message={postItem.message} src={postItem.src} num={postItem.id} likes={postItem.likes}/>)

    return (
        <div className={classes.postContent}>
          <h3>My post</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div>
            New post
          </div>
          {postItems}
        </div>
    );
}

export default MyPosts