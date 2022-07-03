import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 0.2rem solid ${(props) => props.theme.color.whiteDark};
`;
export const Bottom = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const TopButton = styled.button`
  background-color: #fff;
  color: ${(props) => props.theme.color.grayDark};
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1rem 7rem;
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  ${(props) => (props.active ? `border-bottom: 3px solid #e4002b;` : "")}
  transition: all 0.1s ease-in;
`;
export const SearchButton = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.brand};
  border-radius: 2rem;
  cursor: pointer;
`;
export const BottomButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.color.gray};
  width: 90%;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #f4f4f4;
  }
`;
export const Icon = styled.img``;
