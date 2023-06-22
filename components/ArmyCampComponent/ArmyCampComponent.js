import Image from "next/image";

const ArmyCampComponent = ({ data }) => {
  function armycampImg(e) {
    if (e === 1) {
      return "/armycamp/armycamp1.webp";
    } else if (e === 2) {
      return "/armycamp/armycamp2.webp";
    } else if (e === 3) {
      return "/armycamp/armycamp3.webp";
    } else if (e === 4) {
      return "/armycamp/armycamp4.webp";
    } else if (e === 5) {
      return "/armycamp/armycamp5.webp";
    } else if (e === 6) {
      return "/armycamp/armycamp6.webp";
    } else if (e === 7) {
      return "/armycamp/armycamp7.webp";
    } else if (e === 8) {
      return "/armycamp/armycamp8.webp";
    } else if (e === 9) {
      return "/armycamp/armycamp9.webp";
    } else if (e === 10) {
      return "/armycamp/armycamp10.webp";
    } else if (e === 11) {
      return "/armycamp/armycamp11.webp";
    } else if (e === 12) {
      return "/armycamp/armycamp12.webp";
    } else if (e === 13) {
      return "/armycamp/armycamp13.webp";
    }
  }

  return (
    <>
      {data.armycamps.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={armycampImg(item)}
          alt={"clash of clans air defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default ArmyCampComponent;
