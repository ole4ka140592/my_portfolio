import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';

export const Main = () => {


    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h2 className={style.name}>I am Volha Mitsiurova</h2>
                    <p className={style.frontendDeveloper}>Front-end Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}

