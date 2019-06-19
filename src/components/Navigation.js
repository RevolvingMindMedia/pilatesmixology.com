import React from 'react'

import { Link } from 'gatsby'

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
      <li><Link to="/prices">Prices</Link></li>
      <li><Link to="/classes">Classes</Link></li>
    </ul>
  </nav>
)

export default Navigation
