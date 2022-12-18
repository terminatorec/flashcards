import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState = {
// 	dota: 0,
// 	apex: 0,
// };

export const wordsSlice = createSlice({
	name: "words",
	initialState: {
		words: '',
	},
	reducers: {
		addNewWords: (state: any, action: PayloadAction<any>) => {
			// state.words = [...state.words,...action.payload];
			state.words = action.payload;
		},
	},
});

export const { addNewWords } = wordsSlice.actions; //обязательно импортировать функции
export default wordsSlice.reducer;
