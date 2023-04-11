import { ordered as drinkOrdered } from '../drink/drinkBottle'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    numofChasers: number
}

const initialState: InitialState = {
    numofChasers: 20
}
const chaserSlice = createSlice({
    name: 'chaser',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofChasers--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numofChasers += action.payload
        },
    },
    // extraReducers: { 
    //     ['drink/ordered']: (state) => {
    //         state.numofChasers--
    //     }
    // },
    extraReducers: (builder) => { //buy drink get chaser free type of thing
        builder.addCase(drinkOrdered, (state) => {
            state.numofChasers--
        })
    },
})

export default chaserSlice.reducer
export const {ordered, restocked } = chaserSlice.actions