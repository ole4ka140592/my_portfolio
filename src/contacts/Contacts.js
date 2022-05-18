import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Title_h2} from "../common/components/title/Title_h2";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title_h2 text={"Contacts"}/>
                <form className={style.contacts}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type="submit">Send</button>
                </form>
                {/*<a className={style.button}>Отправить</a>*/}
            </div>
        </div>
    )
}

