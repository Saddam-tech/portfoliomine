import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Certificates from "./components/Certificates";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return !loading ? (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Certificates />
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
