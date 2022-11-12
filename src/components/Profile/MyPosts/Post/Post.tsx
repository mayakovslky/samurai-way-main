import React from "react";
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://techtippr.com/wp-content/uploads/2021/08/ninja-background-512.png" alt="Avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}