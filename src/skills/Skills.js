import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title_h2} from "../common/components/title/Title_h2";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title_h2 text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title="JS"
                           description="I know JS "/>
                    <Skill title="HTML" description="I know HTML"/>
                    <Skill title="CSS" description="I know CSS"/>
                    <Skill title="CSS" description="I know CSS"/>
                    <Skill title="CSS" description="I know CSS"/>
                    <Skill title="CSS" description="I know CSS"/>
                </div>
            </div>
        </div>
    )
}

