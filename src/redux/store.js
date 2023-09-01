import { configureStore } from '@reduxjs/toolkit'
import tweetSlice from './tweetSlice'




export const store = configureStore({
  reducer: {
    tweet:tweetSlice
  },
})