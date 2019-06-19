import React from 'react'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class PricesPage extends React.Component {
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
                <h2 className="major">Prices</h2>
                <p>INTRO CLASS: $15 (NEW MEMBERS ONLY)</p>
                <p>INTRO MONTH: $159 (NEW MEMBERS ONLY)</p>
                <p>1 WEEK ACCESS: $45</p>
                <p>1 CLASS PASS: $30</p>
                <p>5 CLASS PASS: $125</p>
                <p>10 CLASS PASS: $250</p>
                <p>MEMBERS ONLY-UNLIMITED MONTHLY ACCESS (MONTH TO MONTH MEMBERSHIP): $229 (30 DAY WRITTEN CANCELATION NOTICE REQUIRED)</p>
                <p>8 CLASSES A MONTH MEMBERSHIP: $199 (30 DAY WRITTEN CANCELATION NOTICE REQUIRED)</p>
                <p>TEACHER/STUDENT/MILITARY UNLIMITED MONTHLY ACCESS MEMBERSHIP: $199 (30 DAY WRITTEN CANCELATION NOTICE REQUIRED)</p>
              </article>
            </main>
            <Footer />
          </div>
          <div id="bg-prices"></div>
        </div>
      </Layout>
    )
  }
}

export default PricesPage
