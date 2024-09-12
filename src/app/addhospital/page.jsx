"use client";
import { newHospital } from "@/lib/action";
import styles from "./addhospital.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

const AddHospital = () => {
  const [state, formAction] = useFormState(newHospital, undefined);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Link href="/dashboard" className={styles.register}>
          <button className={styles.btn}>
            <IoMdArrowRoundBack />
            Click to Hospital List
          </button>
        </Link>
        <form action={formAction} className={styles.form}>
          <h1>Add New Hospital</h1>

          <input type="text" name="hospitalName" placeholder="Hospital Name" />
          <input type="text" name="address" placeholder="Hospital Address" />
          <input type="text" name="contact" placeholder="Phone Number" />
          <textarea
            type="text"
            name="description"
            placeholder="description"
            rows={10}
          />

          <button>Add</button>
          {state && state.error}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddHospital;
