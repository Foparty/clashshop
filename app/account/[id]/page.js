import styles from "./accout.module.css";
import { notFound } from "next/navigation";
import { accounts } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import ThComponent from "@/components/ThComponent/ThComponent";
import WallsComponent from "@/components/WallsComponent/WallsComponent";
import HeroesComponent from "@/components/HeroesComponent/HeroesComponent";
import MonolithComponent from "@/components/MonolithComponent/MonolithComponent";
import EagleComponent from "@/components/EagleComponent/EagleComponent";
import ScatterComponent from "@/components/ScatterComponent/ScatterComponent";
import InfernoComponent from "@/components/InfernoComponent/InfernoComponent";
import SpellTowerComponent from "@/components/SpellTowerComponent/SpellTowerComponent";
import XbowComponent from "@/components/XbowComponent/XbowComponent";
import AirDefenseComponent from "@/components/AirDefenseComponent/AirDefenseComponent";
import WizzardTowerComponent from "@/components/WizzardTowerComponent/WizzardTowerComponent";
import TeslaComponent from "@/components/TeslaComponent/TeslaComponent";
import ArcherTowerComponent from "@/components/ArcherTowerComponent/ArcherTowerComponent";
import CannonComponent from "@/components/CannonComponent/CannonComponent";
import SweeperComponent from "@/components/SweeperComponent/SweeperComponent";
import BombTowerComponent from "@/components/BombTowerComponent/BombTowerComponent";
import MortarComponent from "@/components/MortarComponent/MortarComponent";
import BuilderHutComponent from "@/components/BuilderHutComponent/BuilderHutComponent";
import PetHouseComponent from "@/components/PetHouseComponent/PetHouseComponent";
import WorkshopComponent from "@/components/WorkshopComponent/WorkshopComponent";
import SpellFactoryComponent from "@/components/SpellFactoryComponent/SpellFactoryComponent";
import DarkSpellComponent from "@/components/DarkSpellComponent/DarkSpellComponent";
import BarraksComponent from "@/components/BarraksComponent/BarraksComponent";
import DarkBarraksComponent from "@/components/DarkBarraksComponent/DarkBarraksComponent";
import ArmyCampComponent from "@/components/ArmyCampComponent/ArmyCampComponent";

export async function generateMetadata({ params }) {
  const accountData = accounts.find((item) => item.id === params.id);
  const account = await accountData;

  return {
    title: `clash of clans account shop | ${account.title}`,
    description: `clash of clans account for sale, best price ${account.title}`,
  };
}

const getData = (id) => {
  const data = accounts.find((item) => item.id === id);

  if (data) {
    return data;
  }
  return notFound();
};

