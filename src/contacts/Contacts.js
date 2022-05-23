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
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea className={style.input}/>
                    <button type="submit" className={style.button}>SEND MESSAGE</button>
                </form>
                {/*<a className={style.button}>Отправить</a>*/}
            </div>
        </div>
    )
}

