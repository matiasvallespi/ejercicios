import React, { useState } from 'react'

export const ToDoList = () => {

    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])

    const inputValue = (e) => {
        setTarea(e.target.value)
    }
    const handleRemoveTask = (index) => {
        const tareaFiltrada = tareas.filter((_, i) => i !== index)
        setTareas(tareaFiltrada)
    }
    const handleAddTask = () => {
        setTareas([...tareas, tarea])
        setTarea("")
    }

    return (
        <div>
            <input value={tarea} placeholder='Ingrese su tarea..' onChange={inputValue} className='border-2 border-black rounded' type="text" /> <button onClick={handleAddTask} className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>+</button>
            {tareas.map((tareas, index) => (<ul><li>{tareas}</li><button onClick={() => handleRemoveTask(index)}>-</button></ul>))}
        </div>
    )
}
