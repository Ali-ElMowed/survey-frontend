import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../redux/slices/profile";
import { update } from "../redux/slices/survey";
import Choices from "./Choices";

const Add_question_card = ({ question, choices }) => {
    const types = useSelector(state => state.types)
    const [type, setType] = useState(types?.find(t => t.id === question.question_type_id)?.type)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(type);
        setType(types?.find(t => t.id === question.question_type_id)?.type)
    }, [question.question_type_id])

    return (
        <div className="add-question-card">
            <div className="card-header">
                <input
                    placeholder="Enter here the question"
                    type="text"
                    defaultValue={question.question_content}
                    onChange={(e) => { dispatch(update({ ...question, question_content: e.target.value })) }}
                />
                <select value={type} onChange={(e) => {
                    dispatch(update({ ...question, question_type_id: types.find(t => t.type === e.target.value).id }))
                }}>
                    {
                        types.map(option => (
                            <option value={option.type}>{option.type}</option>
                        ))
                    }
                </select>
            </div >
            {(type !== 'text' && type !== 'date') && <div className="choice-btn">
                <Choices choices={choices} question_id={question.id} />
            </div>}

        </div>
    );


}
export default Add_question_card;