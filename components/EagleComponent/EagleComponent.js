import Image from "next/image";

const EagleComponent = ({ data }) => {
  function eagleImg() {
    switch (data.eagle) {
      case 6:
        return "/eagle/eagle6.webp";
        break;
      case 5:
        return "/eagle/eagle5.webp";
        break;
      case 4:
        return "/eagle/eagle4.webp";
        break;
      case 3:
        return "/eagle/eagle3.webp";
        break;
      case 2:
        return "/eagle/eagle2.webp";
        break;
      case 1:
        return "/eagle/eagle1.webp";
        break;
      default:
        return null;
    }
  }

  return (
    <Image
      className={"item"}
      src={eagleImg()}
      alt={"clash of clasn ealge defense image"}
      width={100}
      height={120}
    />
  );
};
export default EagleComponent;
