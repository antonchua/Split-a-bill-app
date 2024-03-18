import styles from './input.module.scss'
import {ChangeEvent} from "react";

type InputType = {
    type: "text" | "number"
    id: string
    name: string
    widthType: 'small' | "medium"
    value: string
    onChange?(e: ChangeEvent<HTMLInputElement>): void
}

export const Input = ({type, widthType, value, onChange}: InputType) => {
    return(
        <input type={type} className={styles[widthType]} value={value} onChange={onChange}/>
    )
}