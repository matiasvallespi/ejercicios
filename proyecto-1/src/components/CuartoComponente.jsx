import React, { useState, useEffect } from 'react'

export const CuartoComponente = () => {
    const [cargando, setCargando] = useState(false)
    const [data, setData] = useState(null)
    const [pokemon, setPokemon] = useState("")
    const inputValue = (e) => {
        setPokemon(e.target.value)
    }
    const api = async () => {
        setCargando(true)
        setData(null)
        const fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        setData(await fetchPokemon.json())
        console.log(data)
    }
    useEffect(() => {
        setCargando(false)
    }, [data])

    const showData = () => {
        if (cargando == false && data == null) {
            return ""
        } else if (cargando == true && data == null) {
            return "cargando.."
        } else if (cargando == false && data != null) {
            return <div>
                <img src={data.sprites.front_default} alt="" />
                <p>Held Items: {<ol>{data.held_items.map((articulo, indice) => { return (<li key={indice}>{articulo.item.name}</li>) })}</ol>}</p>
            </div>
        }
    }

    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ];

    return (
        <div>
            <p>Indicar nombre del Pokemon:</p>
            <input onChange={inputValue} type="text" /> <button onClick={() => api()}>Enviar!</button>
            <p>{showData()}</p>
            {users.map(person => {
                return (<div key={person.id}>
                    <p>Nombre: {person.name}</p>
                    <p>Edad: {person.age}</p>
                    <hr />
                </div>)
            })}
        </div>
    )
}
