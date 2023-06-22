import Image from "next/image";

const BuilderHutComponent = ({ data }) => {
  function builderhutImg(e) {
    if (e === 1) {
      return "/builderhut/builderhut1.webp";
    } else if (e === 2) {
      return "/builderhut/builderhut2.webp";
    } else if (e === 3) {
      return "/builderhut/builderhut3.webp";
    } else if (e === 4) {
      return "/builderhut/builderhut4.webp";
    } else if (e === 5) {
      return "/builderhut/builderhut5.webp";
    } else if (e === 6) {
      return "/builderhut/builderhut6.webp";
    }
  }

  return (
    <>
      {data.builderhut.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={builderhutImg(item)}
          alt={"clash of clans builder hut defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default BuilderHutComponent;
