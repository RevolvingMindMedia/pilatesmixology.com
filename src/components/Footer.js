import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <ul className="icons">
        <li>
          <a
            href="https://www.instagram.com/pilatesmixologysouthlake/"
            className="icon fa-instagram"
            target="_blank"
            rel="norefere noopener"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/pilatesmixologysouthlake"
            className="icon fa-facebook"
            target="_blank"
            rel="norefere noopener"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/pilatesmixology"
            className="icon fa-twitter"
            target="_blank"
            rel="norefere noopener"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; 2019 Pilates Mixology, Inc.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
