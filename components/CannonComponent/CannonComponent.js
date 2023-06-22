import Image from "next/image";

const CannonComponent = ({ data }) => {
  function cannonImg(e) {
    if (e === 1) {
      return "/cannon/cannon1.webp";
    } else if (e === 2) {
      return "/cannon/cannon2.webp";
    } else if (e === 3) {
      return "/cannon/cannon3.webp";
    } else if (e === 4) {
      return "/cannon/cannon4.webp";
    } else if (e === 5) {
      return "/cannon/cannon5.webp";
    } else if (e === 6) {
      return "/cannon/cannon6.webp";
    } else if (e === 7) {
      return "/cannon/cannon7.webp";
    } else if (e === 8) {
      return "/cannon/cannon8.webp";
    } else if (e === 9) {
      return "/cannon/cannon9.webp";
    } else if (e === 10) {
      return "/cannon/cannon10.webp";
    } else if (e === 11) {
      return "/cannon/cannon11.webp";
    } else if (e === 12) {
      return "/cannon/cannon12.webp";
    } else if (e === 13) {
      return "/cannon/cannon13.webp";
    } else if (e === 14) {
      return "/cannon/cannon14.webp";
    } else if (e === 15) {
      return "/cannon/cannon15.webp";
    } else if (e === 16) {
      return "/cannon/cannon16.webp";
    } else if (e === 17) {
      return "/cannon/cannon17.webp";
    } else if (e === 18) {
      return "/cannon/cannon18.webp";
    } else if (e === 19) {
      return "/cannon/cannon19.webp";
    } else if (e === 20) {
      return "/cannon/cannon20.webp";
    } else if (e === 21) {
      return "/cannon/cannon21.webp";
    }
  }

  return (
    <>
      {data.cannon.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={cannonImg(item)}
          alt={"clash of clans cannon defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default CannonComponent;
