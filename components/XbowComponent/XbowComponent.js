import Image from "next/image";

const XbowComponent = ({ data }) => {
  function xbowImg(e) {
    if (e === 1) {
      return "/xbow/xbow1.webp";
    } else if (e === 2) {
      return "/xbow/xbow2.webp";
    } else if (e === 3) {
      return "/xbow/xbow3.webp";
    } else if (e === 4) {
      return "/xbow/xbow4.webp";
    } else if (e === 5) {
      return "/xbow/xbow5.webp";
    } else if (e === 6) {
      return "/xbow/xbow6.webp";
    } else if (e === 7) {
      return "/xbow/xbow7.webp";
    } else if (e === 8) {
      return "/xbow/xbow8.webp";
    } else if (e === 9) {
      return "/xbow/xbow9.webp";
    } else if (e === 10) {
      return "/xbow/xbow10.webp";
    }
  }

  return (
    <>
      {data.xbow.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={xbowImg(item)}
          alt={"clash of clans x-bow defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default XbowComponent;
