import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LeftNav from "./leftNav";
import { useUser } from "../../contexts/user/userContext";
import { useMediaQuery } from "react-responsive";

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
  let lessThan1000 = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  const { user } = useUser();
  return (
    <>
      {lessThan1000 ? (
        <LeftNav />
      ) : (
        <Container>
          <List>
            <ListItem>
              <ListLink to="/buy">Buy</ListLink>
              <ListLink to="/rent">Rent</ListLink>
              <ListLink to="/newHomes">New Homes</ListLink>
              <ListLink to="/blogs">Blogs</ListLink>
              {user?.role === "agent" && (
                <ListLink to="/addProperty">Add a Property</ListLink>
              )}
            </ListItem>
          </List>
        </Container>
      )}
    </>
  );
}
