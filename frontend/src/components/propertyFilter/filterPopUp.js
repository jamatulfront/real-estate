import styled from "styled-components";

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--blur);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
`;
const Wrapper = styled.div`
  padding: 0 3rem;
  border-radius: 2rem;
  position: absolute;
  width: 40%;
  height: 70vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 4000;
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Heading = styled.h1`
  font-size: 2.4rem;
  color: var(--grayDark);
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color.whiteDark};
`;
const Divider = styled.div`
  height: 2px solid var(--grayDark);
  width: 100%;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const InputLabel = styled.label`
  font-size: 2rem;
  font-weight: bold;
  color: var(--grayDark);
`;
const CheckBox = styled.input`
  margin-right: 0.5rem;
`;
const Select = styled.select`
  padding: 1rem 5rem;
  border: 1px solid var(--grayDark);
  border-radius: 0.5rem;
  color: var(--grayDark);
  @media (max-width: 500px) {
    font-size: 1.4rem;
    padding: 0.5rem 2rem;
  }
`;
const Option = styled.option``;
const Input = styled.input`
  border: none;
  border: 1px solid var(--grayDark);
  font-size: 1.6rem;
  color:var(--grayDark);
  padding 1rem 2rem;
  border-radius: 0.5rem;
  @media (min-width: 700) {
    padding 1rem 0rem;
  }
  @media (max-width: 500px) {

    padding: 1rem 0;
  }`;

const InputWrapper = styled.div`
  display: flex;
  ${(props) => (props.column ? "flex-direction:column" : "")};
  gap: 0.5rem;
`;
const SmallLabel = styled.label`
  color: var(--grayDark);
  margin-right: 1rem;
`;

export default function FilterPopUp({ setShowPopUp }) {
  return (
    <>
      <Overlay onClick={() => setShowPopUp(false)} />
      <Wrapper>
        <Heading>Filters</Heading>
        <Divider />
        <FormWrapper>
          <InputLabel>Property type</InputLabel>
          <InputWrapper column>
            <InputWrapper>
              <CheckBox type="checkbox" value="all" />
              <SmallLabel>All types</SmallLabel>
            </InputWrapper>
            <InputWrapper>
              <CheckBox type="checkbox" value="house" />
              <SmallLabel>house</SmallLabel>
            </InputWrapper>
            <InputWrapper>
              <CheckBox type="checkbox" value="apartment" />
              <SmallLabel>apartment</SmallLabel>
            </InputWrapper>
            <InputWrapper>
              <CheckBox type="checkbox" value="land" />
              <SmallLabel>land</SmallLabel>
            </InputWrapper>
          </InputWrapper>
          <InputLabel>Price</InputLabel>
          <InputWrapper>
            <InputWrapper column>
              <SmallLabel>Min</SmallLabel>
              <Select>
                <Option value="any">any</Option>
              </Select>
            </InputWrapper>
            <InputWrapper column>
              <SmallLabel>Max</SmallLabel>
              <Select type="select">
                <Option value="5">any</Option>
              </Select>
            </InputWrapper>
          </InputWrapper>
          <InputLabel>Bedrooms</InputLabel>
          <InputWrapper>
            <InputWrapper column>
              <SmallLabel>Min</SmallLabel>
              <Input type="number"></Input>
            </InputWrapper>
            <InputWrapper column>
              <SmallLabel>max</SmallLabel>
              <Input type="number"></Input>
            </InputWrapper>
          </InputWrapper>
        </FormWrapper>
      </Wrapper>
    </>
  );
}
