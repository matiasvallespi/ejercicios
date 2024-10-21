import React, { useEffect, useState } from 'react'
import { InputPalindromos } from './InputPalindromos'
import { RenderPalindromos } from './RenderPalindromos'

export const Palindromos = () => {

  const abecedario = "abcdefghijklmnñopqrstuvwxyz".split("")
  const [word, setWord] = useState("")
  const [wordReverse, setWordReverse] = useState("")
  const [wordJoin, setWordJoin] = useState("")
  const [isograma, setIsograma] = useState([])
  const [isogramaIncludes, setIsogramaIncludes] = useState([])

  useEffect(() => {
    setWordJoin(word.split(" ").join(""))
    const wordChange = word.split("").reverse().join("")
    setWordReverse(wordChange.split(" ").join(""))
    setIsograma(wordJoin.split(""))
  }, [word, wordReverse])
  useEffect(() => {
    setIsogramaIncludes(abecedario.filter(e => isograma.includes(e)))
  }, [isograma])

  const handleInput = (e) => {
    setWord(e.target.value)
  }

  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto'>
      <InputPalindromos handleInput={handleInput} />
      <RenderPalindromos titulo={"Palíndromos: "} condition={wordJoin === wordReverse && word != ""} />
      <RenderPalindromos titulo={"Isograma: "} condition={isograma.length === isogramaIncludes.length && word != ""} />
      <RenderPalindromos titulo={"Pangrama: "} condition={isogramaIncludes.length === abecedario.length && word != ""} />
    </div>
  )
}
