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
}
const [state, setState] = useState(initialState);
const handleChange = e =>{
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({...prev, [inputName]: value}))
}
const Form = () => {

    return (
        <Container>
            <Input type="text" placeholder="aaa" name="Name" onChange={handleChange} />
            <Button />
        </Container>
    )
}

export default Form
