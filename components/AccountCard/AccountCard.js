import Image from "next/image";
import styles from "./AccountCard.module.css";
import Link from "next/link";

const AccountCard = ({ data }) => {
  function cardColor() {
    switch (data.th) {
      case "151":
        return {
          bg: "rgba(32,28,60,.95)",
          color: "#f2f2f2",
          th: "/ths/th155.webp",
        };
        break;
      case "152":
        return {
          bg: "rgba(32,28,60,.95)",
          color: "#f2f2f2",
          th: "/ths/th155.webp",
        };
        break;
      case "153":
        return {
          bg: "rgba(32,28,60,.95)",
          color: "#f2f2f2",
          th: "/ths/th155.webp",
        };
        break;
      case "154":
        return {
          bg: "rgba(32,28,60,.95)",
          color: "#f2f2f2",
          th: "/ths/th155.webp",
        };
        break;
      case "155":
        return {
          bg: "rgba(32,28,60,.95)",
          color: "#f2f2f2",
          th: "/ths/th155.webp",
        };
        break;
      case "141":
        return {
          bg: "rgba(61,130,82,.95)",
          color: "#f2f2f2",
          th: "/ths/th145.webp",
        };
        break;
      case "142":
        return {
          bg: "rgba(61,130,82,.95)",
          color: "#f2f2f2",
          th: "/ths/th145.webp",
        };
        break;
      case "143":
        return {
          bg: "rgba(61,130,82,.95)",
          color: "#f2f2f2",
          th: "/ths/th145.webp",
        };
        break;
      case "144":
        return {
          bg: "rgba(61,130,82,.95)",
          color: "#f2f2f2",
          th: "/ths/th145.webp",
        };
        break;
      case "145":
        return {
          bg: "rgba(61,130,82,.95)",
          color: "#f2f2f2",
          th: "/ths/th145.webp",
        };
        break;
      case "131":
        return {
          bg: "rgba(6,76,85,.95)",
          color: "#f2f2f2",
          th: "/ths/th135.webp",
        };
        break;
      case "132":
        return {
          bg: "rgba(6,76,85,.95)",
          color: "#f2f2f2",
          th: "/ths/th135.webp",
        };
        break;
      case "133":
        return {
          bg: "rgba(6,76,85,.95)",
          color: "#f2f2f2",
          th: "/ths/th135.webp",
        };
        break;
      case "134":
        return {
          bg: "rgba(6,76,85,.95)",
          color: "#f2f2f2",
          th: "/ths/th135.webp",
        };
        break;
      case "135":
        return {
          bg: "rgba(6,76,85,.95)",
          color: "#f2f2f2",
          th: "/ths/th135.webp",
        };
        break;
      case "121":
        return {
          bg: "rgba(12,60,113,.95)",
          color: "#f2f2f2",
          th: "/ths/th125.webp",
        };
        break;
      case "122":
        return {
          bg: "rgba(12,60,113,.95)",
          color: "#f2f2f2",
          th: "/ths/th125.webp",
        };
        break;
      case "123":
        return {
          bg: "rgba(12,60,113,.95)",
          color: "#f2f2f2",
          th: "/ths/th125.webp",
        };
        break;
      case "124":
        return {
          bg: "rgba(12,60,113,.95)",
          color: "#f2f2f2",
          th: "/ths/th125.webp",
        };
        break;
      case "125":
        return {
          bg: "rgba(12,60,113,.95)",
          color: "#f2f2f2",
          th: "/ths/th125.webp",
        };
        break;
      case "11":
        return {
          bg: "rgba(124,113,96,.95)",
          color: "#f2f2f2",
          th: "/ths/th11.webp",
        };
        break;
      case "10":
        return {
          bg: "rgba(124,35,29,.95)",
          color: "#f2f2f2",
          th: "/ths/th10.webp",
        };
        break;
      case "9":
        return {
          bg: "rgba(37,36,41,.95)",
          color: "#f2f2f2",
          th: "/ths/th9.webp",
        };
        break;
    }
  }

  return (
    <Link className={"mb-8"} href={`/account/${data.id}`}>
      <figure className={`${styles.card} rounded-xl shadow-xl overflow-hidden`}>
        <Image
          className={styles.img}
          src={data.cover}
          alt={""}
          width={400}
          height={300}
        />
        <div className={styles.th}>
          <Image src={cardColor(data.th)?.th} alt={""} width={70} height={70} />
        </div>
        <div className={`${styles.price}`}>{data.price}€</div>
        <section
          className={styles.heroes}
          style={{
            background: cardColor(data.th)?.bg,
            color: cardColor(data.th)?.color,
          }}
        >
          {data.heroes.king && (
            <div className={styles.hero}>
              <Image
                className={styles.heroimg}
                src={"/heroes/king.webp"}
                alt={"clash of clans king avatar"}
                width={48}
                height={60}
              />
              <p className={styles.herolvl}>{data.heroes.king}</p>
            </div>
          )}
          {data.heroes.queen && (
            <div className={styles.hero}>
              <Image
                className={styles.heroimg}
                src={"/heroes/queen.webp"}
                alt={"clash of clans king avatar"}
                width={48}
                height={60}
              />
              <p className={styles.herolvl}>{data.heroes.queen}</p>
            </div>
          )}
          {data.heroes.warden && (
            <div className={styles.hero}>
              <Image
                className={styles.heroimg}
                src={"/heroes/warden.webp"}
                alt={"clash of clans king avatar"}
                width={48}
                height={60}
              />
              <p className={styles.herolvl}>{data.heroes.warden}</p>
            </div>
          )}
          {data.heroes.champion && (
            <div className={styles.hero}>
              <Image
                className={styles.heroimg}
                src={"/heroes/champion.webp"}
                alt={"clash of clans king avatar"}
                width={48}
                height={60}
              />
              <p className={styles.herolvl}>{data.heroes.champion}</p>
            </div>
          )}
        </section>
      </figure>
      <h2 className={"text-center drop-shadow-xl text-sm mt-2 text-red-700"}>
        {data.title}
      </h2>
    </Link>
  );
};
export default AccountCard;
