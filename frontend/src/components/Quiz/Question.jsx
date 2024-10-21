import React from 'react'
import { ButtonQuiz } from './ButtonQuiz'


export const Question = (props) => {

    return (
        <div>
            <div>
                <p>{props.question}</p>
            </div>
            <div>
                {props.options.map((e, i) => (<ButtonQuiz key={i} handleAnswer={props.handleAnswer} tipo="radio" name={props.name} id={e} />))}
            </div>
        </div>
    )
}
