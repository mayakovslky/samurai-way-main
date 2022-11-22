import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type dialogDataType = {
    id: number
    name: string
}

type MessageType = {
    id: any
    message: string
}

const DialogItem = (props: dialogDataType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Nasty'}
]

let messages = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'yo'},
    {id: 3, message: 'hey'},
    {id: 4, message: 'hei hei'}
]

let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>);


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};