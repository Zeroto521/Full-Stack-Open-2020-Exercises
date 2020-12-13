import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}


const create = (newObject) => {
  axios.post(baseUrl, newObject)
}

const query = (name) => {
  const request = axios.get(`${baseUrl}/query/${name}`)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  axios.put(`${baseUrl}/${id}`, newObject)
}


const delete_ = (id) => {
  axios.delete(`${baseUrl}/${id}`)
}

export default {
  getAll,
  create,
  update,
  query,
  delete: delete_
}