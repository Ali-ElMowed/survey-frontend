import { configureStore } from '@reduxjs/toolkit'
import profileSlice from "./slices/profile"
import surveySlice from "./slices/survey"
import typesSlice from "./slices/types"

export default configureStore({
    reducer: {
        profile: profileSlice,
        survey: surveySlice,
        types: typesSlice
    },
})