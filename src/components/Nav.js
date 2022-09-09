import React, { useState } from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
// REDUX & ROUTER
import { searchGame } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(searchGame(textInput));
        setTextInput("");
    };

    const clearSearch = () => {
        dispatch({ type: "EMPTY_SEARCHED" });
    };

    const dispatch = useDispatch();
    return (
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite2.0</h1>
            </Logo>
            {/* <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitForm} type="submit">
                    Search
                </button>
            </form> */}
        </StyledNav>
    );
};

const StyledNav = styled(motion.div)`
    padding: 2rem 5rem;
    /* text-align: left; */
    /* input {
        padding: 0.5rem;
        width: 30%;
        border: none;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
        font-size: 1.2rem;
        margin-top: 1.5rem;
    } */
    /* button {
        padding: 0.5rem 2rem;
        border: none;
        font-size: 1.2rem;
        background-color: #ff7676;
        color: white;
        cursor: pointer;
    } */
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    h1 {
        margin-left: 0.5rem;
    }
`;

export default Nav;
