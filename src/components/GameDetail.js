import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
// IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starFull from "../img/star-full.png";
import starEmpty from "../img/star-empty.png";

const GameDetail = ({ path }) => {
    const { game, screen, isLoading } = useSelector((state) => state.detail);
    const navigate = useNavigate();
    console.log(typeof path);
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            navigate("/");
        }
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

    // Get Star
    const getStar = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 0; i < 5; i++) {
            if (i <= rating)
                stars.push(<img alt="star" key={i} src={starFull}></img>);
            else stars.push(<img alt="star" key={i} src={starEmpty}></img>);
        }
        return stars;
    };

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={path}>
                        <Stats>
                            <div className="aboutGame">
                                <div className="rating">
                                    <motion.h3 layoutId={`title ${path}`}>
                                        {game.name}
                                    </motion.h3>
                                    <p>Rating: {game.rating}</p>
                                    <p>Released: {game.released}</p>
                                    <p>Rating: {game.rating}</p>
                                    {getStar()}
                                </div>
                                <Info>
                                    <h3>Platforms</h3>
                                    <Platforms>
                                        {game.platforms.map((data) => (
                                            <img
                                                key={data.platform.id}
                                                src={getPlatform(
                                                    data.platform.name
                                                )}
                                            ></img>
                                        ))}
                                    </Platforms>
                                </Info>
                            </div>
                            <img
                                className="coverImg"
                                src={smallImage(game.background_image, 1280)}
                                alt=""
                            />
                        </Stats>
                        <Media>
                            <motion.img
                                layoutId={`image ${path}`}
                                src={smallImage(game.background_image, 1280)}
                                alt="image"
                            />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img
                                    src={smallImage(screen.image, 1280)}
                                    key={screen.id}
                                    alt="image"
                                />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    &::-webkit-scrollbar {
        width: 0.5rem !important;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676 !important;
    }
    &::-webkit-scrollbar-track {
        background-color: white !important;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    padding: 2rem 10rem;
    background: #494854;
    position: absolute;
    left: 10%;
    color: black;
    margin-top: 1.5rem;

    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .coverImg {
        width: 50%;
        height: 40vh;
        border-radius: 15px;
    }
    img {
        width: 1rem;
        height: 1rem;
        display: inline;
    }
    .aboutGame {
        /* display: flex;
        flex-direction: column;
        align-items: space-between !important;
        justify-content: space-between !important; */
        /* display: flex; */
        height: 35vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .rating {
        margin-top: 0;
        margin-bottom: auto;
    }
    .rating h3 {
        font-size: 28px;
        padding: 10px 0;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 1rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 2.5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0;
`;

export default GameDetail;
