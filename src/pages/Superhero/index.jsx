import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Superhero() {
  const {id} = useParams()
  const [superhero, setSuperhero] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const findHero = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
        const heroData = await response.json()
        setSuperhero(heroData)
      } catch (err) {
        console.log(err)
      }
    }
    findHero()
    setLoading(false)
  }, [id])

  return (
    <div className='superhero-page'>
      {superhero.name && (
        <h1>{superhero.name}</h1>
      )}
      {superhero.appearance && (
        <p>Race: {superhero.appearance.race}</p>
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
