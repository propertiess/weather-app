import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {FiveDaysWeatherReducer} from "../features/FiveDaysWeather";
import {CurrentWeatherReducer} from "../features/CurrentWeather";

export const store = configureStore({
  reducer: {
    fiveDaysWeather: FiveDaysWeatherReducer,
    currentWeather: CurrentWeatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
