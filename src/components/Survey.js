import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/slices/survey";
import Add_question_card from "./Add_question_card";
import Button from "./Button";
const Survey = ({ title }) => {
    const survey = useSelector(state => state.survey)
    const dispatch = useDispatch()
    const addQuestion = () => {
        dispatch(add())
    }


    return (
        <>
            {
                survey?.questions?.map(question => (<Add_question_card data={question} />))
            }
            <Button btn_txt="Add question" onClick={addQuestion} />
        </>

    );
}

export default Survey;