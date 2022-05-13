import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Volha Mitsiurova</h2>
                <div className={style.footers}>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                    <div className={style.footer}></div>
                </div>
                <span>©All rights reserved, 2022</span>
            </div>
        </div>
    )
}
