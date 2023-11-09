import { useState, useLayoutEffect, useRef } from "react";

import { AnimatedHeader } from "./components/Header";

import "./App.css";

export default App;

function App() {
  return (
    <div id="App">
      <header>
        <nav></nav>
        <AnimatedHeader />
      </header>
      <div className="container">Container</div>
    </div>
  );
}
