import React from "react";
import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import Howitwork from "./components/Layout/Howitwork";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Howitwork />
      </main>
    </React.Fragment>
  );
}

export default App;
