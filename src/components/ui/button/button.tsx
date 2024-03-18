import React from "react";
import styles from './button.module.scss'

type ButtonType = {
    children: React.ReactNode
    type: 'submit' | 'button'
    btnStyleType: 'small' | 'medium' | 'large'
    // onClick(): void
}

export const Button = ({children, btnStyleType, type}: ButtonType) => {
    return (
        <button type={type} className={styles[btnStyleType]}>{children}</button>
    )
}