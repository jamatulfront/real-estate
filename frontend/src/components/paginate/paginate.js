import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 14rem;
`;
const Button = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: ${(props) => (props.active ? "var(--blue)" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "var(--grayDark)")};
  border: 1px solid ${(props) => props.theme.color.whiteDark};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
export default function Paginate({ total, currentPage, setPage }) {
  const handlePagination = (page) => {
    setPage(page);
  };

  return (
    <Container>
      <Button
        onClick={() => {
          if (currentPage === 1) {
            return;
          }
          setPage((page) => page - 1);
        }}
      >
        prev
      </Button>
      <Button
        onClick={() => {
          if (currentPage === total) {
            return;
          }
          setPage((page) => page + 1);
        }}
      >
        next
      </Button>
      {createDumpArray(total).map((v, i) => (
        <Button
          active={currentPage === i + 1}
          key={i}
          onClick={(e) => handlePagination(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
    </Container>
  );
}

function createDumpArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i + 1);
  }
  return array;
}
