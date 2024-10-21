import React, { useState } from 'react'

export const CalculateAge = () => {

    const [fechaNac, setFechaNac] = useState()
    const [edad, setEdad] = useState()

    const fechaActual = new Date()
    const diaActual = fechaActual.getDate()
    const mesActual = fechaActual.getMonth() + 1
    const anioActual = fechaActual.getFullYear()

    const handleDate = (e) => {
        setFechaNac(e.target.value)
    }

    const handleInto = () => {
        const fechaNacSplit = fechaNac.split("")
        const diaNac = parseInt(fechaNacSplit[8] + fechaNacSplit[9])
        const mesNac = parseInt(fechaNacSplit[5] + fechaNacSplit[6])
        const anioNac = parseInt(fechaNacSplit[0] + fechaNacSplit[1] + fechaNacSplit[2] + fechaNac[3])
        const diferenciaAnio = anioActual - anioNac
        const diferenciaMes = mesActual - mesNac
        const diferenciaDia = diaActual - diaNac
        if (diferenciaAnio === 0) {
            if (diferenciaMes === 0) {
                if (diferenciaDia === 0) {
                    setEdad(0)
                } else if (diferenciaDia > 0) {
                    setEdad(0)
                } else {
                    alert("La fecha ingresada es incorrecta, por favor intentelo nuevamente")
                }
            } else if (diferenciaMes > 0) {
                setEdad(0)
            } else {
                alert("La fecha ingresada es incorrecta, por favor intentelo nuevamente")
            }
        } else if (diferenciaAnio > 0) {
            if (diferenciaMes === 0) {
                if (diferenciaDia === 0) {
                    setEdad(diferenciaAnio)
                } else if (diferenciaDia > 0) {
                    setEdad(diferenciaAnio)
                } else {
                    setEdad(diferenciaAnio - 1)
                }
            } else if (diferenciaMes > 0) {
                setEdad(diferenciaAnio)
            } else {
                setEdad(diferenciaAnio - 1)
            }
        } else {
            alert("La fecha ingresada es incorrecta, por favor intentelo nuevamente")
        }
    }

    return (
        <div className='p-4 max-w-md mx-auto'>
            <input onChange={handleDate} type="date" className='w-full p-3 border-2 border-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out focus:border-teal-500 focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800' />
            <button onClick={handleInto} className='w-full p-3 border-2 border-gray-300 rounded-lg shadow-md transition-all duration-300 ease-in-out bg-gray-50 text-gray-800 hover:bg-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500'>Ingresar</button>
            <div className='my-4'>
                <p className='text-lg text-gray-800'>Edad: {edad} años</p>
            </div>
        </div>
    )
}
