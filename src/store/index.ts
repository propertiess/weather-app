import { configureStore } from '@reduxjs/toolkit';

import { CurrentWeatherReducer } from './reducers/CurrentWeather';
import { FiveDaysWeatherReducer } from './reducers/FiveDaysWeather';

export const store = configureStore({
  reducer: {
    fiveDaysWeather: FiveDaysWeatherReducer,
    currentWeather: CurrentWeatherReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
