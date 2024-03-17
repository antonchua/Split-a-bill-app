import React from "react"
import styles from './button.module.scss'

type ButtonType = {
    children: React.ReactNode
}

export const Button = ({children}: ButtonType) => {
    return <button>{children}</button>
}