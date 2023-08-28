
import OverView from "./OverView/OverView";
import AppSection from "./App-Section/App";
import styles from "./Main.module.css";
import TestimonialSection from "./Testimonial-Section/Testimonial";
import VideoSection from "./Video-Section/videoSection";
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoginSignUp from "../Login/LoginSignUp";

const MainComponent = () => {






  return <main>
    <div className={styles.heroContainer} >
      <img src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" className={styles['heroContainer-img']} />
      <div className={styles['heroContainer-content']}>
        <div >
          <h1>A better way<br/>to stay</h1>
          <p>Inspiring, award-winning design <br />
            meets modern, mobile-first service. <br />
            Welcome to the future of hospitality.</p>
        </div>
      </div>

    </div>
    <section className={styles.choiceFeature}>
      <h2 className={styles.sectionTitle}>A World Of Choice</h2>
      <p className={styles.sectionDescription}>From a room for a night to a loft for as long as you like, <br /> there’s a Sonder for every occasion.</p>
      <div className={styles.choiceContainer}>
        <div className={styles.choiceSection}>
          <div className={styles.choice}>
            <img src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_600/v1616791504/catalina/homepage/city_grid/Chicago.png" alt="" />
            <p>6 NEIGHBORHOODS</p>
            <h3>Chicago</h3>
          </div>
          <div className={styles.choice}>
            <img src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_600/v1616791506/catalina/homepage/city_grid/Miami.png" alt="" />
            <p>4 NEIGHBORHOODS</p>
            <h3>Miami</h3>
          </div>
        </div>
        <div className={styles.choiceSection}>
          <div className={styles.choice}>
            <img src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_900/v1616791506/catalina/homepage/city_grid/London_-_Featured.png" alt="" />
            <div>
              <p>14 NEIGHBORHOODS</p>
              <h3>London</h3>
            </div>
          </div>
        </div>
        <div className={styles.choiceSection}>
          <div className={styles.choice}>
            <img src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_600/v1616791508/catalina/homepage/city_grid/New_Orleans.png" alt="" />
            <p>10 NEIGHBORHOODS</p>
            <h3>New Orleans</h3>
          </div>
          <div className={styles.choice}>
            <img src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_600/v1616791508/catalina/homepage/city_grid/New_York_City.png" alt="" />
            <p>4 NEIGHBORHOODS</p>
            <h3>New York City</h3>
          </div>
        </div>
      </div>
    </section>
    <AppSection />
    <OverView />
    <VideoSection />
    <TestimonialSection />
  </main>
};

export default MainComponent;