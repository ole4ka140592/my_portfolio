import React from "react";
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Title_h2} from "../common/components/title/Title_h2";
import Fade from "react-reveal/Fade";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={"contacts"}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title_h2 text={"Contacts"}/>
                <Fade left>
                    <form className={style.contacts}>
                        <input type="text" className={style.input}/>
                        <input type="text" className={style.input}/>
                        <textarea className={style.textarea}/>
                        <button type="submit" className={style.button}>SEND MESSAGE</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

