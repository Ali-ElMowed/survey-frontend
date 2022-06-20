import { configureStore } from '@reduxjs/toolkit'
import profileSlice from "./slices/profile"
import surveySlice from "./slices/survey"
import choicesSlice from "./slices/choices"
import typesSlice from "./slices/types"

export default configureStore({
    reducer: {
        profile: profileSlice,
        survey: surveySlice,
        choices: choicesSlice,
        types: typesSlice
    },
})