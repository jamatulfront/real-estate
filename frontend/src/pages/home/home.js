import Header from "../../components/header/header";
import PropertySearch from "../../components/propertySearch/propertySearch";
import ShowCase from "../../components/showcase/showCase";
import { Container, Heading, ShowCaseWrapper } from "./styledHome";

export default function Home() {
  return (
    <Container>
      <Header />
      <ShowCaseWrapper>
        <ShowCase style={{ marginTop: "2rem" }}>
          <Heading style={{ marginBottom: "2rem" }}>
            Properties to call home
          </Heading>
          <PropertySearch />
        </ShowCase>
      </ShowCaseWrapper>
    </Container>
  );
}
