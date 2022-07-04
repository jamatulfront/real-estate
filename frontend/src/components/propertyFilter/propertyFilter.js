import styled from "styled-components";
import { useState } from "react";
import FilterPopUp from "./filterPopUp";
const Container = styled.div`
  height: 7rem;
  width: 100%;
  padding: 2rem 10rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  margin-top: 8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const FilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Button = styled.button`
  padding: 1.5rem 2rem;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.color.whiteDark};
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.color.whiteDark};
  }
  @media (max-width: 500px) {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
  }
`;
export default function PropertyFilter() {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      {showPopUp ? (
        <FilterPopUp setShowPopUp={setShowPopUp} />
      ) : (
        <Container>
          <FilterButtonWrapper>
            <Button onClick={() => setShowPopUp(true)}>Property type</Button>
            <Button onClick={() => setShowPopUp(true)}>Price</Button>
            <Button onClick={() => setShowPopUp(true)}>Bed</Button>
            <Button onClick={() => setShowPopUp(true)}>Filters</Button>
          </FilterButtonWrapper>
        </Container>
      )}
    </>
  );
}
