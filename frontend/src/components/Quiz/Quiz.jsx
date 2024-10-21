import React, { useEffect, useState } from 'react'
import { Question } from './Question'

export const Quiz = () => {

    const [numeroPregunta, setNumeroPregunta] = useState(0)
    const [respuesta, setRespuesta] = useState([])
    const [respuestaActual, setRespuestaActual] = useState("")
    const [info, setInfo] = useState([])
    const [puntos, setPuntos] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch("http://localhost:3000/quiz")
            setInfo(await resp.json())
        }
        fetchData()
    }, [])

    const handleAnswer = (e) => {
        if (e.target.id !== "") {
            setRespuestaActual(e.target.id)
            setNumeroPregunta(parseInt(e.target.name))
        }
    }

    useEffect(() => {
        const copiaRespuestas = [...respuesta]
        copiaRespuestas[numeroPregunta - 1] = respuestaActual
        setRespuesta(copiaRespuestas)
    }, [numeroPregunta, respuestaActual])

    const handleResolve = async () => {
        const resp = await fetch('http://localhost:3000/quiz/eval', {
            method: 'POST', // Método de la solicitud
            headers: {
                'Content-Type': 'application/json' // Especifica que se envía JSON
            },
            body: JSON.stringify(respuesta) // Convierte los datos a una cadena JSON
        })
        setPuntos(await resp.json())
    }

    return (
        <div>
            <p>Este es un quiz de preguntas de conocimiento general. Con un total de 10 preguntas, cada respuesta correcta se puntua con 10pts. Mucha suerte!</p>
            <div>
                {info.map((element, i) => (<Question key={i} name={i + 1} question={element.texto} options={element.opciones} handleAnswer={handleAnswer} />))}
            </div>
            <button onClick={handleResolve}>Enviar!</button>
            {puntos != null && <p>Tu puntuacion es de: {puntos}</p>}
        </div>
    )
}
