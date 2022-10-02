import { configureStore } from "@reduxjs/toolkit";
import { FiveDaysWeatherReducer } from "./reducers/FiveDaysWeather";
import { CurrentWeatherReducer } from "./reducers/CurrentWeather";

export const store = configureStore({
  reducer: {
    fiveDaysWeather: FiveDaysWeatherReducer,
    currentWeather: CurrentWeatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
