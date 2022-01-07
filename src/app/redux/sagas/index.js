import { all } from 'redux-saga/effects'
import articleSaga from './articleSaga'

export default function* rootSaga() {
    yield all([
        articleSaga()
    ])
}