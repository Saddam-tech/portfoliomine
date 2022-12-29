import React from "react";
import styled from "styled-components";

function Backdrop({ setDrawer }) {
  return <Container onClick={() => setDrawer((prev) => !prev)}></Container>;
}

export default Backdrop;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000;
  height: 100vh;
  width: 100%;
  opacity: 0.4;
`;
