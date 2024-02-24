import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Search, Menu } from "lucide-react"
function Navbar
  () {
  const [maxWidth, setMaxWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
      console.log(maxWidth)
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth]);
  const [showNav, setShowNAv] = useState(false)
  const handleClick = () => {
    setShowNAv(!showNav)
  }
  return (
    <div className='navbar-main'>
      {maxWidth >= 662 ?
        <ul className='nav-list'>
          <div className='navbar-search-bar'>
            <Search />
          </div>
          <li><a href='#categories'>Categories</a></li>
          <li><a href='#website'>Website builder</a></li>
          <li><a href='#deal'>Today's deal</a></li>
        </ul> : <div className='for-small-width'>
          <div className='navbar-search-bar'>
            <Search />
          </div>
          <div className='menu'><Menu size={30} onClick={handleClick} /></div>
        </div>}
      {showNav && maxWidth && <div className='side-nav'>
        <ul>
          <li><a href='#categories'>Categories</a></li>
          <li><a href='#website'>Website builder</a></li>
          <li><a href='#deal'>Today's deal</a></li>
        </ul>
      </div>}
    </div>
  )
}


export default Navbar