import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//REACT ROUTER
import { Link } from "react-router-dom";
import { smallImage } from "../util";
// IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const Game = ({ name, released, background, id, platforms }) => {
    const dispatch = useDispatch();
    const stringPathId = id.toString();

    const loadDetailHandler = () => {
        console.log("Clicked");
        console.log("ID:" + id);
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
        console.log(typeof stringPathId);
    };

    // Get Platform
    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    };

    return (
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/games/${id}`}>
                {/* <div className="game-wrap"> */}
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={smallImage(background, 640)}
                    alt={name}
                />
                <div className="game-data">
                    <motion.h3 layoutId={`title ${stringPathId}`}>
                        {name}
                    </motion.h3>
                    <p>{released}</p>
                    <div className="platforms">
                        {platforms.map((data) => (
                            <img
                                key={data.platform.id}
                                src={getPlatform(data.platform.name)}
                            ></img>
                        ))}
                    </div>
                </div>
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 50vh;
    text-align: left;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    overflow: hidden;
    padding-bottom: 1rem;
    background: linear-gradient(105deg, #2d2a4f, #cfcfcf);
    /* transition: all 0.25s ease-in-out; */

    &:hover {
        /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); */
        background: linear-gradient(95deg, #2d2a4f, #cfcfcf);
    }
    /* .game-wrap {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: space-between;
    } */
    .game-data {
        height: 35%;
        padding: 0.5rem 1rem;
        display: flex;
        flex-direction: column;
        h3 {
            font-size: 1.1rem;
            padding-bottom: 5px;
        }
        p {
            color: #f4f4f4;
            font-size: 1rem;
            margin-bottom: 5px;
        }
    }
    img {
        width: 100%;
        height: 60%;
        /* margin-bottom: 0; */
        object-fit: cover;
        /* transition: all 2s ease; */
        /* display: block; */
    }

    .platforms img {
        display: inline;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        margin-top: 5px;
    }
`;

export default Game;
