import React from 'react'
import {ChevronRight} from "lucide-react"
import "./navpath.css"
const NavPAth = () => {
  return (
      <div className='nav-path'>
          <p> Home<span><ChevronRight /></span>
              Hosting for all<span><ChevronRight /></span>
              Hosting<span><ChevronRight /></span>
              Hosting6<span><ChevronRight /></span>
              Hosting5<span><ChevronRight /></span>
          </p>
    </div>
  )
}

export default NavPAth