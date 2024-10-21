import React from 'react'

export const Button = ({ onClick, children, ...rest }) => {

    return (
        <button className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900' onClick={onClick} {...rest}>{children}</button>
    )
}
