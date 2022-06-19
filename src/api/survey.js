import axios from 'axios'

export const getSurveys = async () => {
    const res = await axios.get('http://localhost:8000/api/get_survey_questions/1')
    return res
}