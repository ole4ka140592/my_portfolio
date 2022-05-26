import React from "react";
import style from "./Title_h2.module.scss";


export const Title_h2 = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}

