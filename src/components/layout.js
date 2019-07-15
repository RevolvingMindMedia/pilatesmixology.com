import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Navigation, NavigationProvider } from './Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'


import '../scss/main.scss'

const Layout = ({ bgImg, children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const img = bgImg ? <img className="background-image" src={bgImg} /> : 0

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Pilates Mixology' },
          { name: 'keywords', content: 'pilates' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <NavigationProvider>
        <div id="outer-container">
          <Navigation />
          <main id="page-wrap">
            <div className="wrapper">
              <Header />
              { children }
              <Footer />
            </div>
          </main>
          {img}
        </div>
      </NavigationProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
