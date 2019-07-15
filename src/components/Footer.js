import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer >
        <ul className="social-icons">
          <li>
            <a
              href="https://www.instagram.com/pilatesmixologysouthlake/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/pilatesmixologysouthlake"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/pilatesmixology"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="twitter"></i>
            </a>
          </li>
        </ul>
        <small>&copy; 2019 Pilates Mixology, Inc.</small>
      </footer>
    )
  }
}

export default Footer
