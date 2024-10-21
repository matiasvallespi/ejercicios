import React, { useEffect, useState } from 'react'

export const Rectangulo = () => {

    const [lado1, setLado1] = useState(0)
    const [lado2, setLado2] = useState(0)
    const [resultado, setResultado] = useState(0)

    const handleInput1 = (e) => {
        setLado1(parseFloat(e.target.value))
    }
    const handleInput2 = (e) => {
        setLado2(parseFloat(e.target.value))
    }

    useEffect(() => {
        setResultado(lado1 * lado2)
    }, [lado1, lado2])

    return (
        <div>
            <input onChange={handleInput1} placeholder='Lado 1..' type="number" />
            <input onChange={handleInput2} placeholder='Lado 2..' type="number" />
            <p>El area es: {resultado}</p>
        </div>
    )
}
