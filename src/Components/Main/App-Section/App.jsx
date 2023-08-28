import { AppShortcut, Map, NetworkCheck, Watch } from "@mui/icons-material";
import styles from "./App.module.css";
import appImage from "../../../assets/app.png";
import { useMediaQuery } from "@mui/material";


const AppSection = () => {

  const mobileMatch = useMediaQuery('(max-width:688px)');

  return <section className={styles.AppSection}>
    <div className={styles['AppSection-Container']}>
      <div className={styles['AppFeatures']}>
        <h1 className={styles.sectionTitle}>
          Everything you need  <br />
          is just a tap away
        </h1>
        <p className={styles.sectionDescription}>From fresh towels to late checkout,  our app puts <br /> you in control. Your stay, your way.</p>
        <div className={styles['appFeatures']}>
          <div >
          <AppShortcut sx={{fontSize:mobileMatch?'3rem':'6rem'}} />
            <p>24/7 in-app <br /> customer service</p>
          </div>
          <div>
            <NetworkCheck sx={{fontSize:mobileMatch?'3rem':'6rem'}}/>
            <p>One-tap <br /> WiFi access</p>
          </div>
          <div>
            <Map sx={{fontSize:mobileMatch?'3rem':'6rem'}}/>
           <p> Neighborhood <br /> guides</p>
          </div>
          <div>
            <Watch sx={{fontSize:mobileMatch?'3rem':'6rem'}}/>
            <p>Request late <br /> checkout</p>
          </div>
        </div>

        <div className={styles.appDownload}>
          <img src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_400/v1616628024/catalina/homepage/tech_value_props/download_apple.png" alt="" />
          <img src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:eco,w_450/v1616628024/catalina/homepage/tech_value_props/download_android.png" alt="" />
        </div>
      </div>
      <div className={styles.AppImage}>
        <img src={appImage} alt="" />
      </div>
    </div>
  </section>
};

export default AppSection;
