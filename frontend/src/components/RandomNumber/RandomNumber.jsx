import React, { useState } from 'react'
import { Container } from '../Container'

export const RandomNumber = () => {

    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [randomNumber, setRandomNumber] = useState(0)

    const handleNumberOne = (e) => {
        setFirstNumber(parseFloat(e.target.value))
    }
    const handleNumberTwo = (e) => {
        setSecondNumber(parseFloat(e.target.value))
    }
    const handleRandomNumber = () => {
        const maximo = Math.max(firstNumber, secondNumber) //Obtengo el valor maximo de cualquiera de los dos numeros
        const minimo = Math.min(firstNumber, secondNumber) //Obtengo el valor minimo de cualquiera de los dos numeros
        const numeroDecimal = ((Math.random() * (maximo - minimo)) + minimo) //Con math.random multiplico por la diferencia de los dos numeros (intervalo), y luego la sumo al numero minimo de ambos
        setRandomNumber(Math.round(numeroDecimal)) //Redondear el numero decimal al entero mas cercano
        console.log("el numero maximo es " + maximo + ", y el numero minimo es " + minimo)
    }

    return (
        <Container>
            <div className='flex'>
                <input onChange={handleNumberOne} type="number" className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full' />
                <p>First Number</p>
            </div>
            <hr className='mt-4 mb-4' />
            <div className='flex'>
                <input onChange={handleNumberTwo} type="number" className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full' />
                <p>Second Number</p>
            </div>
            <hr className='mt-4 mb-4' />
            <div className='flex'>
                <p className='text-2xl mr-4'>{randomNumber}</p> <button onClick={handleRandomNumber} className='px-2 py-1 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Click!</button>
            </div>
        </Container>
    )
}
