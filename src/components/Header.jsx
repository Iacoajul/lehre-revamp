import React from 'react'
import './Header.css'
import IDHLogo from '../assets/logo/IDH_Logo_white_Schrift.svg'
import IconHat from '../assets/icons/iconhat.svg'
import IconUser from '../assets/icons/iconuser.svg'
import IconHelp from '../assets/icons/iconhelp.svg'
import { Link } from 'react-router-dom' //Navigation für das Logo wird importiert


function Header() {
  return (
    //Logo anklickbar und führt immer zur Main Page
    <div className='header-div'> 
      <Link to="/main">
        <img className='idh-logo' src={IDHLogo} alt="IDH Logo white Schrift" />
      </Link>
      <p>
        <img className='header-icon' src={IconHat} alt="Hat Icon"/>
        <img className='header-icon' src={IconUser} alt="User Icon"/>
        <img className='header-icon' src={IconHelp} alt="Help Icon"/>
      </p>
    </div>
  )
}

export default Header