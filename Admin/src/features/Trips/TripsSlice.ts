import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {TripState} from '../../types/index'

interface typeState{
  trips:any,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: any,
}

const initialState:typeState = {
  trips : [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//get all trips
const getAllTrips = createAsyncThunk("trips", async (_, thunkAPI) => {
  try {
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
const tripSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTrips.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(getAllTrips.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trips = action.payload
      })
      .addCase(getAllTrips.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});
export const { reset } = tripSlice.actions;
export default tripSlice.reducer;
