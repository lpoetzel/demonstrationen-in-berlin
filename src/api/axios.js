import axios from "axios"
/*
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
} */

export const getPosts = () => {
    const response = axios
      .get("https://www.berlin.de/polizei/service/versammlungsbehoerde/versammlungen-aufzuege/index.php/index/all.json?q=")
      .then((response) => response.data.index)
      return response
      };