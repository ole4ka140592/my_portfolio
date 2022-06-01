import {useCallback, useEffect, useState} from "react";
import s from "./Scroll.module.scss";
import React from "react";


export const Scroll = () => {
    const [show, setShow] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.scrollY > 100) setShow(true);
        else setShow(false);
    }, [])

    const scrollFunction = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return <>
        {show && <button className={s.scroll} onClick={scrollFunction}>&#8593;</button>}
    </>
}