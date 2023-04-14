import React, {useState, useEffect } from 'react'
import { useSuperheroes } from '../../contexts'
import { useParams } from 'react-router-dom'

export default function Superhero() {
  const {id} = useParams()
  const {superheroContext} = useSuperheroes()
  const [superhero, setSuperhero] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const selectedHero = superheroContext.find((hero) => hero.id == id);
    if (selectedHero) {
      setSuperhero(selectedHero);
    }
    setLoading(false)
  }, [id, superheroContext])

  console.log(superhero)

  return (
    <div>
      {superhero.name && (
        <h1>{superhero.name}</h1>
      )}
      {superhero.appearance && (
        <p>{superhero.appearance.race}</p>
      )}
      {superhero.biography && (
        <ul>
            <li>Aliases: {superhero.biography.aliases}</li>
            <li>Alter Egos: {superhero.biography.alterEgos}</li>
            <li>First Appearance: {superhero.biography.firstAppearance}</li>
            <li>Publisher: {superhero.biography.publisher}</li>
            <li>Full Name: {superhero.biography.fullName}</li>
        </ul>
      )}
      {superhero.images && (
        <img src={superhero.images.md}/>
      )}
      {superhero.powerstats && (
        <ul>
            <li>Combat: {superhero.powerstats.combat}</li>
            <li>Durability: {superhero.powerstats.durability}</li>
            <li>Intelligence: {superhero.powerstats.intelligence}</li>
            <li>Power: {superhero.powerstats.power}</li>
            <li>Speed: {superhero.powerstats.speed}</li>
            <li>Strength: {superhero.powerstats.strength}</li>
        </ul>
      )}
      {superhero.work && (
        <p>Occupation: {superhero.work.occupation}</p>
      )}
    </div>
  )
}
