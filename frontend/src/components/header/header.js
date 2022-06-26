import React from "react";
import Logo from "../logo/logo";
import Nav from "./nav";
import {
  Container,
  LogoWrapper,
  Navbar,
  UserMenuWrapper,
} from "./styledHeader";
import UserMenu from "./userMenu";
export default function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Navbar>
        <Nav />
      </Navbar>
      <UserMenuWrapper>
        <UserMenu />
      </UserMenuWrapper>
    </Container>
  );
}
