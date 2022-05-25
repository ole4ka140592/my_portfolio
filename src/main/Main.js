import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import iImage from "../assets/image/I.jpg";
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {

    // const particlesOpt = {
    //     "particles": {
    //         "number": {
    //             "value": 150,
    //             "density": {
    //                 "enable": true,
    //                 "value_area": 800
    //             }
    //         }
    //     }
    // }

    return (
        <div className={style.mainBlock}>


            {/*<Particles className={style.particlesOpt}/>*/}
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <h2 className={style.name}>I am Olga Mitsiurova</h2>
                    <span className={style.frontendDeveloper}>
                        <ReactTypingEffect text="Front-end Developer"/>
                    </span>
                </div>
                <div className={style.photo}>
                    <div
                        // src={iImage} alt="i"
                         className={style.i}/>
                </div>
            </div>
        </div>
    )
}

