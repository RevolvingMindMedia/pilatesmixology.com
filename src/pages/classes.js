import React from 'react'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class ClassesPage extends React.Component {
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
                <h2 className="major">Classes</h2>
                <h4>PILATES MIXOLOGY 50</h4>
                <p>PM50 is a 50 minute, high intensity PILATES workout on the Allegro 2 Reformer. Be prepared to break a sweat while sculpting and challenging your muscles. Grip socks required.</p>
                <h4>PILATES MIXOLOGY 40</h4>
                PM40 is a 40 minute, high intensity PILATES w<p>orkout on the Allegro 2 Reformer. Be prepared to break a sweat while sculpting and challenging your muscles.This workout is designed to save time but still deliver a challenging workout. Grip socks required.</p>
                <h4>PILATES MIXOLOGY LITE</h4>
                <p>PM Lite is a low intensity workout on the Allegro 2 reformer. Slow and steady is the goal here. You will have the chance to perfect your form while still challenging your muscles. All levels, modifications and intensifications given. Grip socks required.</p>
                <h4>JUMP MIXOLOGY</h4>
                <p>JM is a 50 minute high intensity PILATES workout on the Allegro 2 Reformer in which the Jump Board is attached. Expect a heart racing, muscle challenging workout. Mosto of the class is done lying on the carriage. Grip socks required.</p>
                <h4>TOWER MIXOLOGY</h4>
                <p>T M is a 50 minute low impact PILATES workout on the tower (mat) equipment. This class challenges the body with more attention to form and classical movements. Grip socks required.</p>
                <h4>UPPER BODY MIXOLOGY 40</h4>
                <p>UBM40 is our 40 minute abs and arms workout using PILATES equipment and weights to sculpt those oh so desirable areas. Grip socks required.</p>
                <h4>LOWER BODY MIXOLOGY 40</h4>
                <p>LBM40 is our 40 minute lower body workout (LEG DAY) using PILATES equipment and props to tone and burnout the lower body! Grip socks required.</p>
                <h4>CHAIR MIXOLOGY</h4>
                <p>CM is a 50 minute high intensity PILATES workout on the Allegro 2 reformer and EXO chair. We utilize both classic pieces of equipment to chisel your core and challenge your body. 3 Prior Pilates Mixology Classes Required. Grip socks required.</p>
              </article>
            </main>
            <Footer />
          </div>
          <div id="bg-classes"></div>
        </div>
      </Layout>
    )
  }
}

export default ClassesPage
