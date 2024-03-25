import React from 'react';
import s from './PostInfo.module.css'

const PostInfo = () => {
    return(
        <div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/4/42/Plain_Landscape.jpg'/>
            </div>
            <div className={s.description}>
                ava + descr
            </div>
        </div>
    ); 
}

export default PostInfo;