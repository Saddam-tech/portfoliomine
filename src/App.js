import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Container from "./components/Container";
import Drawer from "./components/Drawer";
import { GlobalStyles } from "./components/GlobalStyles";
import Backdrop from "./components/Backdrop";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
  position: relative;
`;

const LoadingText = styled.p`
  text-align: center;
  vertical-align: center;
  line-height: 750px;
  font-family: Optima, sans-serif;
  font-size: 30px;
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return !loading ? (
    <AppWrapper>
      <GlobalStyles />
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <Header drawer={drawer} setDrawer={setDrawer} />
      {drawer && <Backdrop setDrawer={setDrawer} />}
      <Container />
    </AppWrapper>
  ) : (
    <LoadingText>Loading...</LoadingText>
  );
}

export default App;
