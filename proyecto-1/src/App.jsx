import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PrimerComponente } from './components/PrimerComponente'
import { SegundoComponente } from './components/SegundoComponente'
import { TercerComponente } from './components/TercerComponente'
import { CuartoComponente } from './components/CuartoComponente'

function App() {

  return (
    <div>
      <PrimerComponente />
      <SegundoComponente />
      <TercerComponente />
      <CuartoComponente />
    </div>
  )
}

export default App
