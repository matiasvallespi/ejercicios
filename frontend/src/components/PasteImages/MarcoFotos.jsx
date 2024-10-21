import React from 'react'

export const MarcoFotos = ({ children }) => {
    return (
        <div className='m-2 max-w-xs px-2 pt-2 pb-4 bg-white border-2 border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105'>
            {children}
        </div>
    )
}
