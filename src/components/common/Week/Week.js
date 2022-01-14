import React from "react";
import styled from "styled-components";
import Day from "../Day/Day";

function Week() {
  console.log([...Array(7).keys()]);
  return (
    <Container>
      {[...Array(7).keys()].map((item, index) => (
        <Day key={index} value={item + 1} />
      ))}
    </Container>
  );
}

export default Week;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;
