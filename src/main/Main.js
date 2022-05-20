import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import iImage from "../assets/image/I.jpg"

export const Main = () => {

    const i = {
        backgroundImage: `url(${iImage})`
    }


    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h2 className={style.name}>I am Volha Mitsiurova</h2>
                    <p className={style.frontendDeveloper}>Front-end Developer</p>
                </div>
                <div className={style.photo} style={i}></div>
            </div>
        </div>
    )
}

