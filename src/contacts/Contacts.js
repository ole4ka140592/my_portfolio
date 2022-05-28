import React from "react";
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {Title_h2} from "../common/components/title/Title_h2";
import Fade from "react-reveal/Fade";
import {useFormik} from "formik";
import {api} from "./api";


export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validate: values => {
            const errors = {};

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid e-mail address';
            }

            if (values.name.length < 2) {
                errors.name = 'Please, enter your name';
            }

            if (values.message.length < 2) {
                errors.message = 'Please, enter your message';
            }
            return errors;
        },

        onSubmit: values => {

            api.sendMessage(values)
                .then(()=> {
                    alert("Thank you for your message. I will definitely contact you")
                })
            formik.resetForm()
        },
    })


    return (
        <div className={style.contactsBlock} id={"contacts"}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title_h2 text={"Contacts"}/>
                <Fade left>
                    <form className={style.contacts} onSubmit={formik.handleSubmit}>
                        <input
                            type="text"
                            placeholder={"name"}
                            className={style.input}
                            name="name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {
                            formik.touched.name && formik.errors.name
                                ? <div style={{"color":"red", "fontFamily":"Montserrat", "fontSize": "12px"}}>{formik.errors.name}</div>
                                : null
                        }
                        <input
                            type="text"
                            placeholder={"e-mail"}
                            className={style.input}
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {
                            formik.touched.email && formik.errors.email
                                ? <div style={{"color":"red", "fontFamily":"Montserrat", "fontSize": "12px"}}>{formik.errors.email}</div>
                                : null
                        }
                        <input
                            type="text"
                            placeholder={"message"}
                            className={style.textarea}
                            name="message"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                        {
                            formik.touched.message && formik.errors.message
                                ? <div style={{"color":"red", "fontFamily":"Montserrat", "fontSize": "12px"}}>{formik.errors.message}</div>
                                : null
                        }
                        <button type="submit" className={style.button}>
                            SEND MESSAGE
                        </button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

