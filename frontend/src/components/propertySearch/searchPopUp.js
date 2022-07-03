import styled from "styled-components";
import searchUrl from "../../assets/icons/search.png";

const BluryBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--blur);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Container = styled.div`
  background: #fff;
  z-index: 2000;
  position: absolute;
  width: 60%;
  padding: 1rem;
  border-radius: 1rem;
  top: 21rem;
  @media (max-width: 500px) {
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    border-radius: 0;
  }
`;
const Top = styled.div`
  padding: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.color.whiteDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputWrapper = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  img {
    position: absolute;
    top: 2.8rem;
    left: 3rem;
  }
`;
const Input = styled.input`
  height: 3.5rem;
  width: 80%;
  border: none;
  padding: 0.5rem 2rem;
  padding-left: 4rem;
  border-radius: 2rem;
  color: ${(props) => props.theme.color.grayDark};
  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;
const Icon = styled.img``;
const DoneButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.grayDark};
  border-radius: 2rem;
  cursor: pointer;
`;
export default function SearchPopUp({ setShowPopUp }) {
  return (
    <>
      <Container>
        <Top>
          <InputWrapper>
            <Icon src={searchUrl} alt="search-icon" />
            <Input type="text" placeholder="Search area in Dhaka city"></Input>
          </InputWrapper>
          <DoneButton>Done</DoneButton>
        </Top>
      </Container>
      <BluryBackground
        onClick={() => {
          setShowPopUp(false);
        }}
      />
    </>
  );
}
