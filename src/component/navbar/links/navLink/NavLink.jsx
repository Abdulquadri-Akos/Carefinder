"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item, className }) => {
  //Using the usePathname() to allow the toggle works with the item path
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${className} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
