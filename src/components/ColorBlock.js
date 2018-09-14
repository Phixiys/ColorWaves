import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.p`
  text-shadow: 1px 1px 1px #fff, -2px -2px 1px #fff, -2px 2px 1px #fff,
    2px -2px 1px #fff;
`;

export default ({ color, name }) => {
  return (
    <Box style={{ backgroundColor: color }}>
      <BoxText>{name}</BoxText>
    </Box>
  );
};
