import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import bg from "../img/bg.png";
import arrow from "../img/arrow.png";

const Hero = () => {
    return (
        <StyledHero>
            <img className="bg" src={bg} alt="" />
            <h2>One stop shop for all games information</h2>
            <div className="explore">
                <p>Explore</p>
                <img src={arrow} alt="" />
            </div>
        </StyledHero>
    );
};

const StyledHero = styled(motion.div)`
    /* background: url("../img/bg.png"); */
    color: white;
    height: 50vh;
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding: 3rem 4rem;
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
    }
    h2 {
        color: white;
        font-family: "Staatliches";
        letter-spacing: 5px;
        font-size: 4.75rem !important;
        font-weight: bold !important;
        width: 80%;
    }
    .explore {
        /* z-index: 2; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 8%;
        left: 50%;
        transform: translateX(-50%);
        p {
            color: white;
            font-family: "Staatliches";
            font-size: 1.5rem;
        }
        img {
            width: 20px;
        }
    }
`;

export default Hero;
