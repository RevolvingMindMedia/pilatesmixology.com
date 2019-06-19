import React from 'react'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="body">
          <div id="wrapper">
            <Logo />
            <br/>
            <Navigation />
            <main id="main">
              <article>
                <h2 className="major">About</h2>
                <p>Pilates Mixology is a group fitness studio offering 40 and 50 minute full body, low-impact workouts on the Allegro 2 Reformer, Tower, and Exo Chair. With the use of music and motivation from our instructors(mixologists), we seamlessly transition you from one move to the next. As much as we’d like to brag and boast about the results you’ll see after a few workouts, we’d much rather focus on the mind and body connection you’ll feel. Our quote, “Springs on, World off”, is a true representation of what we offer, a chance to disconnect with the world, connect thru fitness, and build a strong ass body during the process.</p>
              </article>
            </main>
            <Footer />
          </div>
          <div id="bg-about"></div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
