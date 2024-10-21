import React from 'react'

export const InputPalindromos = (props) => {
  return (
        <input onChange={props.handleInput} placeholder='Escriba aquí..' type="text" className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out' />
  )
}
