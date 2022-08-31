import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Create() {
    let navigate = useNavigate();
    const [inputs, setInputs] = useState([])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost/api/crud/save', inputs).then(() => {
            navigate('/');
        });
    }
    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Strona</Form.Label>
                    <Form.Control type="text" name='name' onChange={handleChange} placeholder="Wpisz nazwę strony" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Liczba</Form.Label>
                    <Form.Control type="number" name='number' onChange={handleChange} placeholder="wpisz ilosc osob" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Create