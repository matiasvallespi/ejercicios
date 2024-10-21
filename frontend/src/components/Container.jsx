import React from 'react'

export const Container = ({ children }) => {

    return (
        <div className='grid grid-cols object-center text-center justify-center content-center items-center'>{children}</div>
    )
}
