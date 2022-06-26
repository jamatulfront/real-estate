import Header from "../../components/header/header";
import { Container } from "./styledHome";

export default function Home() {
  return (
    <Container>
      <Header />
      <div>Welcome to the home!</div>
    </Container>
  );
}
