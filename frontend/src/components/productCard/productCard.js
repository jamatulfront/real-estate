import styled from "styled-components";
import bedUrl from "../../assets/icons/bed.png";
import squareUrl from "../../assets/icons/square.png";
import { useNavigate } from "react-router-dom";

let backendUrl = "http://localhost:8000";
const Container = styled.div`
  width: 100%;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 1rem;
  padding: 0.5rem;
  &:hover {
    border: 2px solid var(--green);
  }
  position: relative;
`;
const Icon = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;
const Box = styled.div`
  display: flex;
  margin-right: 1rem;
`;
const Image = styled.img`
  width: 100%;
  height: 18rem;
  object-fit: cover;
  border-radius: 1rem;
`;
const Heading = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.color.grayDark};
  line-height: 1.3;
  margin-top: 1rem;
`;
const Text = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.color.gray};
`;
const Price = styled.h5`
  font-size: 2.4rem;
  color: ${(props) => props.theme.color.dark};
  color: var(--green);
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RedCircle = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.brand};
  color: ${(props) => props.theme.color.white};
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;
export default function ProductCard({ product }) {
  const navigateTo = useNavigate();
  return (
    <Container onClick={() => navigateTo("/property/" + product._id)}>
      <RedCircle>{product.forSale ? "For Sale" : "For Rent"}</RedCircle>
      <Image src={backendUrl + product.images[0]} />
      <Heading>{product.name}</Heading>
      <Text>{product.location.address}</Text>
      <Price>{product.price} Laq Tk</Price>
      <Bottom>
        <Box>
          <Icon src={bedUrl} alt="bed-icon"></Icon>
          <Text>{product.beds}</Text>
        </Box>
        <Box>
          <Icon src={squareUrl} alt="square-icon"></Icon>
          <Text>{product.area} sqft</Text>
        </Box>
      </Bottom>
    </Container>
  );
}