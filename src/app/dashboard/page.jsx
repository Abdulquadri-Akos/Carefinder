import HospitalList from "@/component/hospitalList/hospitalList";
import Navbar from "@/component/navbar/Navbar";
import styles from "./dashboard.module.css";
import { auth } from "@/lib/auth";

const dashboard = async () => {
  const session = await auth();

  const displayName =
    session?.user?.provider === "CredentialsSignin"
      ? session?.user?.username
      : session?.user?.name;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Welcome, {session?.user?.username}</h1>
          <p>
            Carefinder is a simple tool that aims to help users find, export,
            and share hospitals within the region
          </p>
        </div>
        <HospitalList />
      </div>
    </div>
  );
};

export default dashboard;
