import React, { useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { replaceData, hideAdd } from '../../app'
import { fetch } from '../../services'

const Addpost = () => {

    const dispatch = useDispatch()
    const [getValue, setValue] = useState({ userId: 1, id: 0, title: '', body: '' })
    const { articles } = useSelector(state => state.articles)

    const values = e => {
        const {name, value} = e.target
        setValue({ ...getValue, [name]: value })
    }

    const btnPost = async () => {
        try {
            const { data } = await fetch.postArticle(getValue)
            articles.unshift(data)
            dispatch(replaceData(articles))
            dispatch(hideAdd())
        } catch (error) {
            console.log(`${error}`)
        }
    }


    return (
        <Container className="addpost">
            <Card style={{ padding: '20px', width: '50%', margin: 'auto' }}>
                <Card.Header>
                    <Form.Control onChange={ e => values(e) } as="textarea" name="title" placeholder="Title" rows={2} />
                </Card.Header>
                <hr />
                <Card.Body>
                <Form.Control onChange={ e => values(e) } as="textarea" name="body" placeholder="Content" rows={4} />
                </Card.Body>
                <Button onClick={ btnPost }>Post</Button>
            </Card>
        </Container>
    )

}

export default Addpost