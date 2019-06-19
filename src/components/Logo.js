import React from 'react'

import { Link } from "gatsby"
import logo from '../images/logo.png'

const Logo = () => (
  <Link to="/" className="logo">
    <img class="icon" src={logo} alt="logo" />
  </Link>
)

export default Logo
