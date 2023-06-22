import Image from "next/image";

const ScatterComponent = ({ data }) => {
  function scatterImg(e) {
    if (e === 1) {
      return "/scatter/scatter1.webp";
    } else if (e === 2) {
      return "/scatter/scatter2.webp";
    } else if (e === 3) {
      return "/scatter/scatter3.webp";
    } else if (e === 4) {
      return "/scatter/scatter4.webp";
    }
  }

  return (
    <>
      {data.scatter.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={scatterImg(item)}
          alt={"clash of clans scattershot defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default ScatterComponent;
