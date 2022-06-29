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

const update = async (id, modifiedNote) => {
    const { data } = await axios.put(`${baseUrl}/${id}`, modifiedNote)
    return data
}

const actions = {
    getAll: getAll,
    create: create,
    remove: remove,
    update: update,
}

export default actions
