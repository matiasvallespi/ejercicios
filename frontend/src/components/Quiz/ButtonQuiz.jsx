import React from 'react'

export const ButtonQuiz = (props) => {

  return (
    <p onClick={props.handleAnswer}>{props.id}
      <input id={props.id} type={props.tipo} name={props.name} />
    </p>
  )
}
