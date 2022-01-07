import axios from 'axios'

const fetch = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content-type': 'application/json'
    }
})

const api = {
    getArticles : async (params) => {
        return fetch.get(params.toString())
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(err))
    },
    postArticle : async (params) => {
        return fetch.post('', params)
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(err))
    },
    updateArticle : async (id, params) => {
        return fetch.patch((id.toString()), params)
        .then(res => Promise.resolve(res))
        .catch(err => Promise.reject(err))
    },
    deleteArticle : async (id) => {
        return fetch.delete(id.toString())
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(err))
    }
}

export default api