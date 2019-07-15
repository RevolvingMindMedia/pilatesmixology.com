import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { push as Menu } from 'react-burger-menu'

const NavigationContext = React.createContext()

const NavigationProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <NavigationContext.Provider value={{
      isMenuOpen: menuOpenState,
      closeMenu: () => setMenuOpenState(false),
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </NavigationContext.Provider>
  )
}

const Navigation = () => {
  const ctx = useContext(NavigationContext)
  const styles = {
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: 'white'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'white',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      padding: '0.5em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <Menu
      customBurgerIcon={ false }
      disableAutoFocus
      isOpen={ ctx.isMenuOpen }
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      outerContainerId={'outer-container'}
      pageWrapId={'page-wrap'}
      styles={styles}
    >
      <Link onClick={ctx.closeMenu} to="/">Home</Link>
      <Link onClick={ctx.closeMenu} to="/about">About</Link>
      <Link onClick={ctx.closeMenu} to="/faq">FAQ</Link>
      <Link onClick={ctx.closeMenu} to="/prices">Prices</Link>
      <Link onClick={ctx.closeMenu} to="/classes">Classes</Link>
    </Menu>
  )
}

const NavigationButton = (props) => {
  const ctx = useContext(NavigationContext)
  return (
    <button onClick={ctx.toggleMenu}>
      {props.children}
    </button>
  )
}

export {
  Navigation,
  NavigationButton,
  NavigationProvider,
}
