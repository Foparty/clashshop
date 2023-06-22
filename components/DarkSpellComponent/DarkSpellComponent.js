import React from "react";
import Image from "next/image";

const DarkSpellComponent = ({ data }) => {
  function darkspellImg(e) {
    if (e === 1) {
      return "/darkspell/darkspell1.webp";
    } else if (e === 2) {
      return "/darkspell/darkspell2.webp";
    } else if (e === 3) {
      return "/darkspell/darkspell3.webp";
    } else if (e === 4) {
      return "/darkspell/darkspell4.webp";
    } else if (e === 5) {
      return "/darkspell/darkspell5.webp";
    }
  }

  return (
    <>
      <Image
        className={"item"}
        src={darkspellImg(data.darkspell)}
        alt={"clash of clans air defense image"}
        width={100}
        height={120}
      />
    </>
  );
};
export default DarkSpellComponent;
