import React, { useEffect, useState } from 'react'

export const Cuadrado = () => {

    const [lado, setLado] = useState(0)
    const [resultado, setResultado] = useState(0)

    const handleInput = (e) => {
        setLado(parseFloat(e.target.value))
    }

    useEffect(() => {
        setResultado(lado * lado)
    }, [lado])

    return (
        <div>
            <input onChange={handleInput} placeholder='Lado..' type="number" />
            <p>El area es: {resultado}</p>
        </div>
    )
}
