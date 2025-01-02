import React, { useState } from 'react'

export const SegundoComponente = () => {
    const [convert, setConvert] = useState(0)
    const cambio = (e) => {
        setConvert(e.target.value * 1.09 + " dolares")
    }
    return (
        <div>
            <p>Indique la cantidad de euros a convertir</p>
            <input onChange={cambio} type="text" />
            <p>{convert}</p>
            <hr />
        </div>
    )
}
