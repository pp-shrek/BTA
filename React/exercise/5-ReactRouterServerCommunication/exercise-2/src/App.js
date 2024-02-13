// import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/links", element: <Links /> },
    ],
  },
]);

const App = () => {
  // const [page, setPage] = useState("home");

  // const toPage = (page) => (event) => {
  //   event.preventDefault();
  //   setPage(page);
  // };

  // const content = () => {
  //   if (page === "home") {
  //     return <Home />;
  //   } else if (page === "about") {
  //     return <About />;
  //   } else if (page === "links") {
  //     return <Links />;
  //   }
  // };

  // const padding = { padding: "2em" };

  return (
    <RouterProvider router={router} />
    // <div>
    //   <div>
    //     <a style={padding} href="#" onClick={toPage("home")}>
    //       Home
    //     </a>
    //     <a style={padding} href="#" onClick={toPage("about")}>
    //       About
    //     </a>
    //     <a style={padding} href="#" onClick={toPage("links")}>
    //       Links
    //     </a>
    //   </div>
    //   {content()}
    // </div>
  );
};

export default App;
