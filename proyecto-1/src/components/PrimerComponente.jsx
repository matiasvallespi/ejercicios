import React, { useState } from 'react'

export const PrimerComponente = () => {
    const [count, setCount] = useState(0)
    const sumar = () => { setCount(count + 1) }
    const restar = () => { setCount(count - 1) }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={sumar}>Sumar</button> <button onClick={restar}>Restar</button>
            <hr />
        </div>
    )
}
