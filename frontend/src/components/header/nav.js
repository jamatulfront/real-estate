import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const List = styled.ul``;
const ListItem = styled.li`
  list-style: none;
`;
const ListLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.grayDark};
  font-weight: 500;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.color.whiteDark};
  }
`;

export default function Nav() {
  return (
    <Container>
      <List>
        <ListItem>
          <ListLink to="/buy">Buy</ListLink>
          <ListLink to="/rent">Rent</ListLink>
          <ListLink to="/blogs">Blogs</ListLink>
        </ListItem>
      </List>
    </Container>
  );
}
