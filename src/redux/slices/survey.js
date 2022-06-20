import { createSlice, configureStore } from '@reduxjs/toolkit'

const surveySlice = createSlice({
    name: 'survey',
    initialState: {},
    reducers: {
        set: (state, action) => {
            return action.payload
        },
        update: (state, action) => {
            return { ...state, questions: [...state.questions.filter(question => question.id !== action.payload.id), action.payload] }
        },
        add: (state, action) => {
            return {
                ...state, questions: [
                    ...state.questions, {
                        "id": state.questions[state.questions.length - 1].id + 1,
                        "question_content": "",
                        "created_at": null,
                        "updated_at": null,
                        "survey_id": 1,
                        "question_type_id": 1
                    },
                ]
            }
        }
    }
})

export const { set, add, update } = surveySlice.actions

export default surveySlice.reducer
