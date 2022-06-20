import axios from 'axios'

export const getChoices = async () => {
    const res = await axios.get('http://localhost:8000/api/get_choices')
    return res
}