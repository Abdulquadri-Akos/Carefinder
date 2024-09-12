import LoginForm from "@/component/loginForm/loginForm";
import { doSocialLogin } from "@/lib/action";
import styles from "./login.module.css";
import Image from "next/image";

export const metadata = {
  title: "Login",
  description: "Login for Carefinder",
};

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <Image
            src="/careFinderLogo-blue.png"
            alt="logo"
            width={100}
            height={100}
            className={styles.logo}
          />
          <h1>Welcome Back</h1>
          <p>Login with your credentials</p>
        </div>

        <div className={styles.loginForm}>
          <LoginForm />
        </div>

        <div className={styles.socialHandle}>
          <p>OR</p>
        </div>

        <form className={styles.form} action={doSocialLogin}>
          <button type="submit" name="action" value="google">
            <Image
              src="/Logo-google-icon-PNG.png"
              alt="google"
              width={30}
              height={30}
            />
          </button>

          <button type="submit" name="action" value="github">
            <Image src="/github-logo.png" alt="google" width={30} height={30} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
