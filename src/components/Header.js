import React from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import Navigation from './Navigation'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <Logo />
        <div className="content">
            <div className="inner">
                <h1>Pilates Mixology</h1>
                <li><a href="https://clients.mindbodyonline.com/LoginLaunch?studioid=256008" target="_blank" rel="noopener noreferrer">Book Now</a></li>
            </div>
        </div>
        <Navigation />
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
