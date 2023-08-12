import React from 'react'
import "./ResumeHeader.css";

const ResumeHeader = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>
                <span className='header__title firstname'>Victor</span>
                <span className='header__title lastname'>Pinedo</span>
            </h1>

            <ul className='header__social-menu'>
                <li className='header__social-menu item'>
                    <i class='bx bx-phone'></i>
                    <span>+ 57 302 36781 47</span>
                </li>
                <li className='header__social-menu item'>
                    <i class='bx bxl-gmail'></i>
                    <span>victorpinedomartinez@gmail.com</span>
                </li>
                <li className='header__social-menu item'>
                    <i class='bx bxl-github'></i>
                    <a href='https://github.com/vapinedo' target='_blank'>vapinedo</a>
                </li>
                <li className='header__social-menu item'>
                    <i class='bx bxl-linkedin-square'></i>
                    <a href='https://www.linkedin.com/in/valp-pinedo/' target='_blank'>Valp</a>
                </li>
            </ul>
        </header>
    )
}

export default ResumeHeader