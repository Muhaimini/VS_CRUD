import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { prevPage, nextPage, setCurrent } from '../../app'


const Paginations = () => {

    const dispatch = useDispatch()
    const { perPage, currentPage, allCards } = useSelector(state => state.articles)
    const pageLength = Math.ceil(allCards/perPage)

    const nextButton = () => {
        dispatch(nextPage())
    }

    const prevButton = () => {
        dispatch(prevPage())
    }

    const setCurrentButton = (num) => {
        dispatch(setCurrent(num))
    }

    const buttonPagin = () => {
        const body = []
        for(let i = 1; i <= pageLength; i++){
            body.push(<Pagination.Item onClick={ () => setCurrentButton(i) } key={i} active={ currentPage === i }>{i}</Pagination.Item>)
        }
        return body
    }

    return(
        <Pagination>
            <Pagination.First onClick={ () => dispatch(setCurrent(1)) } disabled={ currentPage === 1 } />
            <Pagination.Prev onClick={prevButton} disabled={ currentPage === 1 } />
            {
                buttonPagin()
            }
            <Pagination.Next onClick={nextButton} disabled={ currentPage === pageLength } />
            <Pagination.Last onClick={ () => dispatch(setCurrent(pageLength)) } disabled={ currentPage === pageLength } />
        </Pagination>
    )
}

export default Paginations