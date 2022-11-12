import React from "react";
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://i.pinimg.com/564x/10/3e/39/103e39b7d430b671138040029cf366af.jpg" alt="Picture"/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>

        </div>
    )
}