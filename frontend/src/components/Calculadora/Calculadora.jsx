import React, { useState } from 'react'
import { Button } from '../Button'

export const Calculadora = () => {

    const [numInput, setNumInput] = useState("")
    const [numButton, setNumButton] = useState("")
    const [operation, setOperation] = useState("")
    const [resultado, setResultado] = useState(0)

    const inputValue = (e) => {
        setNumInput(e.target.value)
    }
    const handleClick = (e) => {
        const numButton = e.target.textContent
        setNumInput(numInput + numButton)
    }
    const handleOperation = (e) => {
        setNumButton(parseInt(numInput))
        setOperation(e.target.textContent)
        setNumInput("")
    }
    const handleResult = () => {
        let valor = parseInt(numInput)
        switch (operation) {
            case "+":
                setResultado(numButton + valor)
                setNumInput("")
                setNumButton("")
                break;
            case "-":
                setResultado(numButton - valor)
                setNumInput("")
                setNumButton("")
                break;
            case "*":
                setResultado(numButton * valor)
                setNumInput("")
                setNumButton("")
                break;
            case "/":
                setResultado(numButton / valor)
                setNumInput("")
                setNumButton("")
                break;
            default:
                alert("La operacion que intenta realizar es incorrecta, por favor intentelo nuevamente")
        }
    }

    return (
        <div>
            <input value={numInput} onChange={inputValue} className='border-2 border-black rounded w-64 m-2' type="number" />
            <div className='grid grid-cols-4 w-40 m-2'>
                <Button onClick={handleClick}>1</Button>
                <Button onClick={handleClick}>2</Button>
                <Button onClick={handleClick}>3</Button>
                <Button onClick={handleOperation}>+</Button>
                <Button onClick={handleClick}>4</Button>
                <Button onClick={handleClick}>5</Button>
                <Button onClick={handleClick}>6</Button>
                <Button onClick={handleOperation}>-</Button>
                <Button onClick={handleClick}>7</Button>
                <Button onClick={handleClick}>8</Button>
                <Button onClick={handleClick}>9</Button>
                <Button onClick={handleOperation}>*</Button>
                <div className='grid grid-cols-subgrid col-start-2 col-span-3'>
                    <Button onClick={handleClick}>0</Button>
                    <Button onClick={handleResult}>=</Button>
                    <Button onClick={handleOperation}>/</Button>
                </div>
            </div>
            <p className='flex border-2 rounded border-black w-64 m-2'>El resultado es: <span className='font-bold'>{resultado}</span></p>
        </div>
    )
}
