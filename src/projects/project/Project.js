import React from 'react';
import style from './Project.module.css';



export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.img}>
                <a href="" className={style.button}>Посмотреть</a>
            </div>
            <div className={style.title}>
                <h3>{props.title}</h3>
            </div>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}