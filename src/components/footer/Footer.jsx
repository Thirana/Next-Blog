import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Lamamia. All rights reserved</div>
      <div className={styles.socials}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Facebook"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Instargram"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Twitter"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Youtube"
        />
      </div>
    </div>
  );
};

export default Footer;
