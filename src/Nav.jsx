import React from "react"
import { NavLink, Outlet } from "react-router-dom"

function Nav() {
  return (
    <>
    <nav>
      <ul className="nav-links">
        <div className="button-div">
        <NavLink className="links" to="/">Home</NavLink>
        </div>
        <div className="button-div">
        <NavLink className="links" to="/superheroes">Superhero Search</NavLink>
        </div>
      </ul>
    </nav>
<Outlet />
</>
  )
}

export default Nav
