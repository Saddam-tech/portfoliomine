import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Drawer() {
  return <Container>DRAWER MOREMORE MORE</Container>;
}

export default Drawer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100vh;
  transform: translate(-90px);
  z-index: 998;
`;
