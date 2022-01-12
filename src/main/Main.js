import React from 'react';
import style from './Main.module.css';



export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am Volha Mitsiurova</h1>
                <p>Front-end developer</p>
            </div>
            <div className={style.photo}></div>
        </div>
    )
}

