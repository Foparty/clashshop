import Image from "next/image";

const DarkBarraksComponent = ({ data }) => {
  function darkbarraksImg(e) {
    if (e === 1) {
      return "/darkbarraks/darkbarraks1.webp";
    } else if (e === 2) {
      return "/darkbarraks/darkbarraks2.webp";
    } else if (e === 3) {
      return "/darkbarraks/darkbarraks3.webp";
    } else if (e === 4) {
      return "/darkbarraks/darkbarraks4.webp";
    } else if (e === 5) {
      return "/darkbarraks/darkbarraks5.webp";
    } else if (e === 6) {
      return "/darkbarraks/darkbarraks6.webp";
    } else if (e === 7) {
      return "/darkbarraks/darkbarraks7.webp";
    } else if (e === 8) {
      return "/darkbarraks/darkbarraks8.webp";
    } else if (e === 9) {
      return "/darkbarraks/darkbarraks9.webp";
    } else if (e === 10) {
      return "/darkbarraks/darkbarraks10.webp";
    }
  }

  return (
    <>
      <Image
        className={"item"}
        src={darkbarraksImg(data.darkbarraks)}
        alt={"clash of clans air defense image"}
        width={100}
        height={120}
      />
    </>
  );
};
export default DarkBarraksComponent;
