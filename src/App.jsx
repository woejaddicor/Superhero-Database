import React, { useState } from 'react'
import Nav from './Nav'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Home, SuperheroSearch, Superhero} from './pages'
import { SuperheroProvider } from './contexts'

function App() {
  return (
    <SuperheroProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="/superheroes" element={<SuperheroSearch />}/>
          <Route path="/superheroes/:id" element={<Superhero />}/>
        </Route>
        </Route>
      </Routes>
    </div>
    </SuperheroProvider>
  )
}

export default App
