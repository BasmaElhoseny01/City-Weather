import React from 'react'

import '../style/Header.css'

import Logo from '../images/Logo.png'
import ScocialMedia_Data from '../images/SocialMedia'

function Header() {
  let counter=0;
  return (
    <div className="Header">
      <div className='LogoHeader'>
        <div className="Line"></div>
        <img src={Logo} alt="Logo" />
        <div className="Line"></div>
      </div>
      <div className="SocailMedia">
        {
        ScocialMedia_Data.map((icon)=>{
          counter++;
          return (<a href={icon.URL}><img className="Icon" src={icon.Logo} alt={counter} key={counter}/></a>)
        })}
      </div>
    </div>
  )
}

export default Header