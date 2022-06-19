import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../redux/slices/profile";
import Choices from "./Choices";

const Add_question_card = ({ data }) => {
    const types = useSelector(state => state.types)
    const [question, setQuestion] = useState(data.question_content)
    const [type, setType] = useState(types?.find(t => t.id === data.question_type_id)?.type)
    const dispatch = useDispatch()



    return (
        <div className="add-question-card">
            <div className="card-header">
                <input
                    placeholder="Enter here the question"
                    type="text"
                    defaultValue={question}
                    onChange={(e) => { setQuestion(e.target.value) }}
                />
                <select value={type} onChange={(e) => {
                    setType(e.target.value)
                }}>
                    {
                        types.map(option => (
                            <option value={option.type}>{option.type}</option>
                        ))
                    }
                </select>
            </div>
            {(type !== 'text' && type !== 'date') && <div>
                <Choices />
            </div>}

        </div>
    );


}
export default Add_question_card;