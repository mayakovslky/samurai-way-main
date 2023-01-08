import React from "react";
import s from './../Dialogs.module.css';

type MessageType = {
    id: any
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

