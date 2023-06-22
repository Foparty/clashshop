import Image from "next/image";

const TeslaComponent = ({ data }) => {
  function teslaImg(e) {
    if (e === 1) {
      return "/tesla/tesla1.webp";
    } else if (e === 2) {
      return "/tesla/tesla2.webp";
    } else if (e === 3) {
      return "/tesla/tesla3.webp";
    } else if (e === 4) {
      return "/tesla/tesla4.webp";
    } else if (e === 5) {
      return "/tesla/tesla5.webp";
    } else if (e === 6) {
      return "/tesla/tesla6.webp";
    } else if (e === 7) {
      return "/tesla/tesla7.webp";
    } else if (e === 8) {
      return "/tesla/tesla8.webp";
    } else if (e === 9) {
      return "/tesla/tesla9.webp";
    } else if (e === 10) {
      return "/tesla/tesla10.webp";
    } else if (e === 11) {
      return "/tesla/tesla11.webp";
    } else if (e === 12) {
      return "/tesla/tesla12.webp";
    } else if (e === 13) {
      return "/tesla/tesla13.webp";
    } else if (e === 14) {
      return "/tesla/tesla14.webp";
    }
  }

  return (
    <>
      {data.tesla.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={teslaImg(item)}
          alt={"clash of clans tesla tower defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default TeslaComponent;
