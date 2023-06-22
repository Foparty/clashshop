import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          className={styles.logo}
          src={"/icons/logo.webp"}
          alt={"clash of clans no background logo"}
          width={280}
          height={48}
        />
      </Link>
    </nav>
  );
};
export default Navbar;
