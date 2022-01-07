import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { getArticles, hideAdd } from '../../app'
import { Pagination, Nav } from '../index'
import Modal from './Modal'
import Addpost from './Addpost'


const Cardbody = () => {
    const dispatch = useDispatch()
    const [getId, setId] = useState(0)
    const [getUserId, setUserId] = useState(0)
    const [getBody, setBody] = useState('')
    const [getTitle, setTitle] = useState('')
    const [displayDialog, setDisplayDialog] = useState(false)
    const { articles, perPage, currentPage, hideadd } = useSelector(state => state.articles )

    const paginator = () => {
        const offset = (currentPage - 1) * perPage
        const data = articles.slice(offset).slice(0, perPage)
        return data
    }
    
    useEffect(() => {
        dispatch(getArticles())
    },[dispatch])
    
    const btnDetail = (data) => {
        setId(data.id)
        setUserId(data.userId)
        setBody(data.body)
        setTitle(data.title)
        setDisplayDialog(!displayDialog)
    }

    return (
        <div>
            <Nav />
            { hideadd && <Addpost /> }
            <Container className="body_card" >
                {
                    displayDialog ? <Modal userId={getUserId} id={getId} title={getTitle} body={getBody} setDisplayDialog={setDisplayDialog} /> :
                    <>
                        <Row md={4}>
                            {
                                paginator().map(el => 
                                    <Col key={el.id}>
                                        <Card style={{ padding: '20px', margin: '10px', height: '480px' }}>
                                            <Card.Title>{ el.title }</Card.Title>
                                            <hr />
                                            <Card.Body>
                                                <p>{ el.body }</p>
                                            </Card.Body>
                                            <Button onClick={() => btnDetail(el) }>Detail</Button>
                                        </Card>
                                    </Col>
                                ) 
                            }
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="auto" style={{ padding: '20px' }} >
                                <Pagination />
                            </Col>
                        </Row>
                    </>
                }
            </Container>
        </div>
    )
}

export default Cardbody