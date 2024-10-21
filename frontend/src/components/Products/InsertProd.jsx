import React, { useState } from 'react'

export const InsertProd = ({ handleProdCreated }) => {

  const [largoObjeto, setLargoObjeto] = useState(0)
  const [name, setName] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")
  const [link, setLink] = useState("")
  const [producto, setProducto] = useState(null)

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleDescription = (e) => {
    setDescripcion(e.target.value)
  }
  const handlePrice = (e) => {
    setPrecio(e.target.value)
  }
  const handleLink = (e) => {
    setLink(e.target.value)
  }

  const handleSave = async () => {
    const resp = await fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })

    const data = await resp.json()

    handleProdCreated((prevState) => {
      return [...prevState, data]
    })

    setName("")
    setDescripcion("")
    setPrecio("")
    setLink("")
    setLargoObjeto(0)
  }

  const handleAdd = () => {
    if (name != "") {
      setProducto({ nombre: name })
      setLargoObjeto(largoObjeto + 1)
    }
    if (descripcion != "") {
      setProducto({ nombre: name, descripcion: descripcion })
      setLargoObjeto(largoObjeto + 1)
    }
    if (precio != "") {
      setProducto({ nombre: name, descripcion: descripcion, precio: precio })
      setLargoObjeto(largoObjeto + 1)
    }
    if (link != "") {
      setProducto({ nombre: name, descripcion: descripcion, precio: precio, link: link })
      setLargoObjeto(largoObjeto + 1)
    }
  }

  return (
    <div className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        value={name}
        onChange={handleName}
        placeholder="Indique nombre del producto.."
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        +
      </button>

      {largoObjeto > 0 && (
        <div className="transform transition-transform duration-500 ease-out origin-left scale-95 opacity-0 animate-[slide-in-right_0.5s_ease-out_forwards]">
          <input
            value={descripcion}
            onChange={handleDescription}
            placeholder="Descripción"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {largoObjeto > 1 && (
        <div className="transform transition-transform duration-500 ease-out origin-left scale-95 opacity-0 animate-[slide-in-right_0.5s_ease-out_forwards]">
          <input
            value={precio}
            onChange={handlePrice}
            placeholder="Precio"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {largoObjeto > 2 && (
        <div className="transform transition-transform duration-500 ease-out origin-left scale-95 opacity-0 animate-[slide-in-right_0.5s_ease-out_forwards]">
          <input
            value={link}
            onChange={handleLink}
            placeholder="Imagen"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {largoObjeto > 3 && (
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Enviar
        </button>
      )}
    </div>
  )
}
