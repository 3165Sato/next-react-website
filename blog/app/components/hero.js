import style from "../styles/hero.module.css";
import cube from "images/cube.jpg";
import Image from "next/image";

export default function Home({ title, subtitle, imageon = false }) {
  return (
    <main>
      <div className={style.flexContainer}>
        <div className={style.text}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.subtitle}>{subtitle}</p>
        </div>
        {imageon && (
          <figure className={style.image}>
            <Image
              src={cube}
              alt=""
              layout="responsive"
              sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
              priority
              placeholder="blur"
            ></Image>
          </figure>
        )}
      </div>
    </main>
  );
}
