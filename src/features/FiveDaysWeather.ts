import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFiveDaysData} from "../types/types";
import axios from "axios";

export const fetchFiveDaysWeather = createAsyncThunk('fetchFiveDaysWeather',
async (link: string) => {
        const res = await axios.get<IFiveDaysData>(link)
        return res.data
    }
)

const initialState: IFiveDaysData = {
    error: null,
    loading: 'none',
}

const FiveDaysWeather = createSlice({
    name: 'fiveDaysWeather',
    initialState,
    reducers: {
        resetData: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFiveDaysWeather.pending, (state) => {
            state.loading = 'loading'
            state.error = null
        })
        builder.addCase(fetchFiveDaysWeather.fulfilled, (state, action: PayloadAction<IFiveDaysData>) => {
            action.payload.loading = 'idle'
            action.payload.error = null
            return action.payload
        })
        builder.addCase(fetchFiveDaysWeather.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.error
        })
    },

})

export const {resetData} = FiveDaysWeather.actions

export const FiveDaysWeatherReducer = FiveDaysWeather.reducer