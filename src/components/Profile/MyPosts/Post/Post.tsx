import React from "react";
import s from './Post.module.css';

type PostType = {
    id: number
    likesCount: number
    message: string
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://techtippr.com/wp-content/uploads/2021/08/ninja-background-512.png" alt="Avatar"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

// сделать счетчиков лайков через пропсы