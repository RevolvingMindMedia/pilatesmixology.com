import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import bgImg from '../images/index.jpg'

class IndexPage extends React.Component {

  render() {
    const title = "Pilates Southlake - Best Pilates Near Me | Pilates Mixology Southlake"
    const description = "Pilates Mixology IS Pilates Southlake! We are a group fitness and Pilates studio offering high intensity workouts for all levels. Stop by for a visit today!"
    const keywords = "Pilates Southlake"
    const altText = "Pilates Southlake - Best Pilates Near Me -| Pilates Mixology Southlake"

    return (
      <Layout>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        />
        <img className="main-image" src={bgImg} alt={altText}/>
      </Layout>
    )
  }
}

export default IndexPage
