import React from "react";
import style from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import ReactTypingEffect from "react-typing-effect";
import Zoom from "react-reveal/Zoom";
import Particles from "react-particles-js";


export const Main = () => {

    const styles = {
        root: {
            position: "absolute",
            fontFamily: "sans-serif",
            textAlign: "center",
            height: "100%",
            width: "100%",
            background: "#fff",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // opacity: "0.3",
        }
    };

    const particlesOpt = {
        "particles": {
            "line_linked": {
                "color": "#262626",
                "width": 1
            },
        }
    }


    return (

        <div className={style.mainBlock}>
            {/*<Particles className={styles.particles} params={particlesOpt}/>*/}
            <Particles style={styles.root} params={particlesOpt}/>
            {/*<Particles className={styles.particles} params={particlesOpt} />*/}

            {/*<Particles className={styles.particles} params={particlesOpt} />*/}

            <div className={styleContainer.container}>
                <Zoom>

                    <div className={style.text}>
                        <h2 className={style.name}>I am Olga Mitsiurova</h2>
                        <span className={style.frontendDeveloper}>
                        <ReactTypingEffect text="Front-end Developer"/>
                    </span>
                    </div>
                    <div className={style.photo}>
                        <div className={style.i}/>
                    </div>

                </Zoom>

            </div>
        </div>
    )
}

