import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../../contexts/user/userContext";

const SignInButton = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.grayDark};
  padding: 1rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 0.5rem;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.color.whiteDark};
  }
`;
const JoinButton = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.white};
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.brand};
  border-radius: 1rem;
  font-weight: bold;
  margin-left: 0.2rem;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: ${(props) => props.theme.color.text.warning};
  }
`;
const Wrapper = styled.div``;
const UserAvatar = styled(Link)`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;
export default function UserMenu() {
  let { user } = useUser();
  return (
    <Wrapper>
      {user ? (
        <UserAvatar to="/profile">
          <img src={"http://localhost:8000" + user?.photo} alt="user-avatar" />
        </UserAvatar>
      ) : (
        <>
          <SignInButton to="/auth/signin">Sign in</SignInButton>
          <JoinButton to="/auth/signup">Join</JoinButton>
        </>
      )}
    </Wrapper>
  );
}
