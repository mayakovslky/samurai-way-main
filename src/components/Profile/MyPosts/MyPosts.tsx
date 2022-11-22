import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message:'Hi, how are you?', likesCount: 23},
        {id: 2, message:'Its my first post', likesCount: 10}
    ]

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
            <div className={s.posts}>
                <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>

        </div>
    )
}