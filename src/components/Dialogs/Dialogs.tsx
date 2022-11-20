import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}

type MessageType = {
    text: string
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
        <div className={s.message}>{props.text}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Dimych'/>
                <DialogItem id='2' name='Andrey'/>
                <DialogItem id='3' name='Maria'/>
                <DialogItem id='4' name='Nasty'/>
            </div>
            <div className={s.messages}>
                <Message text='yo'/>
                <Message text='yo'/>
                <Message text='hey'/>
                <Message text='hei hei'/>
            </div>
        </div>
    )
};