import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState = {
// 	dota: 0,
// 	apex: 0,
// };

export const userSlice = createSlice({
	name: "test",
	initialState: {
		dota: 0,
		apex: 0,
        pubg:0,
	},
	reducers: {
		incrementDota: (state:any, action: PayloadAction<any>) => {
            state.dota += action.payload
        },
		incrementApex: (state:any, action: PayloadAction<any>) => {
            state.apex += action.payload
        },
		incrementPubg: (state:any, action: PayloadAction<any>) => {
            state.pubg += action.payload
        },
	},
});

export const { incrementDota, incrementApex,incrementPubg } = userSlice.actions; //обязательно импортировать функции
export default userSlice.reducer;
