import React from 'react'

export const DeleteProd = (props) => {

    const id = props.id

    const handleRemove = async (id) => {
        const resp = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE',
        });
    }

    return (
        <div>
            <button onClick={() => handleRemove(id)} className='px-4 py-2 text-gray-500 rounded-lg shadow-md hover:bg-gray-500 hover:text-white transition-colors duration-300'>🗑️</button>
        </div>
    )
}
