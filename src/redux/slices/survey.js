import { createSlice, configureStore } from '@reduxjs/toolkit'

const surveySlice = createSlice({
    name: 'survey',
    initialState: {},
    reducers: {
        set: (state, action) => {
            return action.payload
        }
    }
})

export const { set } = surveySlice.actions

export default surveySlice.reducer
