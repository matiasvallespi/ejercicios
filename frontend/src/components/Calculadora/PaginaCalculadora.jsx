import React from 'react'
import { Container } from '../Container'
import { Calculadora } from './Calculadora'

export const PaginaCalculadora = () => {
  return (
    <Container>
        <p className='text-3xl font-mono italic tracking-widest m-7'>Calculadora</p>
        <Calculadora/>
    </Container>
  )
}
