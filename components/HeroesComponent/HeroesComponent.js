import styles from "./HeroesComponents.module.css";
import Image from "next/image";

const HeroesComponent = ({ data }) => {
  return (
    <div className={styles.heroes}>
      {data.heroes.king && (
        <div className={`${styles.hero} item`}>
          <Image
            className={styles.img}
            src={"/heroes/king.webp"}
            alt={"clash of clans king image"}
            width={100}
            height={120}
          />
          <p className={"textshadow"}>{data.heroes.king}</p>
        </div>
      )}
      {data.heroes.queen && (
        <div className={`${styles.hero} item`}>
          <Image
            className={styles.img}
            src={"/heroes/queen.webp"}
            alt={"clash of clans queen image"}
            width={100}
            height={120}
          />
          <p className={"textshadow"}>{data.heroes.queen}</p>
        </div>
      )}
      {data.heroes.warden && (
        <div className={`${styles.hero} item`}>
          <Image
            className={styles.img}
            src={"/heroes/warden.webp"}
            alt={"clash of clans grand warden image"}
            width={100}
            height={120}
          />
          <p className={"textshadow"}>{data.heroes.warden}</p>
        </div>
      )}
      {data.heroes.champion && (
        <div className={`${styles.hero} item`}>
          <Image
            className={styles.img}
            src={"/heroes/champion.webp"}
            alt={"clash of clans royal champion image"}
            width={100}
            height={120}
          />
          <p className={"textshadow"}>{data.heroes.champion}</p>
        </div>
      )}
    </div>
  );
};
export default HeroesComponent;
