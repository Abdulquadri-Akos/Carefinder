"use client";

import styles from "./link.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import Image from "next/image";
import { doLogout } from "@/lib/action";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Find Hospital",
    path: "/dashboard",
  },
];

const Links = ({ session }) => {
  // State for the menu
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {session?.user ? (
          <>
            {session.user?.isAdmin ? (
              <>
                <NavLink
                  item={{ title: "Create Hospital", path: "/addhospital" }}
                />

                <NavLink
                  item={{ title: "Hospital List", path: "/dashboard" }}
                />

                <form action={doLogout}>
                  <button className={styles.logout}>Logout</button>
                </form>
              </>
            ) : (
              <>
                <form action={doLogout}>
                  <button className={styles.logout}>Logout</button>
                </form>
              </>
            )}
          </>
        ) : (
          <>
            {links.map((link) => {
              return <NavLink item={link} key={link.title} />;
            })}
            <NavLink
              className={styles.loginLink}
              item={{ title: "Login", path: "/login" }}
            />
            <NavLink
              className={styles.registerLink}
              item={{ title: "Register", path: "/register" }}
            />
          </>
        )}
      </div>

      {/* Menu button for mobile view */}
      <Image
        src="/menu.png"
        alt="menu-icon"
        height={30}
        width={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {session?.user ? (
            session.user?.isAdmin ? (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            ) : (
              <form action={doLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            )
          ) : (
            links.map((link) => <NavLink item={link} key={link.title} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
