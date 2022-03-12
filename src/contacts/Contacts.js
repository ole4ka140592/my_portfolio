import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
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

