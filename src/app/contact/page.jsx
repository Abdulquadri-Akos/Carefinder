// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

// const a = Math.random();
// console.log(a);

export const metadata = {
  title: "Contact Page",
  description: "Contact page for Super",
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Send Us A Message</h1>
        </div>
        <div>
          <div className={styles.formContainer}>
            <form action="#" className={styles.form}>
              <input type="text" placeholder="Name and Surname" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number (Optional)" />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Message"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
