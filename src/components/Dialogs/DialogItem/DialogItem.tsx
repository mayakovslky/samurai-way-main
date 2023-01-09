import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogPropsType} from "../../../index";

export const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}