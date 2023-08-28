import styles from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {

  

  return <main>
    <header className={styles['aboutus-header']}>
      <div className={styles['aboutus-hero']}>
        <img src="https://images.sonder.com/image/upload/c_fill,f_auto,w_1440,e_brightness_hsb:-20/v1596476240/sondercom/about/header_new.jpg" alt="" />
      </div>

      <div className={styles['aboutus-hero-content']}>
        <h1>Building the future <br />
          of hospitality</h1>
        <p className={styles['aboutus-description']}>At Sonder, we’re on a mission to redefine hospitality <br />
          by bringing exceptional stays everywhere.</p>
      </div>

    </header>


    <section className={`${styles['aboutus-section']} ${styles['aboutus-section-style1']}`}>
      <img src="https://images.sonder.com/image/upload/c_fill,f_auto,w_1440/v1594143990/sondercom/about/why.jpg" alt="" />
      <div>
        <h2 className={styles.sectionHeading}>Why we’re here</h2>
        <p className={styles.sectionContent}>Hotels aren’t always hip. Hosts aren’t always reliable. So we’re changing the game—with spaces that inspire and delight, that fulfill needs without sacrificing style, all while delivering seamless, personalized experiences. Check in, request fresh towels, and get dinner recommendations—all from your phone. <br /><br />

          By eliminating inefficiencies as we grow, we can deliver hospitality that’s both remarkable and accessible. Because everyone should be able to afford an extraordinary place to stay.</p>
      </div>
    </section>
    <section className={`${styles['aboutus-section']} ${styles['aboutus-section-style2']}`}>
      <img src="https://images.sonder.com/image/upload/c_fill,f_auto,w_1440/v1594143989/sondercom/about/how.png" alt="" />
      <div>
        <h2 className={styles.sectionHeading}>How we got started</h2>
        <p className={styles.sectionContent}>Then a university student in Montreal, our co-founder and CEO Francis Davidson began managing a handful of apartments. He greeted guests with wine, parked their cars, and began to envision a new set of ideals around hospitality. Over the next few summers, Francis experimented with various models such as matching travelers with vacant student apartments across cities and managing other people&apos;s apartments for short-term rentals. A few years later, he and co-founder Martin Picard solidified the foundation that would become Sonder today.</p>
      </div>
    </section>

    <div className={styles['aboutus-img']}>
      <img src="https://images.sonder.com/image/upload/c_fill,f_auto,w_1440/v1594143986/sondercom/about/center.jpg" alt="" />
    </div>

    <section className={`${styles['aboutus-section']} ${styles['aboutus-section-style1']}`}>
      <img src="https://images.sonder.com/image/upload/c_fill,f_auto,w_1440/v1594143986/sondercom/about/today.jpg" alt="" />
      <div>
        <h2 className={styles.sectionHeading}>Sonder today</h2>
        <p className={styles.sectionContent}>Sonder has multiple offices across the globe, with Hub cities in Denver, San Francisco, Montreal and London/Amsterdam. We’re a very locally driven organization, with teams on the ground in cities across the world.</p>
      </div>
    </section>

    <section className={`${styles['aboutus-section']} ${styles['aboutus-section-style2']}`}>
      <img src="https://images.sonder.com/image/upload/c_fill,f_auto,w_1440/v1594143995/sondercom/about/where.jpg" alt="" />
      <div>
        <h2 className={styles.sectionHeading}>Where we’re going</h2>
        <p className={styles.sectionContent}>What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort. We’re working with world-class architects and designers to create truly remarkable spaces—ones that transcend hospitality and enrich lives. And we’re employing technology to keep those spaces affordable as we bring Sonder to more cities around the world.</p>
      </div>
    </section>


    <section className={`${styles['aboutus-section']} ${styles['leader-ship-section']}`}>
      <h2>Our leadership</h2>
      <motion.button whileHover={{scale:1.1}} transition={{type:'spring',stiffness:500}}>Meet the people guiding our team.</motion.button>

      <div className={styles['workwithus-container']}>
        <div className={styles['workwithus-container-content']}>
          <h2>Work with us</h2>
          <p>We hope to become the most admired hospitality <br />
            brand in the world. Help us get there.</p>
          <motion.button whileHover={{scale:1.1}} transition={{type:'spring',stiffness:500}}>Browse open positions</motion.button>
        </div>

        <img src="https://images.sonder.com/image/upload/c_fill,f_auto,w_1440/v1594157671/sondercom/about/work_with_us.jpg" alt="" />
      </div>
    </section>
  </main>
};

export default About;