import React, {useState} from "react";
import style from "./BurgerNav.module.scss";
import {Link} from "react-scroll";


export const BurgerNav = () => {

    let [menuIsOpen, setMenuIsOpen] = useState(false);

    const onClickButton = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? style.show : style.burgerNavItems}>
                <Link activeClass={style.navLink} className={style.navLink} to="" spy={true} smooth={true} offset={1}
                      duration={500}>
                    home page
                </Link>
                <Link activeClass={style.navLink} className={style.navLink} to="skills" spy={true} smooth={true}
                      offset={1} duration={500}>
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
            {menuIsOpen
                ? <div className={style.burgerBtn} onClick={onClickButton}>✗</div>
                : <div className={style.burgerBtn} onClick={onClickButton}>☰</div>
            }
        </div>
    )
}

