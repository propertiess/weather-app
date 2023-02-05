import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WeatherService } from '../../services/weather/weather.service';
import { FetchWeather, IFiveDaysData } from '../../types/types';

export const fetchFiveDaysWeather = createAsyncThunk(
  'fetchFiveDaysWeather',
  async ({ place, lat, lon }: FetchWeather) => {
    if (place && place.trim())
      return WeatherService.getFiveDaysWeatherByPlace(place);
    if (lat && lon) return WeatherService.getFiveDaysWeatherByLatLon(lat, lon);
    throw Error;
  }
);

const initialState: IFiveDaysData = {
  error: null,
  loading: 'none'
};

const FiveDaysWeather = createSlice({
  name: 'fiveDaysWeather',
  initialState,
  reducers: {
    resetData: () => initialState
  },
  extraReducers: builder => {
    builder.addCase(fetchFiveDaysWeather.pending, state => {
      state.loading = 'loading';
      state.error = null;
    });
    builder.addCase(
      fetchFiveDaysWeather.fulfilled,
      (state, action: PayloadAction<IFiveDaysData>) => {
        action.payload.loading = 'idle';
        action.payload.error = null;
        return action.payload;
      }
    );
    builder.addCase(fetchFiveDaysWeather.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error;
    });
  }
});

export const { resetData } = FiveDaysWeather.actions;

export const FiveDaysWeatherReducer = FiveDaysWeather.reducer;
