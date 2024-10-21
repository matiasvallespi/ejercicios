import React, { useEffect, useState } from 'react'

export const Circulo = () => {

    const [diametro, setDiametro] = useState(0)
    const [resultado, setResultado] = useState(0)

    const handleInput = (e) => {
        setDiametro(e.target.value)
    }

    useEffect(() => {
        setResultado(((diametro / 2) * (diametro / 2)) * Math.PI)
    }, [diametro])

    return (
        <div>
            <input onChange={handleInput} placeholder='Diametro..' type="number" />
            <p>El area es: {resultado}</p>
        </div>
    )
}
