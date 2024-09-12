"use client";
import { useRouter } from "next/navigation";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";
import { register } from "@/lib/action";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Valid Email"
        required
      />

      <div className={styles.formControl}>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <input
          type="password"
          name="passwordRepeat"
          placeholder="Confirm Password"
          required
        />
      </div>
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Already have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
