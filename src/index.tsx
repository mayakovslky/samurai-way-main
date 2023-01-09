import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

export type PostsPropsType = {
    posts: PostPropsType[]
}
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
let posts = [
    {id: 1, message:'Hi, how are you?', likesCount: 23},
    {id: 2, message:'Its my first post', likesCount: 10},
    {id: 3, message:'Its my first post', likesCount: 0},
    {id: 4, message:'Its my first post', likesCount: 12}
]


export type MessagePropsType = {
    id: number
    message: string
}
let messages = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'pepe'},
    {id: 3, message: 'hey'},
    {id: 4, message: 'hei hei'},
    {id: 5, message: 'moi'}
]
export type DialogPropsType = {
    id: number
    name: string
}
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Nasty'},
    {id: 5, name: 'Ash'}
]

export type DialogsPropsType = {
    messages: MessagePropsType[]
    dialogs: DialogPropsType[]
}

ReactDOM.render(
    <App posts={posts} messages={messages} dialogs={dialogs}/>,
  document.getElementById('root')
);