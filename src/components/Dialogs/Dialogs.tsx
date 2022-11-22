import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: any
    name: string
}

type MessageType = {
    id: any
    message: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Nasty'}
]

let dialogsElements = [
    <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>,
    <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>,
    <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>,
    <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
]

let messagesData = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'yo'},
    {id: 3, message: 'hey'},
    {id: 4, message: 'hei hei'}
]

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements[0]}
                {dialogsElements[1]}
                {dialogsElements[2]}
                {dialogsElements[3]}
            </div>
            <div className={s.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message}/>
                <Message id={messagesData[1].id} message={messagesData[1].message}/>
                <Message id={messagesData[2].id} message={messagesData[2].message}/>
                <Message id={messagesData[3].id} message={messagesData[3].message}/>
            </div>
        </div>
    )
};