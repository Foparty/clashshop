"use client";
import styles from "./imgages.module.css";
import { accounts } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

const getData = (id) => {
  const data = accounts.find((item) => item.id === id);

  if (data) {
    return data;
  }
  // return notFound();
};
const ImagePage = ({ params }) => {
  const data = getData(params.id);
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => router.back()}>
        back to account
      </button>
      {data.mainimgs.map((item, index) => (
        <Image
          className={styles.img}
          key={index}
          src={item}
          alt={""}
          width={3000}
          height={2000}
        />
      ))}
      {data.itemsimgs.map((item, index) => (
        <Image
          className={styles.img}
          key={index}
          src={item}
          alt={""}
          width={3000}
          height={2000}
        />
      ))}
      {data.heroskins.map((item, index) => (
        <Image
          className={styles.img}
          key={index}
          src={item}
          alt={""}
          width={3000}
          height={2000}
        />
      ))}
    </div>
  );
};
export default ImagePage;
