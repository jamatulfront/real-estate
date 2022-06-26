import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 1rem;
  font-size: inherit;
`;
