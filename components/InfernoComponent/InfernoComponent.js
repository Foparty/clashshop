import Image from "next/image";

const InfernoComponent = ({ data }) => {
  function infernoImg(e) {
    if (e === 1) {
      return "/inferno/inferno1.webp";
    } else if (e === 2) {
      return "/inferno/inferno2.webp";
    } else if (e === 3) {
      return "/inferno/inferno3.webp";
    } else if (e === 4) {
      return "/inferno/inferno4.webp";
    } else if (e === 5) {
      return "/inferno/inferno5.webp";
    } else if (e === 6) {
      return "/inferno/inferno6.webp";
    } else if (e === 7) {
      return "/inferno/inferno7.webp";
    } else if (e === 8) {
      return "/inferno/inferno8.webp";
    } else if (e === 9) {
      return "/inferno/inferno9.webp";
    }
  }

  return (
    <>
      {data.inferno.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={infernoImg(item)}
          alt={"clash of clans inferno tower defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default InfernoComponent;
