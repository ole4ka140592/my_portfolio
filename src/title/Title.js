import React from 'react';
import style from './Title.module.scss';
import {Nav} from "../nav/Nav";
import {BurgerNav} from "../nav/burgerNav/BurgerNav";


export const Title = () => {
    return (
        <div className={style.title}>
            <Nav/>
            <BurgerNav/>
        </div>
    )
}

