import styles from "./home.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Home */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Carefinder: Your Guide to Quality Healthcare
          </h1>
          <p className={styles.description}>
            Carefinder is a simple tool that aims to help users find, export,
            and share hospitals within the region
          </p>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <Link href="/hospital">Find Hospital</Link>
            </button>
            <button className={styles.button}>
              {" "}
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="hero-image"
            fill
            className={styles.heroImg}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
