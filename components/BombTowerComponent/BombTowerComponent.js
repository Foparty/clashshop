import Image from "next/image";

const BombTowerComponent = ({ data }) => {
  function bombtowerImg(e) {
    if (e === 1) {
      return "/bombtower/bombtower1.webp";
    } else if (e === 2) {
      return "/bombtower/bombtower2.webp";
    } else if (e === 3) {
      return "/bombtower/bombtower3.webp";
    } else if (e === 4) {
      return "/bombtower/bombtower4.webp";
    } else if (e === 5) {
      return "/bombtower/bombtower5.webp";
    } else if (e === 6) {
      return "/bombtower/bombtower6.webp";
    } else if (e === 7) {
      return "/bombtower/bombtower7.webp";
    } else if (e === 8) {
      return "/bombtower/bombtower8.webp";
    } else if (e === 9) {
      return "/bombtower/bombtower9.webp";
    } else if (e === 10) {
      return "/bombtower/bombtower10.webp";
    }
  }

  return (
    <>
      {data.bombtower.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={bombtowerImg(item)}
          alt={"clash of clans air defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default BombTowerComponent;
