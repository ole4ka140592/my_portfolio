import React from "react";
import style from "./Footer.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import facebookImage from "../assets/image/facebook.png";
import linkedinImage from "../assets/image/linkedin.png";
import telegramImage from "../assets/image/telegram.png";
import githubImage from "../assets/image/github.png";
import Flip from "react-reveal/Flip";


export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Volha Mitsiurova</h2>
                <Flip left>
                    <div className={style.footers}>
                        <div className={style.footer}>
                            <a href='https://www.facebook.com/oliushka.mitsiurova'>
                                <img src={facebookImage} alt="facebook" className={style.iconMonoFacebook}/>
                            </a>
                        </div>
                        <div className={style.footer}>
                            <a href='https://www.linkedin.com/in/olga-mitsiurova-214181232/'>
                                <img src={linkedinImage} alt="linkedin" className={style.iconMonoLinkedin}
                                />
                            </a>
                        </div>
                        <div className={style.footer}>
                            <a href='https://t.me/I_am_Olja'>
                                <img src={telegramImage} alt="telegram" className={style.iconMonoTelegram}/>
                            </a>
                        </div>
                        <div className={style.footer}>
                            <a href='https://github.com/ole4ka140592'>
                                <img src={githubImage} alt="github" className={style.iconMonoGithub}/>
                            </a>
                        </div>
                    </div>
                </Flip>
                <span>©All rights reserved, 2022</span>
            </div>
        </div>
    )
}

