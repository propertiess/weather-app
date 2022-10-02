import axios from "axios";

export const currentWeatherInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    units: "metric",
    lang: "ru",
    appid: process.env.REACT_APP_API_KEY,
  },
});

export const fiveDaysWeatherInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/forecast",
  params: {
    units: "metric",
    lang: "ru",
    appid: process.env.REACT_APP_API_KEY,
  },
});
