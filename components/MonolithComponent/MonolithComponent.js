import styles from "./MonolithComponent.module.css";
import Image from "next/image";

const MonolithComponent = ({ data }) => {
  function monolithImg() {
    switch (data.monolith) {
      case 2:
        return "/monolith/monolith2.webp";
        break;
      case 1:
        return "/monolith/monolith1.webp";
        break;
      default:
        return null;
    }
  }

  return (
    <>
      <Image
        className={"item"}
        src={monolithImg()}
        alt={"clash of clans monolith defense image"}
        width={100}
        height={120}
      />
    </>
  );
};
export default MonolithComponent;
