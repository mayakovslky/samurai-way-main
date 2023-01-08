import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type MessageType = {
    id: number
    message: string
}

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Nasty'},
    {id: 5, name: 'Ash'}
]

let messages = [
    {id: 1, message: 'yo'},
    {id: 2, message: 'pepe'},
    {id: 3, message: 'hey'},
    {id: 4, message: 'hei hei'},
    {id: 5, message: 'moi'}
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