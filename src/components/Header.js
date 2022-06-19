import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSurveys } from "../api/survey";
import { getTypes } from "../api/types";
import { set as SetSurvey } from "../redux/slices/survey";
import { set as SetTypes } from "../redux/slices/types";
import Button from "./Button";
const Header = ({ title }) => {
    const dispatch = useDispatch()
    useEffect(() => {
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
        fetchSurveys()
    }, [])
    return (

        <header className="header">

            <h1 className="title">{title}</h1>
            <Button
                color={'#0D99FF'}
                btn_txt={"create one"} />

        </header>


    );
}

export default Header;