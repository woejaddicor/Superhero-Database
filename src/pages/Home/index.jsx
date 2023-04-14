import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [frontPage, setFrontPage] = useState({})

  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const randomNumber = Math.floor(Math.random() * 564); 
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNumber}.json`)
        const superheroData = await response.json()
        setFrontPage(superheroData)
      } catch (err) {
        console.log(err)
      }
    }
    fetchSuperheroes() 
  }, []) 

    return (
      <div className='home-page'>
        {frontPage.images && frontPage.id && (
          <div className='image-container'>
            <img src={frontPage.images.md} alt={frontPage.name} />
          </div>
        )}
        <div className='text-container'>
          {frontPage.name && <h1>{frontPage.name}</h1>}
          {frontPage.appearance && <p>Race: {frontPage.appearance.race}</p>}
          {frontPage.biography && (
            <ul>
              <li>Aliases: {frontPage.biography.aliases}</li>
              <li>Alter Egos: {frontPage.biography.alterEgos}</li>
              <li>First Appearance: {frontPage.biography.firstAppearance}</li>
              <li>Publisher: {frontPage.biography.publisher}</li>
              <li>Full Name: {frontPage.biography.fullName}</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
  
