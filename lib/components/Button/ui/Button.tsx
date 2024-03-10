import React from 'react'
import s from './style.module.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className={s.button} {...props} />
}