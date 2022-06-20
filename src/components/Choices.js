import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, update } from "../redux/slices/choices";

const Choices = ({ choices, question_id }) => {
    const dispatch = useDispatch()

    return (
        <div className="choices-container">
            {
                choices.map((choice, index) => (
                    <div>
                        <input
                            placeholder={`Choice ${index + 1}`}
                            type="text"
                            defaultValue={choice.choice_content}
                            onChange={(e) => { dispatch(update({ ...choice, choice_content: e.target.value })) }}
                        // onFocus={index === Object.keys(choices).length - 1 ? () => { dispatch(add(choice.question_id)) } : null}
                        />
                    </div>
                ))
            }
            <button onClick={() => { dispatch(add(question_id)) }} className="btn btn-choice">add choice</button>
        </div>
    );


}
export default Choices;