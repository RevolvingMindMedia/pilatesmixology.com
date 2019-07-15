import React from 'react'
import Layout from '../components/layout'

import bgImg from '../images/prices.jpg'

class PricesPage extends React.Component {
  render() {
    return (
      <Layout bgImg={bgImg}>
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
      </Layout>
    )
  }
}

export default PricesPage
