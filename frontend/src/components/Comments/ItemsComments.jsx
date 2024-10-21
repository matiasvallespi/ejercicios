import React, { useEffect, useState } from 'react'

export const ItemsComments = ({ listaInic, listaAct }) => {

    const [comentarioEdit, setComentarioEdit] = useState()
    const [edit, setEdit] = useState(null)
    const [listaComentarios, setListaComentarios] = useState(listaInic)

    useEffect(() => {
        setListaComentarios(listaInic)
    }, [listaInic])

    const handleRemove = async (id) => {
        setListaComentarios(listaComentarios.filter(e => e.idcomentario !== id))
        listaAct(listaComentarios)
        await fetch('http://localhost:3000/comments', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
    }

    const handleEdit = async ({ idcomentario, comentario }) => {
        setEdit(idcomentario)
        setComentarioEdit(comentario)
    }

    const handleInputEdit = (e) => {
        setComentarioEdit(e.target.value)
    }

    const handleCancelEdit = (comentario) => {
        setComentarioEdit(comentario)
        setEdit(null)
    }

    const handleAcceptEdit = async (id) => {
        setListaComentarios(listaComentarios.map(e => {
            if (e.idcomentario === id) {
                e.comentario = comentarioEdit
            }
            return e;
        }))
        listaAct(listaComentarios)
        await fetch('http://localhost:3000/comments', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comentario: comentarioEdit, id: id })
        })
        setEdit(null)
    }

    return (
        <div>
            {listaComentarios.map(e => (
                <div key={e.idcomentario}>
                    {e.idcomentario === edit ? <div><input value={comentarioEdit} onChange={handleInputEdit} type="text" />
                        <button onClick={() => handleAcceptEdit(e.idcomentario)}>✅</button>
                        <button onClick={() => handleCancelEdit(e.comentario)}>❌</button></div> : <div><p>{e.comentario}</p>
                        <button onClick={() => handleRemove(e.idcomentario)}>🗑️</button>
                        <button onClick={() => handleEdit(e)}>✏️</button></div>}
                </div>))}
        </div>
    )
}
