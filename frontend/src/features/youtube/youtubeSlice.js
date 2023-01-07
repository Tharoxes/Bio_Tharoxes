import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    playlists: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const ytSlice = createSlice({
    name: 'yt',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
})

export default ytSlice.reducer