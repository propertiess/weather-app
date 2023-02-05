import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { weatherAPI } from '../../api/Weather/weatherAPI';
import { FetchWeather, ICurrentData } from '../../types/types';

export const fetchCurrentWeather = createAsyncThunk(
  'fetchCurrWeather',
  async ({ place, lat, lon }: FetchWeather) => {
    if (place && place.trim())
      return weatherAPI.getCurrentWeatherByPlace(place);
    if (lat && lon) return weatherAPI.getCurrentWeatherByLatLon(lat, lon);
    throw Error;
  }
);
const initialState: ICurrentData = {
  weather: [],
  error: null,
  loading: 'none'
};

const CurrentWeather = createSlice({
  name: 'currWeather',
  initialState,
  reducers: {
    resetCurrentData: () => initialState
  },
  extraReducers: builder => {
    builder.addCase(fetchCurrentWeather.pending, state => {
      state.loading = 'loading';
      state.error = null;
    });
    builder.addCase(
      fetchCurrentWeather.fulfilled,
      (state, action: PayloadAction<ICurrentData>) => {
        action.payload.loading = 'idle';
        action.payload.error = null;
        return action.payload;
      }
    );
    builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error;
    });
  }
});

export const { resetCurrentData } = CurrentWeather.actions;
export const CurrentWeatherReducer = CurrentWeather.reducer;
