import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {ICurrentData} from "../types/types";


export const fetchCurrentWeather = createAsyncThunk('fetchCurrWeather',
    async (link: string) => {
        const res = await axios.get<ICurrentData>(link)
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