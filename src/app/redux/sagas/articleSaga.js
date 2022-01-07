import { fetch } from '../../../services'
import { call, put, takeEvery } from 'redux-saga/effects'

const articleApi = async (params) => {
    try {
        const result = await fetch.getArticles(params)
        return result.data
    } catch (error) {
        console.log(`${error}`)
    }
}

function* fetchArticles(action){
    try {
        const articles = []
        for(let i = 1; i <= 100; i++){
            articles[i-1] = yield call(() => articleApi(i))
            yield put({ type: 'GET_ARTICLES_SUCCESS', articles })
        }
    } catch (error) {
        yield put({ type: 'GET_ARTICLES_FAILED', message: error.message })
    }
}

function* articleSaga(){
    yield takeEvery('GET_ARTICLES_REQUESTED', fetchArticles)
}

export default articleSaga