import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styles from "./Testimonial.module.css";

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import Card from '@mui/material/Card';
import { Button, Typography, useMediaQuery } from '@mui/material';
import "./swiperStyles.css";

const TestimonialSection = () => {

  const matches = useMediaQuery('(max-width:1536px)');
  const mobileMatch = useMediaQuery('(max-width:688px)');

  const testimonialContent = [
    {
      testimonial: 'I had a wonderful stay and was blown away by the thoughtful design and functionality of the apartment. Can’t wait to check out other Sonders in the future.',
      author: 'Fleur R',
      place: 'London',
      color: '#fcf5eb',
      textColor: 'rgb(9, 57, 54)',
    },
    {
      testimonial: 'This unit was perfect! I needed a furnished apartment for a few months and Sonder thought of everything!',
      author: 'Leah',
      place: 'San Antonio',
      color: '#ffeebf',
      textColor: 'rgb(9, 57, 54)',
    },
    {
      testimonial: 'Our stay at the Wellborne was absolutely fabulous! The check-in process was a breeze. The room and entire hotel were adorably decorated and everything was super clean!',
      author: 'Erin',
      place: 'Orlando',
      color: '#e6b022',
      textColor: 'rgb(9, 57, 54)',
    },
    {
      testimonial: 'Love the app! It works like magic and all the information is super helpful to make the experience seamless',
      author: 'Jimena',
      place: 'Miami',
      color: '#0f4865',
      textColor: '#fff',
    },
    {
      testimonial: 'Loved everything about Sonder. The staff made me feel at home. Would definitely recommend this to everyone looking for a home away from home.',
      author: 'Srinithya',
      place: 'Phoenix',
      color: '#156d51',
      textColor: '#fff',
    },

  ]

  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>
        Every stay has a story
      </h2>
      <p className={styles.sectionDescription}>
        It’s hard to explain what makes Sonder so special. Unless, <br /> of course, you’re one of our guests.
      </p>

      <Swiper
        slidesPerView={mobileMatch ? 1 : matches ? 2 : 3}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation, Autoplay]}
        wrapperClass={styles.mySwiper}
        grabCursor
        autoplay={true}
        loop
      >

        {testimonialContent.map(item => <SwiperSlide className="swiper-slide" key={item.author} >
          <Card sx={{ padding: mobileMatch ? '2rem' : '4rem', borderBottomRightRadius: '4rem', display: 'flex', gap: '2rem', flexDirection: 'column', backgroundColor: item.color, height: mobileMatch ? '20rem' : '25rem', width: '90%', color: item.textColor, justifyContent: 'center', marginLeft: mobileMatch ? '-0.4rem' : '1rem' }}>
            <Typography component="h2" sx={{ fontSize: mobileMatch ? '1.4rem' : '1.6rem' }}>
              {item.testimonial}
            </Typography>
            <div className={styles.author}>
              <h3>{item.author}</h3>
              <p>{item.place}</p>
            </div>
          </Card>
        </SwiperSlide>)}

      </Swiper>
    </section>
  )
};

export default TestimonialSection;