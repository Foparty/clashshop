import Image from "next/image";

const MortarComponent = ({ data }) => {
  function mortarImg(e) {
    if (e === 1) {
      return "/mortar/mortar1.webp";
    } else if (e === 2) {
      return "/mortar/mortar2.webp";
    } else if (e === 3) {
      return "/mortar/mortar3.webp";
    } else if (e === 4) {
      return "/mortar/mortar4.webp";
    } else if (e === 5) {
      return "/mortar/mortar5.webp";
    } else if (e === 6) {
      return "/mortar/mortar6.webp";
    } else if (e === 7) {
      return "/mortar/mortar7.webp";
    } else if (e === 8) {
      return "/mortar/mortar8.webp";
    } else if (e === 9) {
      return "/mortar/mortar9.webp";
    } else if (e === 10) {
      return "/mortar/mortar10.webp";
    } else if (e === 11) {
      return "/mortar/mortar11.webp";
    } else if (e === 12) {
      return "/mortar/mortar12.webp";
    } else if (e === 13) {
      return "/mortar/mortar13.webp";
    } else if (e === 14) {
      return "/mortar/mortar14.webp";
    } else if (e === 15) {
      return "/mortar/mortar15.webp";
    }
  }

  return (
    <>
      {data.mortar.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={mortarImg(item)}
          alt={"clash of clans air defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default MortarComponent;
