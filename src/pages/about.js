import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import bgImg from '../images/about.jpg'

class AboutPage extends React.Component {
  render() {
    const title = "Best Pilates Studio Near Me in Southlake | Pilates Mixology Southlake"
    const description = `Group fitness and Pilates studio in Southlake offering fun, full body workouts of varying levels. Our "mixologists" use music and motivation. Visit us!`
    const keywords = "Pilates studio"

    return (
      <Layout bgImg={bgImg}>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        />
        <article>
          <div className="content">
            <h2 className="major">About</h2>
            <p>Pilates Mixology is a group fitness and Pilates studio offering 40- and 50-minute full body, low-impact workouts on the Allegro 2 Reformer, Tower, and Exo Chair.</p>
            <p>Stop by and visit our Pilates studio in Southlake today!</p>
          </div>
        </article>
      </Layout>
    )
  }
}

export default AboutPage
