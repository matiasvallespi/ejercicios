import React, { useEffect, useState } from 'react'
import { Container } from '../Container'

export const Temperature = () => {

    const [celsius, setCelsius] = useState(0)
    const [farenheit, setFarenheit] = useState(32)
    const [kelvin, setKelvin] = useState(273.15)

    const handleCelsius = (e) => {
        setCelsius(parseFloat(e.target.value || 0))
    }
    useEffect(() => {
        setFarenheit((celsius * 9 / 5) + 32)
        setKelvin(celsius + 273.15)
    }, [celsius])
    const handleFarenheit = (e) => {
        setFarenheit(parseFloat(e.target.value || 0))
    }
    useEffect(() => {
        setCelsius((farenheit - 32) * 5 / 9)
        setKelvin((farenheit - 32) * 5 / 9 + 273.15)
    }, [farenheit])
    const handleKelvin = (e) => {
        setKelvin(parseFloat(e.target.value || 0))
    }
    useEffect(() => {
        setCelsius(kelvin - 273.15)
        setFarenheit((kelvin - 273.15) * 9 / 5 + 32)
    }, [kelvin])

    return (
        <Container>
            <div className='flex'>
                <input className='p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500' value={celsius} onChange={handleCelsius} placeholder='Inserte temperatura °C..' type="number" />
                <p className='text-xl font-mono'>°C</p>
            </div>
            <hr className='mt-4 mb-4' />
            <div className='flex'>
                <input className='p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500' value={farenheit} onChange={handleFarenheit} placeholder='Inserte temperatura °F..' type="number" />
                <p className='text-xl font-mono'>°F</p>
            </div >
            <hr className='mt-4 mb-4' />
            <div className='flex'>
                <input className='p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500' value={kelvin} onChange={handleKelvin} placeholder='Inserte temperatura °K..' type="number" />
                <p className='text-xl font-mono'>°K</p>
            </div >
        </Container>
    )
}
