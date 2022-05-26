import React from "react";
import style from "./Project.module.scss";


export const Project = (props) => {
    return (
        <div className={style.project}>
            <a className={style.img} style={props.style} href={props.href} title={"Link go to GitHub"}>
            </a>
            <div className={style.projectInfo}>
                <div className={style.title}>
                    <h3 className={style.projectTitle}> <a
                        href={props.href} className={style.
                        link} title={"Link go to GitHub"}>{props.title}</a></h3>
                </div>
                <p className={style.description}><a
                    href={props.href} className={style.
                    linkDescription} title={"Link go to GitHub"}>{props.description}</a></p>
            </div>
        </div>
    )
}