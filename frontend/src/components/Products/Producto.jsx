import React, { useState } from 'react'
import { DeleteProd } from './DeleteProd'

export const Producto = ({ producto }) => {

    const [estado, setEstado] = useState(false)
    const [info, setInfo] = useState(producto)

    const handleEdit = async (id) => {
        setEstado(prevEstado => !prevEstado)
        const resp = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: info.nombre,
                descripcion: info.descripcion,
                precio: info.precio
            })
        });
    }
    const handleName = (e) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            nombre: e.target.value
        }))
    }
    const handleDescription = (e) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            descripcion: e.target.value
        }))
    }
    const handlePrice = (e) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            precio: parseFloat(e.target.value)
        }))
    }

    return (
        <div className="max-w-sm w-full bg-white rounded-lg shadow-md flex flex-col space-y-4 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <img
                src={producto.link}
                alt={producto.nombre}
                className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2">
                {estado ? (
                    <input
                        value={info.nombre}
                        onChange={handleName}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nombre del producto"
                    />
                ) : (
                    <p className="text-gray-700">Nombre: <strong>{producto.nombre}</strong></p>
                )}
                {estado ? (
                    <input
                        value={info.descripcion}
                        onChange={handleDescription}
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Descripción del producto"
                    />
                ) : (
                    <p className="text-gray-700">Descripción: <strong>{producto.descripcion}</strong></p>
                )}
                {estado ? (
                    <input
                        value={info.precio}
                        onChange={handlePrice}
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Precio del producto"
                    />
                ) : (
                    <p className="text-gray-700">Precio: <strong>{producto.precio}</strong></p>
                )}
            </div>
            <div className="flex justify-center space-x-2 p-4">
                <button
                    onClick={() => handleEdit(producto.id)}
                    className="px-4 py-2 text-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-colors duration-300"
                >
                    ✏️
                </button>
                <DeleteProd id={producto.id} />
            </div>
        </div>
    )
}
