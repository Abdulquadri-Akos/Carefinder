import Image from "next/image";
import styles from "./about.module.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

export const metadata = {
  title: "About Page",
  description: "About page for Super",
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.about}>
            <h2 className={styles.subTitle}>About Carefinder</h2>

            <p className={styles.description}>
              At Carefinder, we are committed to simplifying the healthcare
              search process for everyone. We believe that access to quality
              healthcare is a fundamental right, and our platform is designed to
              make it easier for individuals to locate and share information
              about hospitals in their area.
            </p>
          </div>

          <div className={styles.vision}>
            <h2 className={styles.subTitle}>Vision</h2>
            <p className={styles.description}>
              To ensure seamless access to healthcare information for everyone,
              empowering individuals to make informed choices.
            </p>
          </div>

          <div className={styles.mission}>
            <h2 className={styles.subTitle}>Mission</h2>
            <p className={styles.description}>
              To connect people with healthcare facilities through an intuitive
              platform that simplifies finding, exporting, and sharing hospital
              data.
            </p>
          </div>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>1,000+</h1>
              <p>Hospitals Listed</p>
            </div>

            <div className={styles.box}>
              <h1>1,000+</h1>
              <p>Hospitals Listed</p>
            </div>

            <div className={styles.box}>
              <h1>5,000+</h1>
              <p>Users Served</p>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="/WorkingTogther.png"
            alt="About image"
            fill
            className={styles.imgContain}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
