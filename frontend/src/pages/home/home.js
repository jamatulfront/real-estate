import Header from "../../components/header/header";
import ShowCase from "../../components/showcase/showCase";
import { Container } from "./styledHome";

export default function Home() {
  return (
    <Container>
      <Header />
      <ShowCase style={{ marginTop: "2rem" }} />
    </Container>
  );
}
