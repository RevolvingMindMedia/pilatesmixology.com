import React from 'React'
import Logo from './logo'
import { NavigationButton } from './Navigation'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-left">
          <NavigationButton>
            <i className="menu-icon"></i>
          </NavigationButton>
        </div>
        <div className="header-center">
          <Logo />
        </div>
        <div className="header-right">
          <a
            href="https://clients.mindbodyonline.com/LoginLaunch?studioid=256008"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </header>
    )
  }
}

export default Header
