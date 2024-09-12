"use client";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "@/lib/action";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input
        type="text"
        name="username"
        placeholder="Enter your Username"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your Password"
        required
      />
      <button>Login</button>

      {state?.error && <p className={styles.errorMessage}>{state.error}</p>}

      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
