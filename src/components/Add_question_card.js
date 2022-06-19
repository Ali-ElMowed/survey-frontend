import React, { useEffect, useState } from "react";
import Choices from "./Choices";

const Add_question_card = ({ }) => {
    const [question, setQuestion] = useState('')
    const types = ['Text', 'Dropdown', 'Multiple choice', 'Check boxes', 'Date']
    const [type, setType] = useState(types[0])
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
                            <option value={option}>{option}</option>
                        ))
                    }
                </select>
            </div>
            {type !== 'Text' || type !== 'Date' && <div>
                <Choices />
            </div>}

        </div>
    );


}
export default Add_question_card;