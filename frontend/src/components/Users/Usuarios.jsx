import React, { useEffect, useState } from 'react'

export const Usuarios = () => {

    const [user, setUser] = useState("")
    const [listaUser, setListaUser] = useState([])
    const [editingUserId, setEditingUserId] = useState(null)
    const [editingUserValue, setEditingUserValue] = useState("")

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch("http://localhost:3000/api/usuarios")
            setListaUser(await resp.json())
        }
        fetchData()
    }, [])

    const handleInput = (e) => {
        setUser(e.target.value)
    }

    const handleRemove = async (i) => {
        const resp = await fetch('http://localhost:3000/api/usuarios', {
            method: 'DELETE', // Método de la solicitud
            headers: {
                'Content-Type': 'application/json' // Especifica que se envía JSON
            },
            body: JSON.stringify({ i }) // Convierte los datos a una cadena JSON
        })
        setListaUser(await resp.json())
    }

    const handleClick = async () => {
        const resp = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST', // Método de la solicitud
            headers: {
                'Content-Type': 'application/json' // Especifica que se envía JSON
            },
            body: JSON.stringify({ user }) // Convierte los datos a una cadena JSON
        })
        setListaUser(await resp.json())
        setUser("")
    }

    const handleEdit = async (id) => {
        if (editingUserId !== id) {
            setEditingUserId(id)
            const userToEdit = listaUser.find((u) => u.id === id);
            setEditingUserValue(userToEdit.user)
        } else {
            const resp = await fetch(`http://localhost:3000/api/usuarios/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: editingUserValue }),
            });
            setListaUser(await resp.json());
            setEditingUserId(null);  
            setEditingUserValue("");
        }
    }

    const handleChange = (e) => {
        setEditingUserValue(e.target.value)
    }

    return (
        <div>
            <input value={user} onChange={handleInput} type="text" />
            <button onClick={handleClick}>Enviar!</button>
            {listaUser != null ? listaUser.map((e, i) => (
                <div key={i}>
                    {editingUserId === e.id ? <input onChange={handleChange} value={editingUserValue} type="text" /> : <p>Nombre: <strong>{e.user}</strong></p>}
                    <button onClick={() => handleEdit(e.id)}>✎</button>
                    <button onClick={() => handleRemove(i)}>-</button>
                </div>)) : ""}
        </div>
    )
}
