import Image from "next/image";

const SpellTowerComponent = ({ data }) => {
  function spelltowerImg(e) {
    if (e === 1) {
      return "/spelltower/spelltower1.webp";
    } else if (e === 2) {
      return "/spelltower/spelltower2.webp";
    } else if (e === 3) {
      return "/spelltower/spelltower3.webp";
    }
  }

  return (
    <>
      {data.spelltower.map((item, index) => (
        <Image
          key={index}
          className={"item"}
          src={spelltowerImg(item)}
          alt={"clash of clans inferno tower defense image"}
          width={100}
          height={120}
        />
      ))}
    </>
  );
};
export default SpellTowerComponent;
