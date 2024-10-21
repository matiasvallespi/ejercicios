import React, { useEffect, useState } from 'react'

export const Contador = () => {

    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (seconds > 0 && active) {
            countDown()
        }
    }, [seconds, active])

    const countDown = () => { setTimeout(() => { setSeconds((seconds - 0.01).toFixed(2)) }, 9) }

    const handleInput = (e) => {
        setSeconds(e.target.value)
    }
    const handleInit = () => {
        setActive(true)
        countDown()
    }
    const handleStop = () => {
        setActive(false)
    }
    const handleReset = () => {
        setActive(false)
        setSeconds(0)
    }

    return (
        <div className='p-6 rounded-lg shadow-lg w-full max-w-md'>
            <p className='text-2xl font-bold text-center text-blue-600 mb-4'>Contador</p>
            <div className='mb-4'>
                <input onChange={handleInput} placeholder='Ingrese numero..' type="number" className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>
            <div className='text-center mb-4'>
                <p className='text-4xl font-semibold text-red-500 count-up'>Timer: {seconds} seconds</p>
            </div>
            <div className='flex justify-between gap-4'>
                <button onClick={handleInit} className='bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'>Iniciar!</button>
                <button onClick={handleStop} className='bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500'>Detener!</button>
                <button onClick={handleReset} className='bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'>Reset!</button>
            </div>
        </div>
    )
}
