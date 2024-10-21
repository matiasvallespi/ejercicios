import React, { useEffect, useState } from 'react'

export const FilterList = () => {

    const [tarea, setTarea] = useState("")
    const [estado, setEstado] = useState(false)
    const [lista, setLista] = useState([])
    const [listaFiltrada, setListaFiltrada] = useState([])

    const handleInput = (e) => {
        setTarea(e.target.value)
    }
    const handleClick = () => {
        setLista([...lista, tarea])
        setTarea("")
    }
    const handleEliminate = (i) => {
        const tareaEliminar = lista.filter((_, index) => i !== index)
        setLista(tareaEliminar)
    }
    const handleEliminateFilter = (i) => {
        const tareaFiltradaEliminar = listaFiltrada.filter((_, index) => i !== index)
        setListaFiltrada(tareaFiltradaEliminar)
        const tareaEliminada = listaFiltrada.filter(item => !tareaFiltradaEliminar.includes(item))
        setLista(lista.filter(item => !tareaEliminada.includes(item)))
    }
    const handleFilter = () => {
        setListaFiltrada(lista.filter(elemento => elemento.includes(tarea)))
        setEstado(!estado)
    }
    useEffect(() => {
        console.log(lista)
    }, [lista])

    return (
        <div className='p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4'>
            <div className='flex space-x-4'>
                <input value={tarea} onChange={handleInput} placeholder='Add a new task..' type="text" className='p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out' />
                <button onClick={handleClick} className='px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out'>+</button>
                <button onClick={handleFilter} className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out'>Filter</button>
            </div>
            <ol className='space-y-2'>
                {estado === true ? listaFiltrada.map((elem, i) => (<li key={i} className='flex items-center justify-between p-3 border border-gray-200 rounded-lg shadow-sm bg-gray-50'><span>{elem}</span><button onClick={() => handleEliminateFilter(i)} className='px-2 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 ease-in-out'>-</button></li>)) : lista.map((elem, i) => (<li key={i} className='flex items-center justify-between p-3 border border-gray-200 rounded-lg shadow-sm bg-gray-50'><span>{elem}</span><button onClick={() => handleEliminate(i)} className='px-2 py-1 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 ease-in-out'>-</button></li>))}
            </ol>
        </div>
    )
}
