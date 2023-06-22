import Image from "next/image";

const BarraksComponent = ({ data }) => {
  function barraksImg(e) {
    if (e === 1) {
      return "/barraks/barraks1.webp";
    } else if (e === 2) {
      return "/barraks/barraks2.webp";
    } else if (e === 3) {
      return "/barraks/barraks3.webp";
    } else if (e === 4) {
      return "/barraks/barraks4.webp";
    } else if (e === 5) {
      return "/barraks/barraks5.webp";
    } else if (e === 6) {
      return "/barraks/barraks6.webp";
    } else if (e === 7) {
      return "/barraks/barraks7.webp";
    } else if (e === 8) {
      return "/barraks/barraks8.webp";
    } else if (e === 9) {
      return "/barraks/barraks9.webp";
    } else if (e === 10) {
      return "/barraks/barraks10.webp";
    } else if (e === 11) {
      return "/barraks/barraks11.webp";
    } else if (e === 12) {
      return "/barraks/barraks12.webp";
    } else if (e === 13) {
      return "/barraks/barraks13.webp";
    } else if (e === 14) {
      return "/barraks/barraks14.webp";
    } else if (e === 15) {
      return "/barraks/barraks15.webp";
    } else if (e === 16) {
      return "/barraks/barraks16.webp";
    }
  }

  return (
    <>
      <Image
        className={"item"}
        src={barraksImg(data.barraks)}
        alt={"clash of clans air defense image"}
        width={100}
        height={120}
      />
    </>
  );
};
export default BarraksComponent;
