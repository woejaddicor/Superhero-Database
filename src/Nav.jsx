import React, {useEffect} from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"

function Nav() {
  const location = useLocation()
  const handleRefresh = () => {
    if (location.pathname === "/") {
    window.location.reload()
  } else {
    window.location.assign("/")
  }
}

  return (
    <>
    <nav>
      <ul className="nav-links">
        <div className="button-div">
        <NavLink onClick={handleRefresh} className="links" to="/">Random Hero</NavLink>
        </div>
        <div className="button-div">
        <NavLink className="links" to="/superheroes">Search</NavLink>
        </div>
      </ul>
    </nav>
<Outlet />
</>
  )
}

export default Nav
