import { createSlice, configureStore } from '@reduxjs/toolkit'

const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        set: (state, action) => {
            return action.payload
        }
    }
})

export const { set } = profileSlice.actions

export default profileSlice.reducer
