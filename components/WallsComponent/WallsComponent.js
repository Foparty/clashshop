import styles from "./WallsComponent.module.css";
import Image from "next/image";

const WallsComponent = ({ data }) => {
  function wallCount(e) {
    if (e === "lvl14" && e.value != 0) {
      return "/walls/lvl14.webp";
    } else if (e === "lvl15" && e.value != 0) {
      return "/walls/lvl15.webp";
    } else if (e === "lvl16" && e.value != 0) {
      return "/walls/lvl16.webp";
    } else if (e === "lvl1" && e.value != 0) {
      return "/walls/lvl1.webp";
    } else if (e === "lvl2" && e.value != 0) {
      return "/walls/lvl2.webp";
    } else if (e === "lvl3" && e.value != 0) {
      return "/walls/lvl3.webp";
    } else if (e === "lvl4" && e.value != 0) {
      return "/walls/lvl4.webp";
    } else if (e === "lvl5" && e.value != 0) {
      return "/walls/lvl5.webp";
    } else if (e === "lvl6" && e.value != 0) {
      return "/walls/lvl6.webp";
    } else if (e === "lvl7" && e.value != 0) {
      return "/walls/lvl7.webp";
    } else if (e === "lvl8" && e.value != 0) {
      return "/walls/lvl8.webp";
    } else if (e === "lvl9" && e.value != 0) {
      return "/walls/lvl9.webp";
    } else if (e === "lvl10" && e.value != 0) {
      return "/walls/lvl10.webp";
    } else if (e === "lvl11" && e.value != 0) {
      return "/walls/lvl11.webp";
    } else if (e === "lvl12" && e.value != 0) {
      return "/walls/lvl12.webp";
    } else if (e === "lvl13" && e.value != 0) {
      return "/walls/lvl13.webp";
    }
  }

  return (
    <div className={styles.walls}>
      {Object.keys(data.walls).map((item, index) => (
        <div key={index} className={styles.wallblock}>
          <Image
            src={wallCount(item)}
            alt={`clash of clans wall ${item[0]}`}
            width={50}
            height={70}
          />
          <p className={"textshadow"}>{data.walls[item]}</p>
        </div>
      ))}
    </div>
  );
};
export default WallsComponent;
