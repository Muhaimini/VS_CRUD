import React from 'react'
import { hideAdd } from '../../app'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'


const Navi = () => {

    const dispatch = useDispatch()

    const hide = () => {
        dispatch(hideAdd())
    }
    
    return (
        <Navbar bg="primary" variant="dark" style={{ position: 'fixed', width: '100%', zIndex: "2", top: 0 }}>
            <Container>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={ hide }>Add article</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default Navi