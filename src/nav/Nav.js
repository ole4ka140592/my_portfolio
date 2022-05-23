import React from 'react';
import style from './Nav.module.scss';


export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.navLink} href="#main">home page</a>
            <a className={style.navLink} href="">skills</a>
            <a className={style.navLink} href="">projects</a>
            <a className={style.navLink} href="">contacts</a>
        </div>
    )
}

