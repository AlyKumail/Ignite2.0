// require("dotenv").config();
// API KEY
// import dotenv from "dotenv";
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
console.log(API_KEY);

// Base URL
const baseUrl = "https://api.rawg.io/api/";

// Geting current Month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;

    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

// Geting current Day
const getCurrentDay = () => {
    const day = new Date().getDate();

    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const getPopularGamesUrl = () => `${baseUrl}${popular_games}`;
export const upcomingGamesUrl = () => `${baseUrl}${upcoming_games}`;
export const newGamesUrl = () => `${baseUrl}${new_games}`;

// GAME DETAILS
export const gameDetailURL = (game_id) =>
    `${baseUrl}games/${game_id}?key=${API_KEY}`;
// GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
    `${baseUrl}games/${game_id}/screenshots?key=${API_KEY}`;
// Search Games
export const searchGamesURL = (game_name) =>
    `${baseUrl}games?key=${API_KEY}&search=${game_name}&page_size=9`;
