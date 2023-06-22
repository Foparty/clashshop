import Image from "next/image";

const SweeperComponent = ({ data }) => {
  function sweeperImg(e) {
    if (e === 1) {
      return "/sweeper/sweeper1.webp";
    } else if (e === 2) {
      return "/sweeper/sweeper2.webp";
    } else if (e === 3) {
      return "/sweeper/sweeper3.webp";
    } else if (e === 4) {
      return "/sweeper/sweeper4.webp";
    } else if (e === 5) {
      return "/sweeper/sweeper5.webp";
    } else if (e === 6) {
      return "/sweeper/sweeper6.webp";
    } else if (e === 7) {
      return "/sweeper/sweeper7.webp";
    }
  }

  return (
    <>
      {data.sweeper.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={sweeperImg(item)}
          alt={"clash of clans air defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default SweeperComponent;
