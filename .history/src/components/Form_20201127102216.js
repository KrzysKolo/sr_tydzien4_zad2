import React, { useState } from 'react';
import Input from './formComponents/Input'
import Button from './formComponents/Button'
import styled from 'styled-components';

const Container = styled.section`
width: 80%;
max-width: 500px;
height: 200px;
background: green;
`;

const initialState = {
    name: '',
    email: '',
}

const Form = () => {
    const [state, setState] = useState(initialState);

const handleChange = e =>{
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({...prev, [inputName]: value}))
}
const onSubmit = e => {
    e.preventDefault();
    setState(initialState)
}
    return (
        <Container onClick={onSubmit}>
            <Input type="text" placeholder="your name" name="name"  value={state.initialState} onChange={handleChange} />
            <Input type="email" placeholder="your email" name="email"  value={state.initialState} onChange={handleChange} />
            <Button />
        </Container>
    )
}

export default Form
