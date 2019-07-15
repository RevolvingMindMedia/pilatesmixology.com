import React from 'react'

import { Link } from "gatsby"
import logo from '../images/logo.png'

const Logo = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} alt="logo" />
    </Link>
  )
}

export default Logo
