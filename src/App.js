import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Drawer from "./components/Drawer";
import { GlobalStyles } from "./components/GlobalStyles";

function App() {
  const [loading, setLoading] = useState(true);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return !loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      <GlobalStyles />
      <Drawer drawer={drawer} />
      <Header drawer={drawer} setDrawer={setDrawer} />
      <Container />
    </div>
  ) : (
    <p
      style={{
        textAlign: "center",
        verticalAlign: "center",
        lineHeight: "750px",
        fontFamily: "Optima",
        fontSize: "30px",
      }}
    >
      Loading...
    </p>
  );
}

export default App;
