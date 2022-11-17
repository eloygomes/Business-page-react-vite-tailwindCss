
import React from 'react';
import styles from './style.js';

import { Navbar,  Stats,  Business,  Billing,  CardDeal,
  Testimonial,  Clients,  CTA,  Footer, Hero } from './Components';

const App = ()=> (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar className="bg-slate-500"/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} px-6 xs:px-0`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer/>
        </div>
      </div>

    </div>
  )


export default App