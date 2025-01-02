import React, { useState } from 'react'

export const TercerComponente = () => {
    const [id, setId] = useState("")
    const [order, setOrder] = useState("")
    const [estado, setEstado] = useState(true)
    const llamado = async () => {
        try {
            const fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            const info = await fetchPokemon.json()
            setId(info.id)
            setOrder(info.order)
            setEstado(!estado)
            console.log(info)
            console.log(info.height)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <input type="text" /> <button onClick={llamado}>Enviar!</button>
            <p>ID: {id}</p>
            <p>Order: {estado == false ? order : ""}</p>
            <hr />
        </div>
    )
}
