import RegisterForm from "@/component/registerForm/registerForm";
import styles from "./register.module.css";
import { doSocialLogin } from "@/lib/action";
import Image from "next/image";

export const metadata = {
  title: "Create an Account",
  description: "Create an account for Carefinder",
};

const Register = () => {
  return (
    <>
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
            <h1>Welcome to Carefinder!</h1>
            <p>Create an account with Carefinder</p>
          </div>

          <div className={styles.registerForm}>
            <RegisterForm />
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
              <Image
                src="/github-logo.png"
                alt="google"
                width={30}
                height={30}
              />
            </button>
          </form>
        </div>
      </div>

      {/* <div className={styles.container}>
        <div className={styles.wrapper}>
          <form className={styles.form} action={doSocialLogin}>
            <div className={styles.btn}>
              <button type="submit" name="action" value="google">
                Sign Up With Google
              </button>

              <button type="submit" name="action" value="github">
                Sign Up With GitHub
              </button>
            </div>
          </form>
          <RegisterForm />
        </div>
      </div> */}
    </>
  );
};

export default Register;
