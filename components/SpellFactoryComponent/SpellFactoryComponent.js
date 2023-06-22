import Image from "next/image";

const SpellFactoryComponent = ({ data }) => {
  function spellfactoryImg(e) {
    if (e === 1) {
      return "/spellfactory/spellfactory1.webp";
    } else if (e === 2) {
      return "/spellfactory/spellfactory2.webp";
    } else if (e === 3) {
      return "/spellfactory/spellfactory3.webp";
    } else if (e === 4) {
      return "/spellfactory/spellfactory4.webp";
    } else if (e === 5) {
      return "/spellfactory/spellfactory5.webp";
    } else if (e === 6) {
      return "/spellfactory/spellfactory6.webp";
    } else if (e === 7) {
      return "/spellfactory/spellfactory7.webp";
    }
  }

  return (
    <>
      <Image
        className={"item"}
        src={spellfactoryImg(data.spellfactory)}
        alt={"clash of clans air defense image"}
        width={100}
        height={120}
      />
    </>
  );
};
export default SpellFactoryComponent;
