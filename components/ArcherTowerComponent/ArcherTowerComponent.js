import Image from "next/image";

const ArcherTowerComponent = ({ data }) => {
  function archerImg(e) {
    if (e === 1) {
      return "/archer/archer1.webp";
    } else if (e === 2) {
      return "/archer/archer2.webp";
    } else if (e === 3) {
      return "/archer/archer3.webp";
    } else if (e === 4) {
      return "/archer/archer4.webp";
    } else if (e === 5) {
      return "/archer/archer5.webp";
    } else if (e === 6) {
      return "/archer/archer6.webp";
    } else if (e === 7) {
      return "/archer/archer7.webp";
    } else if (e === 8) {
      return "/archer/archer8.webp";
    } else if (e === 9) {
      return "/archer/archer9.webp";
    } else if (e === 10) {
      return "/archer/archer10.webp";
    } else if (e === 11) {
      return "/archer/archer11.webp";
    } else if (e === 12) {
      return "/archer/archer12.webp";
    } else if (e === 13) {
      return "/archer/archer13.webp";
    } else if (e === 14) {
      return "/archer/archer14.webp";
    } else if (e === 15) {
      return "/archer/archer15.webp";
    } else if (e === 16) {
      return "/archer/archer16.webp";
    } else if (e === 17) {
      return "/archer/archer17.webp";
    } else if (e === 18) {
      return "/archer/archer18.webp";
    } else if (e === 19) {
      return "/archer/archer19.webp";
    } else if (e === 20) {
      return "/archer/archer20.webp";
    } else if (e === 21) {
      return "/archer/archer21.webp";
    }
  }

  return (
    <>
      {data.archer.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={archerImg(item)}
          alt={"clash of clans archer tower image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default ArcherTowerComponent;
