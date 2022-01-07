import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { fetch } from '../../services'
import { useDispatch, useSelector } from 'react-redux'


const Modals = (props) => {

    const { title, body, setDisplayDialog, id, userId } = props
    const [getForm, setForm] = useState({ id, title, body, userId })
    const { articles } = useSelector(state => state.articles)


    const getValue = e => {
        const { name, value } = e.target
        setForm({ ...getForm, [name]: value })
    }

    const save = async () => {
        try {
            const { id } = getForm
            const { data } = await fetch.updateArticle(id, getForm)
            if(data){
                const index = articles.findIndex(value => value.id === id)
                articles[index].title = data.title
                articles[index].body = data.body
                setDisplayDialog(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const remove = async () => {
        try {
            const { data } = await fetch.deleteArticle(id)
            if(data){
                const index = articles.findIndex(value => value.id === id)
                articles.splice(index, 1)
                setDisplayDialog(false)
            }
        } catch (error) {
            console.log(`${error}`)
        }
    }

    return (
        <Modal.Dialog>
            <Modal.Header>
                <Form.Control onChange={e => getValue(e)} name='title' style={{ border: 'none' }} as="textarea" defaultValue={title} rows={1} />
            </Modal.Header>

            <Modal.Body>
                <Form.Control onChange={e => getValue(e)} name='body' style={{ border: 'none' }} as="textarea" defaultValue={body} rows={4} />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={ () => setDisplayDialog(false) } variant="success">Close</Button>
                <Button onClick={ remove } variant="secondary">Delete</Button>
                <Button onClick={ save } variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )

}

export default Modals