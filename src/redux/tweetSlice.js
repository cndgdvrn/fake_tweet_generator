import { createSlice } from "@reduxjs/toolkit";
import { formatCount } from "../helpers/formatCount";
import { formatDate } from "../helpers/formatDate";
import { months } from "../helpers/months";
import { formatTime } from "../helpers/formatTime";

const initialState = {
  name: "",
  username: "",
  tweet: "",
  avatar: "",
  retweetCount: 0,
  quoteCount: 0,
  likeCount: 0,
  bookmarkCount: 0,
  time: "00:00",
  date: {
    year: new Date().getFullYear().toString(),
    month: months[new Date().getMonth()+1].substring(0, 3),
    day: new Date().getDate().toString(),
  },
  views: 0,
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setName: (state, action) => void (state.name = action.payload),
    setUsername: (state, action) => void (state.username = action.payload),
    setTweet: (state, action) => void (state.tweet = action.payload),
    setAvatar: (state, action) => {
      console.log(action.payload);
      state.avatar = action.payload;
    },
    setRetweetCount: (state, action) => {
      state.retweetCount = formatCount(action.payload);
    },
    setQuoteCount: (state, action) => {
      state.quoteCount = formatCount(action.payload);
    },
    setLikeCount: (state, action) => {
      state.likeCount = formatCount(action.payload);
    },
    setBookmarkCount: (state, action) => {
      state.bookmarkCount = formatCount(action.payload);
    },
    setDate: (state, action) => {
      const { year, month, day } = formatDate(action.payload);
      state.date.year = year;
      state.date.month = month;
      state.date.day = day;
    },
    setTime : (state, action) => {
      state.time = formatTime(action.payload)
    },
    setViews: (state, action) => {
      state.views = formatCount(action.payload);
    }
  },
});

export const {
  setName,
  setUsername,
  setTweet,
  setAvatar,
  setRetweetCount,
  setQuoteCount,
  setLikeCount,
  setBookmarkCount,
  setDate,
  setTime,
  setViews
} = tweetSlice.actions;

export default tweetSlice.reducer;
