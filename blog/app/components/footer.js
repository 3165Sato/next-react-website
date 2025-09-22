import Logo from "./logo";
import Social from "./social";
import Container from "./container";
import style from "../styles/footer.module.css";

export default function Home() {
  return (
    <footer className={style.wrapper}>
      <Container>
        <div className={style.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
