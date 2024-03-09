import React from 'react'
import './style.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button className='button' {...props} />
}