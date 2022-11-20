import React from "react";
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>dimych</div>
                <div className={s.dialog + ' ' + s.active}>andry</div>
                <div className={s.dialog + ' ' + s.active}>vovich</div>
                <div className={s.dialog + ' ' + s.active}>sema</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>yo</div>
                <div className={s.message}>hey</div>
                <div className={s.message}>hei hei</div>
            </div>
        </div>
    )
};