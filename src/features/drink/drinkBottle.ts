import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    numofDrinks: number
}

const initialState: InitialState = {
    numofDrinks: 10
}
const drinkBottle = createSlice({
    name: 'drink',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofDrinks--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numofDrinks += action.payload
        },
    },
})

export default drinkBottle.reducer
export const {ordered, restocked } = drinkBottle.actions