import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

const getAll = async () => {
    const { data } = await axios.get(baseUrl)
    return data
}

const create = async (newNote) => {
    const { data } = await axios.post(baseUrl, newNote)
    return data
}

const actions = {
    getAll: getAll,
    create: create,
}

export default actions
