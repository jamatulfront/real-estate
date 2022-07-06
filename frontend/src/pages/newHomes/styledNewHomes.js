import styled from "styled-components";

export const Container = styled.div``;
export const Pan = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`;
export const Frame = styled.div`
  margin-top: 13rem;
  padding: 3rem 2rem;
  @media (max-width: 500px) {
    margin-top: 9rem;
  }
`;
export const Heading = styled.h1`
  font-size: 2.8rem;
  padding-bottom: 1rem;
  padding-left: 13rem;
  letter-spacing: 1px;
  color: ${(props) => props.theme.color.grayDark};
  text-align: left;
  font-weight: 700;
  margin: 0;
  margin-top: 0.5rem;
  line-height: 1.2;
  @media (max-width: 800px) {
    text-align: center;
    padding-bottom: 0;
    padding-left: 0;
  }
  @media (max-width: 500px) {
    font-size: 2.2rem;
    padding-bottom: 0.5rem;
  }
`;
export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
  gap: 2rem;

  margin: auto;
  padding: 2rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 1100px) {
    padding: 2rem 3rem;
  }
  @media (max-width: 800px) {
    padding: 2rem 2rem;
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem;
    justify-content: center;
  }
`;
