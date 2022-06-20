import { createSlice, configureStore } from '@reduxjs/toolkit'

const choicesSlice = createSlice({
    name: 'choices',
    initialState: [],
    reducers: {
        set: (state, action) => {
            return action.payload
        },
        update: (state, action) => {
            return [...state.filter(choice => choice.id !== action.payload.id), action.payload]
        },
        add: (state, action) => {
            return [
                ...state, {
                    "id": state[state.length - 1]?.id + 1 || 1,
                    "question_id": action.payload,
                    "choice_content": "",
                    "created_at": null,
                    "updated_at": null
                },
            ]
        }
    }
})

export const { set, add, update } = choicesSlice.actions

export default choicesSlice.reducer
