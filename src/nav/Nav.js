import React from 'react';
import style from './Nav.module.scss';


export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.navLink} href="">home page</a>
            <a className={style.navLink} href="#skills">skills</a>
            <a className={style.navLink} href="#projects">projects</a>
            <a className={style.navLink} href="#contacts">contacts</a>
        </div>
    )
}

