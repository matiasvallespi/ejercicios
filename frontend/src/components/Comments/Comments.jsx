import React, { useEffect } from 'react'
import { useState } from 'react'
import { ItemsComments } from './ItemsComments'

export const Comments = () => {

    const [listaComentarios, setListaComentarios] = useState([])
    const [comentario, setComentario] = useState("")

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const resp = await fetch('http://localhost:3000/comments');
                const data = await resp.json();
                setListaComentarios(data);
            } catch (error) {
                console.error('Error al obtener los comentarios', error);
            }
        };
        fetchComments();
    }, [])

    const handleInput = (e) => {
        setComentario(e.target.value)
    }

    const handleClick = async () => {
        const id = Math.max(...listaComentarios.map(e => e.idcomentario)) + 1
        const nuevoComentario = { idcomentario: id, comentario: comentario }
        listaComentarios.push(nuevoComentario)
        await fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comentario })
        })
        setComentario("")
    }

    const handleUpdatedList = (nuevaLista) => {
        setListaComentarios(nuevaLista)
    }

    return (
        <div>
            <input value={comentario} placeholder='Ingrese un comentario..' onChange={handleInput} type="text" />
            <button onClick={handleClick}>Enviar!</button>
            <ItemsComments listaInic={listaComentarios} listaAct={handleUpdatedList} />
        </div>
    )
}
