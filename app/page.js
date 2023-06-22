import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { accounts } from "@/utils/data";
import AccountCard from "@/components/AccountCard/AccountCard";

const getData = () => {
  const data = accounts;

  if (data) {
    return data;
  }
  return notFound();
};
export default function Home() {
  const data = getData();
  return (
    <main className={styles.main}>
      <h2 className={"text-4xl text-white text-center pt-8 drop-shadow-xl"}>
        Clash of clans shop
      </h2>
      <div className={styles.container}>
        {data.map((item) => (
          <AccountCard key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
}
