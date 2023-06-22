import Image from "next/image";

const AirDefenseComponent = ({ data }) => {
  function airdefenseImg(e) {
    if (e === 1) {
      return "/airdefense/airdefense1.webp";
    } else if (e === 2) {
      return "/airdefense/airdefense2.webp";
    } else if (e === 3) {
      return "/airdefense/airdefense3.webp";
    } else if (e === 4) {
      return "/airdefense/airdefense4.webp";
    } else if (e === 5) {
      return "/airdefense/airdefense5.webp";
    } else if (e === 6) {
      return "/airdefense/airdefense6.webp";
    } else if (e === 7) {
      return "/airdefense/airdefense7.webp";
    } else if (e === 8) {
      return "/airdefense/airdefense8.webp";
    } else if (e === 9) {
      return "/airdefense/airdefense9.webp";
    } else if (e === 10) {
      return "/airdefense/airdefense10.webp";
    } else if (e === 11) {
      return "/airdefense/airdefense11.webp";
    } else if (e === 12) {
      return "/airdefense/airdefense12.webp";
    } else if (e === 13) {
      return "/airdefense/airdefense13.webp";
    }
  }

  return (
    <>
      {data.airdefense.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={airdefenseImg(item)}
          alt={"clash of clans air defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default AirDefenseComponent;
