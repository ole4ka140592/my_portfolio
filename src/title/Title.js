import React from 'react';
import style from './Title.module.css';
import {Nav} from "../nav/Nav";


export const Title = () => {
    return (
        <div className={style.title}>
            <Nav/>
        </div>
    )
}

