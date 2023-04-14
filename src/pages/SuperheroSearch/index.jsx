import React, {useState, useEffect} from 'react'
import { useSuperheroes } from '../../contexts'
import { Link } from 'react-router-dom'

export default function SuperheroSearch() {
  const {superheroContext, setSuperheroContext} = useSuperheroes()
  const [inputText, setInputText] = useState('')
  const [filteredHeroes, setFilteredHeroes] = useState([])

  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json')
        const superheroData = await response.json()
        setSuperheroContext(superheroData)
      } catch (err) {
        console.log(err)
      }
    }
    fetchSuperheroes()
  }, [])

  function updateTextFilter (e) {
    setInputText(e.target.value)
  }

  useEffect(() => {
    function filterHeroes() {
      const filteredHeroes = superheroContext.filter((hero) => hero.name.toLowerCase().includes(inputText.toLowerCase()))
      setFilteredHeroes(filteredHeroes)
    }
    filterHeroes()
  }, [inputText, superheroContext])

  return (
    <>
      <h1>Superhero list</h1>
      <label>Search:<input type="text" value={inputText} onChange={updateTextFilter} /></label>
      <div className="grid-container">
        {filteredHeroes.map((superhero) => {
          return (
            <div className='grid-item' key={superhero.id}>
              <h2>{superhero.name}</h2>
              <Link to={`/superheroes/${superhero.id}`}><img src={superhero.images.sm}/></Link>
            </div>
          )
        })}
      </div>    
    </>
  )
}
