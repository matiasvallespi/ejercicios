import React, { useEffect, useState } from 'react'
import { Button } from '../Button'

export const Home = ({ nombre, apellido }) => {

  let [count, setCount] = useState(0)
  const sumando = () => {
    setCount(count + 1)
  }
  const restando = () => {
    setCount(count - 1)
  }
  const reinicio = () => {
    if (count !== 0) {
      setCount(count = 0)
    }
  }
  let handleClick = () => {
    console.log("hola")
  }

  return (
    <div className='flex flex-col content-center items-center flex-wrap'>
      <p className='text-4xl m-2'>Esto es el contenido de la pagina</p>
      <p className='w-80 text-center bg-black text-white m-2'>Esto es un parrafo</p>
      <div>
        <button onClick={sumando} className='w-24 hover:bg-red-600 hover:text-white active:bg-red-800 rounded m-2'>Suma</button>
        <button onClick={restando} className='w-24 hover:bg-blue-600 hover:text-white active:bg-blue-800 rounded m-2'>Resta</button>
        <button onClick={reinicio} className='w-24 hover:bg-green-600 hover:text-white active:bg-greem-800 rounded m-2'>Reiniciar</button>
      </div>
      <p className='m-2'>{count}</p>
      <p>Welcome to the page {nombre} {apellido}</p>
      <hr className='w-1/3 m-2' />
      <Button onMouseEnter={handleClick} className='border-2 border-black p-2 rounded' onClick={handleClick}>
        <p>nombre del componente</p>
      </Button>
    </div>
  )
}
