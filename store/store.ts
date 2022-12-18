import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from '../actions/user/userSlice'
import wordsSlice from "../actions/words/wordsSlice";

export const store =  configureStore({
    reducer:{
        games:gamesSlice,
        words:wordsSlice
    }
})

export default store