import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostsPropsType} from "../../../index";

export const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(p =><Post id={p.id} message={p.message} likesCount={p.likesCount}/>
    )

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}