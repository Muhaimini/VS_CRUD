import * as type from '../types'

const initialState = {
    articles: [],
    loading: false,
    hideadd: false,
    perPage: 20,
    startIndex: 0,
    allCards: 100,
    currentPage: 1,
    error: null
}

const articles = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ARTICLES_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.GET_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.articles
            }
        case type.GET_ARTICLES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }
        case type.NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case type.PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        case type.SET_CURRENT:
            return {
                ...state,
                currentPage: action.payload
            }
        case type.HIDE_ADD:
            return {
                ...state,
                hideadd: !state.hideadd 
            }
        case type.REPLACE_DATA:
            return {
                ...state,
                articles: action.payload
            }
        default:
            return state
    }
}

export default articles