import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Drawer({ drawer }) {
  return <Container drawer={drawer}>DRAWER MOREMORE MORE</Container>;
}

export default Drawer;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100vh;
  transform: ${({ drawer }) => (!drawer ? "translate(-400px)" : "")};
  transition: 0.4s ease-in-out;
  opacity: 0.9;
  width: 75%;
  z-index: 998;
`;
