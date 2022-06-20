import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/slices/survey";
import Add_question_card from "./Add_question_card";
import { getSurveys } from "../api/survey";
import { getTypes } from "../api/types";
import { getChoices } from "../api/choices"
import { set as SetChoices } from "../redux/slices/choices";
import { set as SetSurvey } from "../redux/slices/survey";
import { set as SetTypes } from "../redux/slices/types";
import Button from "./Button";
const Survey = ({ title }) => {
    const survey = useSelector(state => state.survey)
    const choices = useSelector(state => state.choices)
    const dispatch = useDispatch()
    const addQuestion = () => {
        dispatch(add())
    }
    useEffect(() => {

        const fetchChoices = async () => {
            try {
                const res = await getChoices()
                dispatch(SetChoices(res?.data?.data))
            } catch (error) {
                console.log(error);
            }
        }
        const fetchSurveys = async () => {
            try {
                const res = await getSurveys()
                dispatch(SetSurvey(res?.data?.data[0]))
            } catch (error) {
                console.log(error);
            }
        }
        const fetchTypes = async () => {
            try {
                const res = await getTypes()
                dispatch(SetTypes(res?.data?.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchTypes()
        fetchChoices()
        fetchSurveys()
    }, [])

    useEffect(() => {
        console.log("survey:", survey, "\nchoices:", choices);
    }, [choices, survey])
    return (
        <>
            {
                survey?.questions?.map(question => (<Add_question_card question={question} choices={choices.filter(c => c.question_id === question.id)} />))
            }
            <Button btn_txt="Add question" onClick={addQuestion} />
        </>

    );
}

export default Survey;