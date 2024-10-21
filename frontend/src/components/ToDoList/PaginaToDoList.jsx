import React from 'react'
import { Container } from '../Container'
import { ToDoList } from './ToDoList'

export const PaginaToDoList = () => {
  return (
    <Container>
        <p>Listado de tareas</p>
        <ToDoList />
    </Container>
  )
}

