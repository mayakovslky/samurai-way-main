import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {

    return (
        <div>
            My posts
            <textarea name="" id=""></textarea>
            <button>Add post</button>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='23'/>
                <Post message='Its my first post' likesCount='0'/>
            </div>
        </div>
    )
}