import axios from 'axios'
export const getTypes = async () => {
    const res = await axios.get('http://localhost:8000/api/get_question_types')
    return res
}