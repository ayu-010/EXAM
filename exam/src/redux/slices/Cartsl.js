import { createSlice } from "@reduxjs/toolkit";



export const Cartsl=createSlice(
    {

        name:"cart",
        initialState:[],
//   reducers function take 2 input state and action
reducers:{
    add:(state,action) => {
        state.push(action.payload);
    },
    remove:(state,action) => {
        return state.filter((item) => item.id !== action.payload);
    },
}
    });

export  const{add,remove}    = Cartsl.actions;
export   default Cartsl.reducer;