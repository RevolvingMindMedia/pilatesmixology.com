import React from 'react'
import Layout from '../components/layout'

import bgImg from '../images/faq.jpg'

class FaqPage extends React.Component {
  render() {
    return (
      <Layout bgImg={bgImg}>
        <article>
          <h2 className="major">FAQ</h2>
          <h4>How do I create an account?</h4>
          <p>Click the “book now” link on our page. It will redirect you to mindbody, then click “SignUp” button and follow the instructions.</p>
          <h4>Are there different class levels?</h4>
          <p>We offer 8 different class formats, in each class we give a standard intensity for each exercise, we also give a modification and intensification. Our Chair Mixology class is our only class that requires 3 or more other class formats prior to booking.</p>
          <h4>Which class is best for first timers?</h4>
          <p>We recommend our Pilates Mixology 50 class for our first timers. Jump Mixology and Tower Mixology are also great ones to start with.</p>
          <h4>Can I take while pregnant?</h4>
          <p>If you have been working out with Pilates Mixology prior to becoming pregnant, and spoken with your doctor about continuing to workout, you can workout while pregnant. Starting a new exercise program after becoming pregnant, is not recommended by doctors.</p>
          <h4>How old do you have to be to take class?</h4>
          <p>14 years or older. We require a parent or guardian's  signature on our Waiver granting permission for participation.</p>
          <h4>What should I wear?</h4>
          <p>We recommend wearing comfortable workout clothes to class. Leggings, Tanks, or T Shirts are common  in our studio but we encourage you to wear workout clothing that you are most comfortable in. We also require grip socks in all of our classes for sanitation and safety reasons. You can purchase these in studio for as low as $16.50.</p>

          <h4>Do you have lockers and showers?</h4>
          <p>We do not have showers, we do have small cubbies for you to store your belonging in during class. </p>
          <h4>How early should I arrive to class?</h4>
          <p>First timers need to arrive at least 10 minutes before the class start time. This gives us time to introduce you to the studio, instructor and equipment. We also want to hear about your limitations or injuries during this time, if any. </p>
          <h4>What if I’m late to class?</h4>
          <p>We will hold your spot for 8 minutes. After 8 minutes, your class will be forfeited to the next client. There is also a $20 Late/No Show fee applied to all missed classes and classes not canceled 10 hours prior to start time.</p>
          <h4>Do you offer water or food?</h4>
          <p>We sale water for $2 a bottle and small snacks for $1. We also have a water fountain in the studio.</p>
        </article>
      </Layout>
    )
  }
}

export default FaqPage
