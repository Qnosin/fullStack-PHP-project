import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

    const [inputs, setInputs] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();



    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get(`http://localhost/api/${id}`).then((res) => {
            res.data.map((data) => {
                setInputs(data);
            })
        }
        )
    }


    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: Number(value) }));

    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs)
        axios.put(`http://localhost/api/${id}/edit`, inputs).then((res) => {
            navigate('/');
        }
        )
    }
    console.log(inputs);
    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Strona</Form.Label>
                    <Form.Control type="text" name='nazwa' value={inputs.nazwa} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Liczba</Form.Label>
                    <Form.Control type="number" name='ilosc' value={inputs.ilosc} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Edit