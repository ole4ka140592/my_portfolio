import React from 'react';
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title_h2} from "../common/components/title/Title_h2";
import todolistImage from "../assets/image/todolist.jpg"
import socialNetworkImage from "../assets/image/socialNetwork4.png"
import brainstormImage from "../assets/image/brainstorm.png"

export const Projects = () => {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }

    const brainstorm = {
        backgroundImage: `url(${brainstormImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title_h2 text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={todolist}
                             href={"https://ole4ka140592.github.io/Todolist_training/#/login"}
                             title="TODOLIST"
                             description='A todolist program for keeping a list of to-dos or tasks.          TypeScript, React, Redux, Thunk, Formik, CSS,  Material UI, Unit tests, TDD, Storybook, Postman'/>
                    <Project style={socialNetwork}
                             href={"https://ole4ka140592.github.io/Social_network_na_TS/#/"}
                             title="SOCIAL NETWORK"
                             description='Analogue of a social network with login, user profile and other users. TypeScript, React, Redux, Thunk, Redux-form, CSS, Unit tests. Organizing correct app
architecture'/>
                    <Project style={brainstorm}
                             href={"https://ole4ka140592.github.io/fridayProject/#/login"}
                             title="BRAINSTORM"
                             description='
Program for studying cards. Team developement, refactoring, bug fixing, deploying. TypeScript, React, Redux, Thunk, Axios, CSS, Unit tests.
                             '/>
                </div>
            </div>
        </div>
    )
}

