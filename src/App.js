import React, { useEffect } from "react";
// Components & Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
// Styles
import GlobalStyles from "./components/GlobalStyles";
// React Router
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Nav></Nav>
            <Hero></Hero>
            <Home></Home>
        </div>
    );
}

export default App;
