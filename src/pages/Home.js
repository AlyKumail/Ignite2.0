import React, { useEffect, useState } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Styling and Animation
import styled from "styled-components";
import {
    motion,
    AnimatePresence,
    AnimateSharedLayout,
    LayoutGroup,
} from "framer-motion";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// import Hero from "../components/Hero";
// Router
import { useLocation } from "react-router-dom";

const Home = () => {
    const [detailReleaseDate, setDetailReleaseDetail] = useState("");
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    // Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // Get data back from redux store
    const { popular, upcoming, newGames, searched } = useSelector(
        (state) => state.games
    );
    // console.log(games);

    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    {path && <GameDetail path={path}></GameDetail>}
                </AnimatePresence>
                {searched.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map((game) => (
                                <Game
                                    name={game.name}
                                    released={game.released}
                                    background={game.background_image}
                                    id={game.id}
                                    key={game.id}
                                    platforms={game.platforms}
                                ></Game>
                            ))}
                        </Games>
                    </div>
                ) : (
                    ""
                )}
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            background={game.background_image}
                            id={game.id}
                            key={game.id}
                            platforms={game.platforms}
                        ></Game>
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            background={game.background_image}
                            id={game.id}
                            key={game.id}
                            platforms={game.platforms}
                        ></Game>
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map((game) => (
                        <Game
                            name={game.name}
                            released={game.released}
                            background={game.background_image}
                            id={game.id}
                            key={game.id}
                            platforms={game.platforms}
                        ></Game>
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem 5rem 0;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
