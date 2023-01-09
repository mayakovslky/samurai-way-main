import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPropsType} from "../../redux/state";


export const Profile = (props: PostsPropsType) => {
    return (
        <div>
            <ProfileInfo/>
             <MyPosts posts={props.posts} />
        </div>
    )
}