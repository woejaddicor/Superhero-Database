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
    <div class='search-page'>
      <header class="header">
        <label class='search-label'><input class='hero-search' type="text" value={inputText} onChange={updateTextFilter} placeholder='Search the database'/></label>
        </header>
      <div class="grid-container">
        {filteredHeroes.map((superhero) => {
          return (
            <div class='grid-item' key={superhero.id}>
              <img class='hero-thumbnail' src={superhero.images.sm}/>
              <div class='overlay'>
                <Link style={{color: '#566E3D', fontWeight: 'bold', textDecoration: 'none'}} to={`/superheroes/${superhero.id}`}><h2>{superhero.name}</h2></Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
