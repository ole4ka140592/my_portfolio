import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {Title_h2} from "../common/components/title/Title_h2";
import reactImage from "../assets/image/react.png";
import jsImage from "../assets/image/js.png";
import tsImage from "../assets/image/typescript.png";
import htmlImage from "../assets/image/html.png";
import cssImage from "../assets/image/css.png";
import sassImage from "../assets/image/sass.png";
import restapiImage from "../assets/image/restapi.png";
import reduxImage from "../assets/image/redux.png";
import httpImage from "../assets/image/http.png";
import materialImage from "../assets/image/materialui2.png";
import testImage from "../assets/image/test.png";
import storybookImage from "../assets/image/storybook.png";
import gitImage from "../assets/image/git.png";
import gitHubImage from "../assets/image/github.png";
import postmanImage from "../assets/image/postman.png";
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title_h2 text={"Skills"}/>
                <Fade>
                    <div className={style.skills}>
                        <Skill title="React" icon={reactImage}/>
                        <Skill title="TypeScript" icon={tsImage}/>
                        <Skill title="JavaScript" icon={jsImage}/>
                        <Skill title="Redux" icon={reduxImage}/>
                        <Skill title="Rest API" icon={restapiImage}/>
                        <Skill title="HTTP/HTTPS" icon={httpImage}/>
                        <Skill title="HTML" icon={htmlImage}/>
                        <Skill title="CSS" icon={cssImage}/>
                        <Skill title="SASS" icon={sassImage}/>
                        <Skill title="Material-UI" icon={materialImage}/>
                        <Skill title="UNIT TESTS, TDD" icon={testImage}/>
                        <Skill title="Storybook" icon={storybookImage}/>
                        <Skill title="GitHub" icon={gitHubImage}/>
                        <Skill title="GIT" icon={gitImage}/>
                        <Skill title="Postman" icon={postmanImage}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

