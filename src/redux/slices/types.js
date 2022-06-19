import { createSlice, configureStore } from '@reduxjs/toolkit'

const typesSlice = createSlice({
    name: 'types',
    initialState: [],
    reducers: {
        set: (state, action) => {
            return action.payload
        }
    }
})

export const { set } = typesSlice.actions

export default typesSlice.reducer
