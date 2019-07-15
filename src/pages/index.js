import React from 'react'
import Layout from '../components/layout'

import bgImg from '../images/index.jpg'

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <img className="main-image" src={bgImg} />
      </Layout>
    )
  }
}

export default IndexPage
