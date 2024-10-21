import React, { useState } from 'react'

export const BgChange = () => {

    let [color, setColor] = useState("")
    const handleValor = (e) => {
        setColor(e.target.value)
    }

    return (
        <div style={{ backgroundColor: color }}>
            <input className='border-2 border-black rounded' onChange={handleValor} placeholder='Indique un color..' type="text" />
        </div>
    )
}