import Image from "next/image";

const PetHouseComponent = ({ data }) => {
  function pethouseImg(e) {
    if (e === 1) {
      return "/pethouse/pethouse1.webp";
    } else if (e === 2) {
      return "/pethouse/pethouse2.webp";
    } else if (e === 3) {
      return "/pethouse/pethouse3.webp";
    } else if (e === 4) {
      return "/pethouse/pethouse4.webp";
    } else if (e === 5) {
      return "/pethouse/pethouse5.webp";
    } else if (e === 6) {
      return "/pethouse/pethouse6.webp";
    } else if (e === 7) {
      return "/pethouse/pethouse7.webp";
    } else if (e === 8) {
      return "/pethouse/pethouse8.webp";
    }
  }

  return (
    <>
      <Image
        className={"item"}
        src={pethouseImg(data.pethouse)}
        alt={"clash of clans air defense image"}
        width={100}
        height={120}
      />
    </>
  );
};
export default PetHouseComponent;
