import styles from "./VideoSection.module.css";
import video from "../../../assets/video.mp4";

const VideoSection = () => {

  return (
    <section className={styles.videoSection}>
      <video autoPlay muted src={video} loop />
      <div className={styles.videoOverlay}>
        <h1>
          Hotel amenities <br />
          without hotel formality
        </h1>
        <p>
          From simple self check-in to boutique <br /> bathroom amenities, we bring the best <br /> of a hotel without any of the formality.
        </p>
      </div>
    </section>
  )
};

export default VideoSection;