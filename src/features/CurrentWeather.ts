import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {ICurrentData} from "../types/types";


export const fetchCurrentWeather = createAsyncThunk('fetchCurrWeather',
    async (city: string) => {
        const res = await axios.get<ICurrentData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=b4753d97985882ce8169158916a467ec`)
        return res.data
    }
)
const initialState: ICurrentData = {
    weather: [],
    error: null,
    loading: 'none'

}

const CurrentWeather = createSlice({
    name: 'currWeather',
    initialState,
    reducers: {
        resetCurrentData: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.pending, (state) => {
            state.loading = 'loading'
            state.error = null
        })
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action: PayloadAction<ICurrentData>) => {
            action.payload.loading = 'idle'
            action.payload.error = null
            return action.payload
        })
        builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error
        })
    }
})

export const {resetCurrentData} = CurrentWeather.actions
export const CurrentWeatherReducer = CurrentWeather.reducer