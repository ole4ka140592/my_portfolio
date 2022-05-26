import React from "react";
import style from "./Nav.module.scss";
import {Link} from "react-scroll";


export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link activeClass={style.navLink} className={style.navLink} to="" spy={true} smooth={true} offset={1}
                  duration={500}>
                home page
            </Link>
            <Link activeClass={style.navLink} className={style.navLink} to="skills" spy={true} smooth={true} offset={1}
                  duration={500}>
                skills
            </Link>
            <Link activeClass={style.navLink} className={style.navLink} to="projects" spy={true} smooth={true}
                  offset={1} duration={500}>
                projects
            </Link>
            <Link activeClass={style.navLink} className={style.navLink} to="contacts" spy={true} smooth={true}
                  offset={1} duration={500}>
                contacts
            </Link>
        </div>
    )
}

