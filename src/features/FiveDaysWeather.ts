import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IFiveDaysData} from "../types/types";
import axios from "axios";

export const fetchFiveDaysWeather = createAsyncThunk('fetchFiveDaysWeather',
async (city: string) => {

        const res = await axios.get<IFiveDaysData>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ru&appid=b4753d97985882ce8169158916a467ec`)
        // console.log('dd')
        return res.data
    }
)

const initialState: IFiveDaysData | null = {}

const FiveDaysWeather = createSlice({
    name: 'fiveDaysWeather',
    initialState,
    reducers: {
        resetData: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFiveDaysWeather.fulfilled, (state, action) => {
            return action.payload
        })

    },

})

export const {resetData} = FiveDaysWeather.actions

export const FiveDaysWeatherReducer = FiveDaysWeather.reducer