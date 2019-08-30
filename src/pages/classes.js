import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import bgImg from '../images/classes.jpg'

class ClassesPage extends React.Component {
  render() {
    const title = "Best Pilates Classes Near Me in Southlake | Pilates Mixology Southlake"
    const description = `We offer 8 different Pilates classes near you in Southlake. Our exercise and workout classes involve fun, full body, group fitness workouts. Visit us!`
    const keywords = "Pilates classes"

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
          <h2 className="major">Classes</h2>
          <h4>PILATES MIXOLOGY 50</h4>
          <p>PM50 is a 50 minute, high intensity PILATES workout on the Allegro 2 Reformer. Be prepared to break a sweat while sculpting and challenging your muscles. Grip socks required.</p>
          <h4>PILATES MIXOLOGY 40</h4>
          <p>PM40 is a 40 minute, high intensity PILATES workout on the Allegro 2 Reformer. Be prepared to break a sweat while sculpting and challenging your muscles.This workout is designed to save time but still deliver a challenging workout. Grip socks required.</p>
          <h4>PILATES MIXOLOGY LITE</h4>
          <p>PM Lite is a low intensity workout on the Allegro 2 reformer. Slow and steady is the goal here. You will have the chance to perfect your form while still challenging your muscles. All levels, modifications and intensifications given. Grip socks required.</p>
          <h4>JUMP MIXOLOGY</h4>
          <p>JM is a 50 minute high intensity PILATES workout on the Allegro 2 Reformer in which the Jump Board is attached. Expect a heart racing, muscle challenging workout. Most of the class is done lying on the carriage. Grip socks required.</p>
          <h4>TOWER MIXOLOGY</h4>
          <p>TM is a 50 minute low impact PILATES workout on the tower (mat) equipment. This class challenges the body with more attention to form and classical movements. Grip socks required.</p>
          <h4>UPPER BODY MIXOLOGY 40</h4>
          <p>UBM40 is our 40 minute abs and arms workout using PILATES equipment and weights to sculpt those oh so desirable areas. Grip socks required.</p>
          <h4>LOWER BODY MIXOLOGY 40</h4>
          <p>LBM40 is our 40 minute lower body workout (LEG DAY) using PILATES equipment and props to tone and burnout the lower body! Grip socks required.</p>
          <h4>CHAIR MIXOLOGY</h4>
          <p>CM is a 50 minute high intensity PILATES workout on the Allegro 2 reformer and EXO chair. We utilize both classic pieces of equipment to chisel your core and challenge your body. 3 Prior Pilates Mixology Classes Required. Grip socks required.</p>
        </article>
      </Layout>
    )
  }
}

export default ClassesPage
