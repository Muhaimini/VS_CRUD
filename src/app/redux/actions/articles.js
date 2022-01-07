import * as type from '../types'

export const getArticles = (article) => {
 return {
    type: type.GET_ARTICLES_REQUESTED,
    payload: article
 }
}

export const nextPage = () => {
   return {
      type: type.NEXT_PAGE
   }
}

export const prevPage = () => {
   return {
      type: type.PREV_PAGE
   }
}

export const setCurrent = (current) => {
   return {
      type: type.SET_CURRENT,
      payload: current
   }
}

export const hideAdd = () => {
   return {
      type: type.HIDE_ADD
   }
}

export const replaceData = (data) => {
   return {
      type: type.REPLACE_DATA,
      payload: data
   }
}