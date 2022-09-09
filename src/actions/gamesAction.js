import axios from "axios";
import {
    getPopularGamesUrl,
    upcomingGamesUrl,
    newGamesUrl,
    searchGamesURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(getPopularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newGameData = await axios.get(newGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGameData.data.results,
        },
    });
};

export const searchGame = (game_name) => async (dispatch) => {
    const searchedGame = await axios.get(searchGamesURL(game_name));
    console.log(searchGamesURL);
    dispatch({
        type: "FETCH_SEARCHED",
        payload: { searched: searchedGame.data.results },
    });
};
