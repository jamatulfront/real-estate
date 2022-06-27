import styled from "styled-components";
import hero from "../../assets/images/hero.webp";
const Container = styled.div`
  height: 80vh;
  width: 120%;
  background: url(${hero});
  background-size: cover;
  background-position: 100% 100%;
  border-radius: 1rem;
`;
export default function ShowCase({ ...props }) {
  return <Container {...props}></Container>;
}
