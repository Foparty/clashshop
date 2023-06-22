import Image from "next/image";

const ThComponent = ({ data }) => {
  function thImg() {
    switch (data.th) {
      case "155":
        return "/ths/th155.webp";
        break;
      case "154":
        return "/ths/th154.webp";
        break;
      case "153":
        return "/ths/th153.webp";
        break;
      case "152":
        return "/ths/th152.webp";
        break;
      case "151":
        return "/ths/th151.webp";
        break;
      case "145":
        return "/ths/th145.webp";
        break;
      case "144":
        return "/ths/th144.webp";
        break;
      case "143":
        return "/ths/th143.webp";
        break;
      case "142":
        return "/ths/th142.webp";
        break;
      case "141":
        return "/ths/th141.webp";
        break;
      case "135":
        return "/ths/th135.webp";
        break;
      case "134":
        return "/ths/th134.webp";
        break;
      case "133":
        return "/ths/th133.webp";
        break;
      case "132":
        return "/ths/th132.webp";
        break;
      case "131":
        return "/ths/th131.webp";
        break;
      case "125":
        return "/ths/th125.webp";
        break;
      case "124":
        return "/ths/th124.webp";
        break;
      case "123":
        return "/ths/th123.webp";
        break;
      case "122":
        return "/ths/th122.webp";
        break;
      case "121":
        return "/ths/th121.webp";
        break;
      case "11":
        return "/ths/th11.webp";
        break;
      case "10":
        return "/ths/th10.webp";
        break;
      case "9":
        return "/ths/th9.webp";
        break;
      case "8":
        return "/ths/th8.webp";
        break;
      case "7":
        return "/ths/th7.webp";
        break;
      case "6":
        return "/ths/th6.webp";
        break;
      case "5":
        return "/ths/th5.webp";
        break;
      case "4":
        return "/ths/th4.webp";
        break;
      case "3":
        return "/ths/th3.webp";
        break;
      case "2":
        return "/ths/th2.webp";
        break;
      case "1":
        return "/ths/th1.webp";
        break;
      default:
        return null;
        break;
    }
  }

  return (
    <Image
      className={"item"}
      src={thImg()}
      alt={`clash of clans ${data.title}`}
      width={200}
      height={200}
    />
  );
};
export default ThComponent;
