import Image from "next/image";

const WorkshopComponent = ({ data }) => {
  function workshopImg(e) {
    if (e === 1) {
      return "/workshop/workshop1.webp";
    } else if (e === 2) {
      return "/workshop/workshop2.webp";
    } else if (e === 3) {
      return "/workshop/workshop3.webp";
    } else if (e === 4) {
      return "/workshop/workshop4.webp";
    } else if (e === 5) {
      return "/workshop/workshop5.webp";
    } else if (e === 6) {
      return "/workshop/workshop6.webp";
    } else if (e === 7) {
      return "/workshop/workshop7.webp";
    }
  }

  return (
    <>
      <Image
        className={"item"}
        src={workshopImg(data.workshop)}
        alt={"clash of clans air defense image"}
        width={100}
        height={120}
      />
    </>
  );
};
export default WorkshopComponent;
