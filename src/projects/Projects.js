import React from 'react';
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title_h2} from "../common/components/title/Title_h2";
import todolistImage from "../assets/image/todolist.jpg"
import socialNetworkImage from "../assets/image/socialNetwork4.png"


export const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title_h2 text={"Projects"}/>
                <div className={style.descriptionAllProjects}>
                    Showcasing all my work while learning Front-end
                </div>
                <div className={style.projects}>
                    <Project style={todolist}
                             href={"https://ole4ka140592.github.io/Todolist_training/#/login"}
                             title="TODOLIST"
                             description='Project description Project description Project description Project description Project description Project description Project description'/>
                    <Project style={socialNetwork}
                             href={"https://ole4ka140592.github.io/Social_network_na_TS/#/"}
                             title="SOCIAL NETWORK"
                             description='Project description roject description Project description Project description Project description Project description Project'/>
                </div>
            </div>
        </div>
    )
}

