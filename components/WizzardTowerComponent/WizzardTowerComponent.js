import Image from "next/image";

const WizzardTowerComponent = ({ data }) => {
  function wizzardImg(e) {
    if (e === 1) {
      return "/wizzard/wizzard1.webp";
    } else if (e === 2) {
      return "/wizzard/wizzard2.webp";
    } else if (e === 3) {
      return "/wizzard/wizzard3.webp";
    } else if (e === 4) {
      return "/wizzard/wizzard4.webp";
    } else if (e === 5) {
      return "/wizzard/wizzard5.webp";
    } else if (e === 6) {
      return "/wizzard/wizzard6.webp";
    } else if (e === 7) {
      return "/wizzard/wizzard7.webp";
    } else if (e === 8) {
      return "/wizzard/wizzard8.webp";
    } else if (e === 9) {
      return "/wizzard/wizzard9.webp";
    } else if (e === 10) {
      return "/wizzard/wizzard10.webp";
    } else if (e === 11) {
      return "/wizzard/wizzard11.webp";
    } else if (e === 12) {
      return "/wizzard/wizzard12.webp";
    } else if (e === 13) {
      return "/wizzard/wizzard13.webp";
    } else if (e === 14) {
      return "/wizzard/wizzard14.webp";
    } else if (e === 15) {
      return "/wizzard/wizzard15.webp";
    }
  }

  return (
    <>
      {data.wizzard.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={wizzardImg(item)}
          alt={"clash of clans air defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default WizzardTowerComponent;
