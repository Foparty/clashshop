import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { accounts } from "@/utils/data";
import AccountCard from "@/components/AccountCard/AccountCard";
import Link from "next/link";
import Image from "next/image";

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
      <div className={styles.rules}>
        <p>We speak 🇬🇧 & 🇪🇸</p>
        <div className={styles.contact}>
          <p>Before purchasing contact </p>
          <div className={styles.contacticons}>
            <Link
              href={`https://api.whatsapp.com/send?phone=+34690300025&text=Im interested in one of your accounts and want more info`}
              target={"_blank"}
            >
              <Image
                className={styles.icon}
                src={"/icons/whatsapp.svg"}
                alt={""}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <p>All payments will be via PayPal</p>
        <p>Account delivery after payment</p>
      </div>
      <div className={styles.container}>
        {data.map((item) => (
          <AccountCard key={item.id} data={item} />
        ))}
      </div>
    </main>
  );
}
