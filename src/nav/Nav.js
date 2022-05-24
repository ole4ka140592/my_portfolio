import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";


export const Nav = () => {
    return (
        <div className={style.nav}>
            {/*<a className={style.navLink} href="">home page</a>*/}
            {/*<a className={style.navLink} href="#skills">skills</a>*/}
            {/*<a className={style.navLink} href="#projects">projects</a>*/}
            {/*<a className={style.navLink} href="#contacts">contacts</a>*/}
            <span className={style.active}>
                <Link
                activeClass={style.navLink}
                to=""
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >home page</Link></span>
            <span className={style.active}><Link
                activeClass={style.navLink}
                to="skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >skills</Link></span>
            <span className={style.active}><Link
                activeClass={style.navLink}
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >projects</Link></span>
            <span className={style.active}><Link
                activeClass={style.navLink}
                to="contacts"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >contacts</Link></span>
        </div>
    )
}

