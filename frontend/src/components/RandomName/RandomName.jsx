import React, { useEffect, useState } from 'react'
import { Container } from '../Container'

export const RandomName = () => {

    const [listado, setListado] = useState([])
    const [nombre, setNombre] = useState("")
    const [nombreSalida, setNombreSalida] = useState("")

    const handleName = (e) => {
        setNombre(e.target.value)
    }
    const handleInto = () => {
        setListado([...listado, nombre])
        setNombre("")
    }
    const handleGet = () => {
        const numeroDecimal = Math.random() * (listado.length - 1)
        const indice = Math.round(numeroDecimal)
        setNombreSalida(listado[indice])
    }
    const handleRestart = () => {
        setListado([])
        setNombre("")
        setNombreSalida("")
    }
    useEffect(() => {
        console.log(listado)
    }, [listado])

    return (
        <Container>
            <div className='flex'>
                <input value={nombre} onChange={handleName} type="text" placeholder='Ingrese un nombre..' className='m-2 p-3 border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600' />
                <button onClick={handleInto} className='m-2 px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>Ingresar</button>
                <button onClick={handleGet} className='m-2 px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>Obtener</button>
                <button onClick={handleRestart} className='m-2 px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>Reiniciar</button>
            </div>
            <hr className='mt-4 mb-4' />
            <p>{nombreSalida}</p>
        </Container>
    )
}
