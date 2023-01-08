import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type dialogDataType = {
    id: number
    name: string
}

export const DialogItem = (props: dialogDataType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}