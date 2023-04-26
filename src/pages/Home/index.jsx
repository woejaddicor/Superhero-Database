import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [frontPage, setFrontPage] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        setLoading(true)
        const randomNumber = Math.floor(Math.random() * 564); 
        const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNumber}.json`)
        const superheroData = await response.json()
        setFrontPage(superheroData)
        setLoading(false)
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
            <img src={frontPage.images.lg} alt={frontPage.name} />
          </div>
        )}
        <div className='text-container'>
          {frontPage.name && <Link style={{color: "white", textDecoration: "none"}} to={`/superheroes/${frontPage.id}`}><h1 className='home-link'>{frontPage.name}</h1></Link>}
        </div>
      </div>
    );
  }
  
