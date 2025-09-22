import Image from "next/image";
import styles from "./page.module.css";
import Hero from "app/components/hero";
import Container from "app/components/container";

export default function Home() {
  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageon />
    </Container>
  );
}
