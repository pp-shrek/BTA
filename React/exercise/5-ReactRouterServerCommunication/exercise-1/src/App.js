import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Links from "./components/Links";

const App = () => {
  const [page, setPage] = useState("home");

  const toPage = (page) => (event) => {
    event.preventDefault();
    setPage(page);
  };

  const content = () => {
    if (page === "home") {
      return <Home />;
    } else if (page === "about") {
      return <About />;
    } else if (page === "links") {
      return <Links />;
    }
  };

  const padding = { padding: "2em" };
  return (
    <div>
      <div>
        <a style={padding} href="#" onClick={toPage("home")}>
          Home
        </a>
        <a style={padding} href="#" onClick={toPage("about")}>
          About
        </a>
        <a style={padding} href="#" onClick={toPage("links")}>
          Links
        </a>
      </div>
      {content()}
    </div>
  );
};

export default App;