const Page = ({ params }) => {
  const data = getData(params.id);
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headertext}>
          <h2 className={styles.title}>
            {data.title} <span>{data.price}€</span>
          </h2>
          <p className={"mb-3"}>
            - before any purchase you have to contact me on whatsapp or email
          </p>
          <p className={"mb-3"}>- the payment will be via paypal.</p>
          <p className={"mb-3"}>
            - as soon as the payment is receive i will give you the account
            details
          </p>
          <div className={styles.contacticons}>
            <Link
              href={`https://api.whatsapp.com/send?phone=+34690300025&text=Im interested in account ${data.id}`}
              target={"_blank"}
            >
              <Image
                className={styles.icon}
                src={"/icons/whatsapp.svg"}
                alt={""}
                width={48}
                height={48}
              />
            </Link>
            <Link
              href={`mailto:alfonsomartingarcia@gmail.com?subject=COC SHOP acc: ${data.id}&body=Im interested in account ${data.id}`}
            >
              <Image
                className={styles.icon}
                src={"/icons/mail.svg"}
                alt={""}
                width={48}
                height={48}
              />
            </Link>
          </div>
        </div>
        <div>
          <Link href={`/images/${data.id}`}>
            <Image
              src={data.cover}
              alt={data.title}
              width={530}
              height={370}
              quality={100}
              className={styles.img}
            />
            <h3
              className={
                "text-xs text-center p-[1rem] border-2 border-b-cyan-50"
              }
            >
              click here for full size images
            </h3>
          </Link>
        </div>
      </header>

      {/*<section className={styles.slider}>*/}
      {/*  {data.mainimgs.map((item, index) => (*/}
      {/*    <Image*/}
      {/*      className={styles.sliderimg}*/}
      {/*      key={index}*/}
      {/*      src={item}*/}
      {/*      alt={""}*/}
      {/*      quality={100}*/}
      {/*      width={368}*/}
      {/*      height={277}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</section>*/}

      {/*<section className={styles.slider}>*/}
      {/*  {data.itemsimgs.map((item, index) => (*/}
      {/*    <Image*/}
      {/*      className={styles.sliderimg}*/}
      {/*      key={index}*/}
      {/*      src={item}*/}
      {/*      alt={""}*/}
      {/*      quality={100}*/}
      {/*      width={368}*/}
      {/*      height={277}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</section>*/}
      {/*<section className={styles.slider}>*/}
      {/*  {data.heroskins.map((item, index) => (*/}
      {/*    <Image*/}
      {/*      className={styles.sliderimg}*/}
      {/*      key={index}*/}
      {/*      src={item}*/}
      {/*      alt={""}*/}
      {/*      quality={100}*/}
      {/*      width={368}*/}
      {/*      height={277}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</section>*/}
      <section className={styles.specs}>
        <div className={`${styles.th} block`}>
          <ThComponent data={data} />
          <WallsComponent data={data} />
        </div>
        <h2 className={"text-slate-900 limitheader"}>HEROES</h2>
        <div className={`${styles.heroes} block`}>
          <HeroesComponent data={data} />
        </div>
        <h2 className={"text-slate-900 limitheader"}>MAIN DEFENSES</h2>
        {(data.monolith || data.eagle || data.scatter || data.inferno) && (
          <div className={`${styles.maindefenses} block`}>
            {data.monolith && <MonolithComponent data={data} />}
            {data.eagle && <EagleComponent data={data} />}
            {data.scatter && <ScatterComponent data={data} />}
            {data.inferno && <InfernoComponent data={data} />}
          </div>
        )}

        <div className={`${styles.maindefenses} block`}>
          {data.spelltower && <SpellTowerComponent data={data} />}
          {data.xbow && <XbowComponent data={data} />}
          {data.airdefense && <AirDefenseComponent data={data} />}
        </div>
        <div className={`${styles.maindefenses} block`}>
          {data.wizzard && <WizzardTowerComponent data={data} />}
          {data.tesla && <TeslaComponent data={data} />}
        </div>
        <div className={`${styles.maindefenses} block`}>
          {data.archer && <ArcherTowerComponent data={data} />}
        </div>
        <div className={`${styles.maindefenses} block`}>
          {data.cannon && <CannonComponent data={data} />}
        </div>
        <div className={`${styles.maindefenses} block`}>
          {data.sweeper && <SweeperComponent data={data} />}
          {data.bombtower && <BombTowerComponent data={data} />}
          {data.mortar && <MortarComponent data={data} />}
        </div>
        <div className={`${styles.maindefenses} block`}>
          {data.builderhut && <BuilderHutComponent data={data} />}
        </div>
        <div className={`${styles.maindefenses} block`}>
          {data.pethouse && <PetHouseComponent data={data} />}
          {data.workshop && <WorkshopComponent data={data} />}
          {data.spellfactory && <SpellFactoryComponent data={data} />}
          {data.darkspell && <DarkSpellComponent data={data} />}
          {data.barraks && <BarraksComponent data={data} />}
          {data.darkbarraks && <DarkBarraksComponent data={data} />}
          {data.armycamps && <ArmyCampComponent data={data} />}
        </div>
      </section>
    </main>
  );
};
export default Page;
