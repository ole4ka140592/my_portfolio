import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="JS"
                           description="I know JS "/>
                    <Skill title="HTML" description="I know HTML"/>
                    <Skill title="CSS" description="I know CSS"/>
                </div>
            </div>
        </div>
    )
}

