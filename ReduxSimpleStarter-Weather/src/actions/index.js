import axios from 'axios';

const API_KEY = 'c366e158dbf6052225a15c7dcf44e74d'
;
const FORECAST_URL= `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${FORECAST_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}