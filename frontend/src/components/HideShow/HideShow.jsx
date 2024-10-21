import React, { useState } from 'react'

export const HideShow = () => {

    const [text, setText] = useState("Texto predeterminado..")
    const [estado, setEstado] = useState(true)
    let newText
    const handleInput = (e) => {
        newText = e.target.value 
    }
    const handleText = () => {
        setText(newText)
    }
    const handleView = () => {
        setEstado(!estado)
    }

  return (
    <div>
        <input onChange={handleInput} className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' placeholder='Inserte texto..' type="text" /> <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' onClick={handleText}>Insertar</button> <button onClick={handleView} className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Mostrar/Ocultar</button>
        {estado === true && <p>{text}</p>}
    </div>
  )
}
