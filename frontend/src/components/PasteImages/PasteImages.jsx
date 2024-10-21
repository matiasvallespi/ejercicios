import React, { useEffect, useState } from 'react'
import { MarcoFotos } from './MarcoFotos'

export const PasteImages = () => {

    const [url, setUrl] = useState("")
    const [links, setLinks] = useState(["https://img.remediosdigitales.com/6ca3e9/2560_3000/1366_2000.jpg", "https://images.pexels.com/photos/14260470/pexels-photo-14260470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/16444612/pexels-photo-16444612/free-photo-of-carretera-coche-fondo-de-pantalla-de-espaldas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/19096307/pexels-photo-19096307/free-photo-of-calle-vehiculo-viaje-viajar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"])

    const handleInput = (e) => {
        setUrl(e.target.value)
    }
    const handleAdd = () => {
        setLinks([...links, url])
        setUrl("")
    }
    const handleRemove = (index) => {
        const restoImagenes = links.filter((_, i) => index !== i)
        setLinks(restoImagenes)
    }
    useEffect(() => {
        console.log(links)
    }, [links])

    return (
        <div className='m-2'>
            <input value={url} onChange={handleInput} placeholder='Ingrese una url..' type="text" className='bg-gradient-to-r from-blue-200 to-blue-300 border border-blue-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            <button onClick={handleAdd} className='mx-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-700 active:to-blue-800'>+</button>
            <div className='flex'>
                {links.map((imagen, index) => (<MarcoFotos key={index}><img src={imagen} alt="" className='w-full h-64 object-cover' /><button className='text-4xl hover:text-red-300'>♡</button><button onClick={() => handleRemove(index)} className='font-bold text-2xl hover:bg-black hover:text-white'>×</button></MarcoFotos>))}
            </div>
        </div>
    )
}
