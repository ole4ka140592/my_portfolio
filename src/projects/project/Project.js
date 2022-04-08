import React from 'react';
import style from './Project.module.css';


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.img} style={props.style}>
                <a
                    href={props.href}
                    className={style.button} >Посмотреть</a>
            </div>
            <div className={style.projectInfo}>
                <div className={style.title}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                </div>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    )
}