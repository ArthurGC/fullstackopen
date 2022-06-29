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

const remove = async (id) => {
    const request = await axios.delete(`${baseUrl}/${id}`)
    return request
}

const actions = {
    getAll: getAll,
    create: create,
    remove: remove,
}

export default actions
