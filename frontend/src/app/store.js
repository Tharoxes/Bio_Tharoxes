import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import ytReducer from '../features/youtube/youtubeSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        yt: ytReducer,
    }
})
